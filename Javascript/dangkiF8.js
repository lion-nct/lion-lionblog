// Đối tượng "Validator"
function Validator(options) {
  var selectorRules = {};

  // Hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage;

    // Lấy ra các rules của selector
    var rules = selectorRules[rule.selector];

    // Lặp qua từng rule && kiểm tra
    // Nếu có lỗi thì dừng việc kiểm tra
    for (var i = 0; i < rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }

  //  lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // Khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();

      // Lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        validate(inputElement, rule);
      });
    };

    // Lặp qua mỗi rule và xử lí (lắng nghe sự kiện blur,input,... )
    options.rules.forEach(function (rule) {
      // Lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        // xử lí trường hợp blur ra ngoài input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        // xử lí trường hợp người dùng nhập vào input
        inputElement.oninput = function () {
          var errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
          );
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

// Định nghĩa rules
// Nguyên tắc của các rules
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => không trả ra gì (undefined)
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Trường này phải là email";
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      // chính là value nhập vào từ password
      return value === getConfirmValue()
        ? undefined
        : message;
    },
  };
};
