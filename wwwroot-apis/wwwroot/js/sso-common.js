
// SSO Loader module to show and hide loader
var SSOLoader = (() => {
    let showLoader = function () {
        if (document.getElementById("sso-loader")) {
            document.getElementById("sso-loader").style.display = 'block';
        }
    }

    let hideLoader = function () {
        if (document.getElementById("sso-loader")) {
            document.getElementById("sso-loader").style.display = 'none';
        }
    }

    return {
        showLoader: function () {
            showLoader();
        },
         hideLoader: function () {
            hideLoader();
        }
    };

})();