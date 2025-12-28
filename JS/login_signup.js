document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("register").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        // Trước hàm xử lý
        document.getElementById("resultMessage").textContent = "";

        // Get input values
        var username = document.getElementById("signin-username").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("signin-pwd").value.trim();
        var confirmPassword = document.getElementById("pwdComfirm").value.trim();

        // Regular expressions for validation
        var usernameRegex = /^[a-zA-Z0-9]{4,}$/;
        var phoneRegex = /^[0-9]{10}$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset error messages
        document.getElementById("signin-usernameError").textContent = "";
        document.getElementById("phoneError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("signin-pwdError").textContent = "";
        document.getElementById("pwdComfirmError").textContent = "";

        // Validation
        var isValid = true;
        if (!usernameRegex.test(username)) {
            document.getElementById("signin-usernameError").textContent = "Tên đăng nhập không hợp lệ";
            isValid = false;
        }
        if (!phoneRegex.test(phone)) {
            document.getElementById("phoneError").textContent = "Số điện thoại không hợp lệ";
            isValid = false;
        }
        if (!emailRegex.test(email)) {
            document.getElementById("emailError").textContent = "Email không hợp lệ";
            isValid = false;
        }
        if (password.length < 6) {
            document.getElementById("signin-pwdError").textContent = "Mật khẩu phải có ít nhất 6 ký tự";
            isValid = false;
        }
        if (password !== confirmPassword) {
            document.getElementById("pwdComfirmError").textContent = "Mật khẩu nhập lại không khớp";
            isValid = false;
        }

        if (isValid) {
            document.getElementById("resultMessage").textContent = "Đăng ký thành công!";

            // Xóa nội dung của các trường nhập liệu
            document.getElementById("signin-username").value = '';
            document.getElementById("phone").value = '';
            document.getElementById("email").value = '';
            document.getElementById("signin-pwd").value = '';
            document.getElementById("pwdComfirm").value = '';

            // Xóa thông báo lỗi
            document.getElementById("signin-usernameError").textContent = '';
            document.getElementById("phoneError").textContent = '';
            document.getElementById("emailError").textContent = '';
            document.getElementById("signin-pwdError").textContent = '';
            document.getElementById("pwdComfirmError").textContent = '';
        }
    });
});
