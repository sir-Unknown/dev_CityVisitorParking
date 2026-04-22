(this.webpackJsonpparkapp = this.webpackJsonpparkapp || []).push([
  [0],
  {
    1044: function (e, t, a) {
      "use strict";
      a.r(t);
      (a(336), a(722), a(731));
      var n = a(0),
        r = a.n(n),
        o = a(138),
        i = a.n(o),
        c = (a(915), a(497)),
        s = a(3),
        l = a(1051),
        u = a(1052),
        d = a(1053),
        m = a(2),
        _ = a(1050),
        p = a(221),
        f = a(11),
        g = a(222),
        v = a.n(g),
        h = "/gsmpark-app-www/json",
        E = a(1),
        b = a(223),
        A = a(224),
        T = (function () {
          function e(t) {
            (Object(b.a)(this, e), (this.baseUrl = t.baseURL));
          }
          return (
            Object(A.a)(e, [
              {
                key: "post",
                value: function (e) {
                  return this.request(
                    Object(E.a)(
                      {
                        method: "POST",
                        credentials: "include",
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                      },
                      e,
                    ),
                  );
                },
              },
              {
                key: "get",
                value: function (e) {
                  var t = e.url,
                    a = e.callback,
                    n = e.callbackError;
                  return fetch(t, {
                    method: "GET",
                    headers: { "Content-Type": "json" },
                  })
                    .then(function (e) {
                      if (e.ok) return e.json();
                      a && a(e.status);
                    })
                    .catch(function (e) {
                      n && n(e);
                    });
                },
              },
              {
                key: "request",
                value: function (e) {
                  var t = e.url,
                    a = e.params,
                    n = e.forwardingUrl,
                    r = e.callback,
                    o = e.callbackError,
                    i = n || this.baseUrl + t,
                    c = Object(E.a)({}, e);
                  return (
                    a || (a = ""),
                    (c.body = encodeURI(a)),
                    fetch(i, c)
                      .then(function (e) {
                        if (e.ok) return e.json();
                        r && r(e.status);
                      })
                      .catch(function (e) {
                        o && o(e);
                      })
                  );
                },
              },
            ]),
            e
          );
        })(),
        O = function () {
          return {
            withConfig: function (e) {
              return new T(e);
            },
          };
        },
        N = function () {
          var e = O().withConfig({ baseURL: h });
          return {
            login: function (t, a, n, r, o) {
              return e.post({
                url: "/check_credentials.json",
                params: "email=" + t + "&password=" + a + "&locale=" + n,
                callback: r,
                callbackError: o,
              });
            },
            getCaptcha: function (t) {
              return e.post({
                url: "/get_captcha.json",
                params: "locale=" + t,
              });
            },
            initResetPassword: function (t, a, n, r) {
              return e.post({
                url: "/init_reset_password.json",
                params:
                  "captcha=" +
                  t +
                  "&captcha_id=" +
                  a +
                  "&email=" +
                  n +
                  "&locale=" +
                  r,
              });
            },
            resetPassword: function (t, a, n, r, o, i, c) {
              return e.post({
                url: "/reset_password.json",
                params:
                  "captcha=" +
                  t +
                  "&captcha_id=" +
                  a +
                  "&email=" +
                  n +
                  "&locale=" +
                  r +
                  "&new_password=" +
                  o +
                  "&new_password_repeat=" +
                  i +
                  "&validation_code=" +
                  c,
              });
            },
          };
        },
        y = function () {
          var e = O().withConfig({ baseURL: h });
          return {
            getCategories: function (t, a, n) {
              return e.post({
                url: "/get_categories.json",
                params: "locale=" + t,
                callback: a,
                callbackError: n,
              });
            },
            getCategoryProductDetails: function (t, a) {
              return e.post({
                url: "/get_category_product_details.json",
                params: "product_id=" + t + "&locale=" + a,
              });
            },
            get_apk_information: function (t) {
              return e.post({
                url: "/get_apk_information.json",
                params: "apk_key=" + t,
              });
            },
            add_apk_product_automatic: function (t) {
              return e.post({
                url: "/add_apk_product_automatic.json",
                params: "apk_key=" + t,
              });
            },
            add_apk_with_account_creation: function (t, a, n) {
              return e.post({
                url: "/add_apk_with_account_creation.json",
                params:
                  "apk_key=" + t + "&password=" + a + "&repeat_password=" + n,
              });
            },
            removeProductAndGrant: function (t, a) {
              return e.post({
                url: "/remove_product_and_grant.json",
                params: "locale=" + t + "&product_id=" + a,
              });
            },
            force_single_active_action_product: function (t, a, n) {
              return e.post({
                url: "/force_single_active_action_product.json",
                params: "locale=" + t + "&product_id=" + a + "&mbr_ident=" + n,
              });
            },
            getProductLocations: function (t, a, n) {
              return e.post({
                url: "/get_product_locations.json",
                params: "locale=" + t + "&product_id=" + a + "&location=" + n,
              });
            },
            addAccountProduct: function (t, a) {
              return e.post({
                url: "/add_account_products.json",
                params: "locale=" + t + "&data=" + a,
              });
            },
          };
        },
        I = function () {
          var e = O().withConfig({ baseURL: h });
          return {
            getBalance: function (t, a) {
              return e.post({
                url: "/get_balance.json",
                params: "product_id=" + t + "&locale=" + a,
              });
            },
            getAvailableActions: function (t) {
              return e.post({
                url: "/get_available_actions.json",
                params: "product_id=" + t,
              });
            },
            setThreshold: function (t, a) {
              return e.post({
                url: "/set_threshold.json",
                params: "threshold_value=" + t + "&autonomous_product_id=" + a,
              });
            },
          };
        },
        C = function () {
          var e = O().withConfig({ baseURL: h });
          return {
            createParkingActions: function (t, a, n) {
              return e.post({
                url: "/start_action.json",
                params: "data=" + t + "&locale=" + n + "&product_id=" + a,
              });
            },
            extendParkingActions: function (t, a, n, r) {
              return e.post({
                url: "/extend_action.json",
                params:
                  "action_id=" +
                  t +
                  "&locale=" +
                  a +
                  "&product_id=" +
                  n +
                  "&VALID_UNTIL=" +
                  r,
              });
            },
            stopParkingActions: function (t, a, n) {
              return e.post({
                url: "/stop_action.json",
                params: "action_id=" + t + "&locale=" + a + "&product_id=" + n,
              });
            },
            get_activations: function () {
              return e.post({ url: "/get_activations.json" });
            },
          };
        },
        S = function () {
          var e = O().withConfig({ baseURL: h });
          return {
            getAuthorizations: function (t, a) {
              return e.post({
                url: "/get_category_product_details.json",
                params: "product_id=" + t + "&locale=" + a,
              });
            },
            createAuthorization: function (t, a, n) {
              return e.post({
                url: "/send_apk_grant_email.json",
                params: "data=" + t + "&product_id=" + a + "&locale=" + n,
              });
            },
            deleteAuthorization: function (t, a, n, r) {
              return e.post({
                url: "/remove_grant.json",
                params:
                  "grt_identifier=" +
                  t +
                  "&grt_type=" +
                  a +
                  "&product_id=" +
                  n +
                  "&locale=" +
                  r,
              });
            },
          };
        },
        w = function () {
          var e = O().withConfig({ baseURL: h });
          return {
            getParkingHistory: function (t, a, n, r) {
              return e.post({
                url: "/get_action_history.json",
                params:
                  "product_id=" +
                  t +
                  "&locale=" +
                  a +
                  "&startindex=" +
                  n +
                  "&stopindex=" +
                  r,
              });
            },
            getTransactionHistory: function (t, a, n, r) {
              return e.post({
                url: "/get_mutation_history.json",
                params:
                  "product_id=" +
                  t +
                  "&locale=" +
                  a +
                  "&startindex=" +
                  n +
                  "&stopindex=" +
                  r,
              });
            },
            sendActionHistoryMail: function () {
              return e.post({
                url: "/send_action_history_mail.json",
                params: "",
              });
            },
            sendMutationHistoryMail: function () {
              return e.post({
                url: "/send_mutation_history_mail.json",
                params: "",
              });
            },
          };
        },
        k = function () {
          var e = O().withConfig({ baseURL: h });
          return {
            getFavorites: function (t, a) {
              return e.post({
                url: "/get_category_product_details.json",
                params: "product_id=" + t + "&locale=" + a,
              });
            },
            handleFavorite: function (t, a, n) {
              return e.post({
                url: "/handle_favorite.json",
                params: "data=" + t + "&locale=" + a + "&product_id=" + n,
              });
            },
          };
        },
        P = function () {
          var e = O().withConfig({ baseURL: h });
          return {
            getTopupListUpgrade: function (t, a) {
              return e.post({
                url: "/get_upgrade_units.json",
                params:
                  "product_id=" +
                  t +
                  "&locale=" +
                  a +
                  "&startindex=1&stopindex=20",
              });
            },
            getStartTransactionTopup: function (t, a, n, r) {
              return e.post({
                url: "/start_transaction.json",
                params:
                  "category_id=" +
                  t +
                  "&locale=" +
                  a +
                  "&pay_amount=" +
                  n +
                  "&product_id=" +
                  r,
              });
            },
            getPaymentStatus: function () {
              return e.post({ url: "/get_payment_status.json" });
            },
          };
        },
        D = function () {
          var e = O().withConfig({ baseURL: h });
          return {
            get_apk_grant_information: function (t, a) {
              return e.post({
                url: "/get_apk_grant_information.json",
                params: "agk_key=" + t + "&locale=" + a,
              });
            },
            add_apk_grant_product_automatic: function (t) {
              return e.post({
                url: "/add_apk_grant_product_automatic.json",
                params: "agk_key=" + t,
              });
            },
            add_apk_grant_product_with_account_creation: function (t, a, n) {
              return e.post({
                url: "/add_apk_grant_with_account_creation.json",
                params:
                  "agk_key=" + t + "&password=" + a + "&repeat_password=" + n,
              });
            },
            agk_register_email: function (t, a, n) {
              return e.post({
                url: "/agk_register_email.json",
                params: "agk_key=" + t + "&agk_email=" + a + "&locale=" + n,
              });
            },
          };
        },
        j = a(145),
        L = a.n(j),
        M = a(96),
        R = Object(M.a)({});
      function F() {
        return localStorage;
      }
      function U() {
        try {
          var e = "__some_random_key_you_are_not_going_to_use__";
          return (F().setItem(e, e), F().getItem(e), F().removeItem(e), !0);
        } catch (t) {
          return (
            H.failedStorage || ((H.failedStorage = !0), R.push("/login")),
            !1
          );
        }
      }
      var H = {
        failedStorage: !1,
        setItem: function (e, t) {
          if (U()) return ((this.failedStorage = !1), F().setItem(e, t));
        },
        getItem: function (e) {
          if (U()) return ((this.failedStorage = !1), F().getItem(e));
        },
        removeItem: function (e) {
          if (U()) return ((this.failedStorage = !1), F().setItem(e, {}));
        },
        clear: function () {
          U() && ((this.failedStorage = !1), F().clear());
        },
      };
      ((L.a.fallbacks = !0),
        (L.a.defaultLocale = "nl_NL"),
        (L.a.translations = {
          en_UK: {
            login: "Log in",
            email: "Email",
            password: "Password",
            forgot_password: "Forgot password?",
            remember_me: "Remember me",
            yes: "Yes",
            no: "No",
            cookie_missing:
              "This website uses a session cookie. This is a functional cookie. You cannot use this website without this cookie.",
            settings: "Settings",
            language: "Language",
            name: "Name",
            my_name: "My name",
            start_product: "Start with product",
            contrast: "Contrast",
            last_used_product: "Last used product",
            change_starting_product: "Change starting product",
            warn_on_low_balance: "Warn on low balance?",
            warn_if_balance_below_euro: "Warn if balance below euro",
            warn_if_balance_below_minutes: "Warn if balance below minutes",
            warn_if_balance_below_times: "Warn if balance below times",
            warn_if_balance_below: "Warn if balance below",
            value_should_be_greater_than_0: "Value should be greater than 0",
            button_save: "Save",
            button_topup: "Settle payment",
            delete: "Delete",
            NO_USERNAME:
              "You have not entered your e-mail address in the appropriate field.",
            NO_PASSWORD:
              "You have not entered your password in the appropriate field.",
            INVALID_CREDS: "You have entered an invalid username or password",
            top_up: "Top up",
            authorizations: "Authorization(s)",
            add_new_parking_action: "New parking action",
            history: "History",
            choose_another_product: "Choose another product",
            new_parking_action: "New parking action",
            logout: "Logout",
            parking_actions: "Parking actions",
            activate_license_plate: "Activate license plate",
            transactions: "Transactions",
            running: "Current",
            planned: "Scheduled",
            parking: "Parking",
            transaction: "Transaction",
            stop: "Stop",
            valid_from: "Valid from",
            valid_from_only_start_date: "Valid from",
            until: "Until",
            until_lowercase: "until",
            extend: "Extend",
            license_plate: "License plate",
            license_plate_message: "Enter license plate",
            enter_favorite_name: "Enter favorite name",
            name_favorite: "Name favorite",
            start_date_time: "Start date and time",
            end_date_time: "End date and time",
            start: "Start",
            home: "Home",
            favorite_message: "Favorite name saved",
            running_action_not_found: "Current actions not found",
            planned_action_not_found: "Scheduled actions not found",
            parking_action_info:
              "Parking action is stopped due to activation at the end of the day.",
            alternative_info: "The following alternative is proposed:",
            no_thanks: "no thanks",
            activate: "activate",
            only_paid_parking: "Only the paid parking time will be charged",
            today: "today",
            yesterday: "yesterday",
            tomorrow: "tomorrow",
            confirm: "Confirm",
            anonymous: "Authorized",
            unknown: "Unknown",
            temporary_license_plate_not_active:
              "The fixed license plate is not active as long as the temporary license plate is used",
            temporary_license_plate_active:
              " The fixed license plate is active",
            temporary_vehicle: "Temporary vehicle",
            select_location_massage: "Select location",
            stop_parking_action_confirmation:
              "Are you sure you want to stop this parking action?",
            delete_parking_action_confirmation:
              "Are you sure you want to delete this parking action?",
            stop_action_yes: "Yes, stop it",
            stop_action_no: "No, keep it",
            attention_your_balance: "Attention: your balance is: {{balance}}",
            your_parking_action_may_have_been:
              "Your parking action may have been shortened due to a shortage in balance.",
            month_0: "Jan",
            month_1: "Feb.",
            month_2: "Mar",
            month_3: "Apr",
            month_4: "May",
            month_5: "June",
            month_6: "July",
            month_7: "Aug",
            month_8: "Sept",
            month_9: "Oct",
            month_10: "Nov",
            month_11: "Dec",
            january: "January",
            february: "February",
            march: "March",
            april: "April",
            may: "May",
            june: "June",
            july: "July",
            august: "August",
            september: "September",
            october: "October",
            november: "November",
            december: "December",
            hours_abbreviated: "h",
            su: "Su",
            mo: "Mo",
            tu: "Tu",
            we: "We",
            Th: "Th",
            fr: "Fr",
            sa: "Sa",
            other_products: "All products",
            my_license_plate: "My license plate",
            for_license_plate: "For license plate",
            other_products_save: "Save",
            via: "Via",
            other_products_remove_success_message: "Product removed",
            saldo: "Balance",
            max_act: "Available actions",
            action: "action",
            actions: "actions",
            action_left: "action left",
            actions_left: "actions left",
            authorizedFor: "Authorized for",
            withdraw_other_product_confirmation:
              "Are you sure you want to delete this product?",
            select: "Select",
            blocked: "Blocked",
            expired: "Expired",
            revoked: "Revoked",
            authorization_by: "Authorization by",
            running_lowercase: " current",
            planned_lowercase: " scheduled",
            parking_actions_lowercase: "parking actions:",
            no_license_plate_info: "No license plate is currently active",
            for: " for ",
            balance_warning: "Balance warning",
            set_balance_waning: "Set",
            set_balance_alert: "Set balance alert",
            current_balance: "Current balance",
            your_balance_has_come_below:
              "Your balance ({{amount}}) has come below the set value of ({{threshold}}).",
            set_balance_alarm: "Set balance alarm",
            action_time: "time",
            action_times: "times",
            you_cannot_start_parking_action_because_your_balance:
              "You cannot start a parking action because your balance is \u20ac 0,00.",
            click_top_up_button_or_OK:
              "Click the [Top up] button to top up now (if possible), or [OK] if you want to do this later.",
            authorized_by_me: "Authorized by me",
            new_authorization: "New authorization",
            edit: "Edit",
            withdraw: "Withdraw",
            units: "Units",
            authorization_save: "Save",
            value_empty_message: "Value can not be empty",
            units_too_large_message: "Please, set smaller value",
            value_more_then_0: "Value should be bigger then 0",
            same_user_email: "You can not use your email here",
            enter_correct_email: " Enter a correct e-mail address",
            edit_authorization: "Edit authorization",
            withdraw_authorization: "Withdraw authorization",
            withdraw_authorization_success: "Authorization is withdrawn",
            withdraw_authorization_failed: "Authorization can not be withdrawn",
            withdraw_authorization_confirmation:
              "Are you sure you want to withdraw this authorization?",
            only_once: "Only once",
            with_balance: "With balance",
            accepted: "Accepted",
            not_accepted: "Not yet accepted",
            have_not_authorized:
              "You have no authorizations yet for this sector",
            MINUTE_label: "Number of minutes",
            EURO_label: "Amount in Euro",
            TIMES_label: "Number of times",
            minuut: "MINUTE",
            hours: "Hours",
            minutes: "Minutes",
            withdraw_authorization_yes: "Yes, withdraw it",
            withdraw_authorization_no: "No, keep it",
            through_email: "Through e-mail",
            through_authorization_key: "Through authorization key",
            authorization_type: "Authorization type",
            select_license_plate: "Select license plate",
            favorite: "Favorite",
            recent: "Recently parked",
            cancel: "Cancel",
            favorite_not_found: "You do not have any favorites yet",
            recent_not_found: "There are no recent parking actions",
            select_date_time: "Select date and time",
            date_time_can_not_be_past: "Date and time cannot be past",
            select_valid_end_time: "Select valid end time",
            select_valid_start_time: "Select valid start time",
            only_letters_and_numbers: "Only letters and numbers",
            date: "Date",
            time: "Time",
            label_start_date: "Start date",
            label_end_date: "End date",
            label_start_time: "Start time",
            label_end_time: "End time",
            extend_parking_action: "Extend parking action",
            parking_action_extend_message: "Parking action has been extended",
            parking_action_stop_message: "Parking action has been stopped",
            edit_planned_parking_action: "Edit scheduled parking action",
            planned_parking_action_changed: "Scheduled parking action changed",
            could_not_change_planned_parking_action:
              "Could not change scheduled parking action",
            favorites: "Favorites",
            new_favorite: "New favorite",
            favorite_save: "Save",
            yes_delete_it: "Yes, delete it",
            no_keep_it: "No, keep it",
            withdraw_favorite_success: "Favorite deleted",
            withdraw_favorite_failed: "Favorite can not be deleted",
            withdraw_favorite_confirmation:
              "Are you sure you want to delete this favorite?",
            have_not_favorites:
              "You do not have any favorites yet for this product",
            start_parking_action: "Start parking action",
            change: "Change",
            change_favorite: "Change favorite",
            product_information: "Arrangement",
            duration: "Duration:",
            content_arrangement: "Content of this arrangement",
            product_valid_to: "Valid until",
            valid: "Valid",
            form: "from",
            please_enter_email:
              "Please enter your e-mail address below to request a new password",
            request_new_password: "Request a new password",
            enter_number_with_image:
              "Enter the letters / numbers from the above image below. This is to prevent automated programs from abusing this service.",
            send: "Send",
            set_new_password: "Set new password",
            enter_new_password:
              "Enter your new password below. This must consist of at least 8 characters, of which at least 1 capital letter, at least 1 lowercase letter, at least 1 number and at least 1 special symbol such as #, @ or $.",
            re_enter_password: "Re-enter password",
            set: "Set",
            next: "Next",
            password_empty: "The password cannot be empty",
            password_mismatch: "Password mismatch",
            password_requirements: "Password does not meet requirements",
            select_below_the_value_by_which_the_balance_should_be_increased:
              "Select below the value by which the balance should be increased",
            no_products_to_choose_from: "No products to choose from",
            topUp_massage:
              "For this period it is no longer possible to top up your balance because the maximum has been reached.",
            pay: "Pay",
            topup_description:
              "These top-up amounts are still permitted for this product within the current period",
            how_much: "With how much does the balance have to be topped up ?",
            you_have_current_and_or_planned_parking_actions:
              "Attention: Your balance has been increased. You may want to extend or reschedule your current and/or planned parking actions for this product. ",
            your_session_has_expired_you_have_to_log_in_again:
              "Your session has expired. You have to log in again",
            the_product: "The product",
            is_blocked_and_cannot_be_used: "is blocked and cannot be used",
            becomes: "becomes",
            valid_from_lowercase: "valid from",
            right_now_you_dont_have_any_products:
              "Right now you don\u2019t have any products",
            no_product: "No product",
            increase_results: "Increase results",
            check_again: "Check again",
            continue: "Continue",
            status_PAYMENT_INIT_message:
              "No payment result was received. There might be a problem with the payment service.",
            status_PAYMENT_CANCELLED_message: "The payment was cancelled.",
            status_PAYMENT_PAID_NOT_PROCESSED_message:
              "Your payment has been registered but not yet processed. When your payment has not been processed after 15 minutes, please contact your parking supplier.",
            status_PAYMENT_SUCCESS_message:
              "The payment completed succesfully - your balance has been updated.",
            status_PAYMENT_UNCERTAIN_message:
              "The status of your payment is uncertain - possibly the payment will be processed a later date",
            status_INVALID_EXT_CREDS_message:
              "The login credentials are not valid",
            status_PWD_NOT_EQUAL_message: "The passwords are not the same",
            register_product: "Create account and/or add product",
            ok: "OK",
            you_about_register: "You are about to register",
            of: "Of",
            with_the_account: "With the account",
            info_product:
              "To use this product, you need to create an account. The account is your e-mail address in combination with a password that you can set below. This must consist of at least 8 characters, of which at least 1 capital letter, at least 1 lowercase letter, at least 1 number and at least 1 special symbol such as #, @ or $.",
            please_enter_password: "Please enter password",
            please_repeat_password: "Please repeat this password",
            product_PRODUCT_ADDED:
              "The product was successfully added to your account.",
            problem_adding_product:
              "There was a problem adding the product to your account",
            product_not_been: "The product has NOT been added to your account.",
            you_about_register_product: "You are about to register",
            register_product_info:
              "By clicking on Confirm the product below is added to your account under the organization ",
            product_will_be_linked:
              "This product will be linked to your account: ",
            create_password_account: "Create a password for this account: ",
            password_info:
              "The password needs <span> to be at least 8 characters long</span> and should contain <span>at least 1 of the following:</span>",
            upper_case_letter: "upper case letter",
            lower_case_letter: "lower case letter",
            number: "number",
            special_symbol: "special symbol (like: # @ $)",
            create_account_add_product:
              "Create an account to add and use the parking product of the <span>{{municipality}}</span> below:",
            create_an_account: "Create an account",
            click_password_requirements:
              "The password must consist of at least 8 characters, of which at least 1 uppercase letter, at least 1 lowercase letter, at least 1 digit and at least 1 special symbol such as #, @ or $.",
            register_grant: "Register grant",
            granted_by: "Granted by",
            you_about_register_grant: "You are about to register a grant for",
            problem_adding_grant:
              "There was a problem adding the grant to your account",
            grant_not_been: "The grant has NOT been added to your account.",
            EXPIRED: "The provided key has expired",
            NODATAFOUND: "Unable to find data",
            PRODUCT_ADDED: "The product was successfully added to your account",
            CONFIG_ERROR: "A configuration error has occurred",
            INVALID_PASSWORD:
              "The password does not meet the requirements for passwords",
            register_grant_info:
              "By clicking on Confirm you accept the authorization below. You will then find the authorized product under the organization ",
            clear: "Clear",
            close_menu: "Close menu",
            menu: "Menu",
            back: "Back",
            theme: "Theme",
            add_new: "Add new",
            submit: "Submit",
            search: "Search",
            refresh: "Refresh",
            choose_date: "Choose date",
            increase_hours: "Increase hours",
            decrease_hours: "Decrease hours",
            increase_minutes: "Increase minutes",
            decrease_minutes: "Decrease minutes",
            history_have_not_parking_actions:
              "You have no parking actions yet in this sector",
            history_have_not_activation:
              "You have no activation yet in this sector",
            history_have_not_transactions:
              "You have no transactions yet in this sector",
            load_more: "Load more",
            no_more_records_found: "No more records found.",
            send_full_history_to_email: "Send full history to e-mail",
            please_check_your_email:
              "Please check your e-mail for history data.",
            license_plate_switch: "License plate switch",
            no_license_plate_has_yet_been_activated:
              "No license plate has yet been activated",
            choose_license_number_activate:
              "Choose a license plate to activate:",
            active_license_plate: "The active license plate is:",
            license_plate_not_activate: "License plate not activate",
            active_license_plate_since:
              "The active license plate <b>since {{since}}</b> is:",
            default: "Default",
            black_white: "Black-white",
            white_black: "White-black",
            black_yellow: "Black-yellow",
            yellow_black: "Yellow-black",
            select_location: "Select location",
            auto_login_message:
              "You have been logged in automatically after session expiration.",
            about: "About 2Park",
            app_version: "Version 1.2.0.21",
            env_dev: "(Development)",
            env_acc: "(Acceptance)",
            env_prod: "(Production)",
            copyright: "Copyright 2019-2023",
            all_rights_reserved: "All rights reserved",
            support: "Support:",
            add_product: "Add product",
            product_code: "Product code",
            pin_code: "Pin code",
            add_product_description:
              "Enter the product code and pin code as stated on your allocation letter below.",
            you_can_use_product: "You can now use this product",
            all_actions: "All parking actions",
            all_parking_actions: "All parking actions",
            organizations: "Organizations",
            organizations_menu: "All products",
            show_products: "Show products",
            show_info: "Info",
            product_label: " product",
            product_plural_label: " products",
            alt1: "Set end date and time to: <b>{{time}}</b>",
            alt2: "Go back and change the parking action manually",
            alt_descriptions:
              "You can't set a parking action that lasts past midnight. You can do either of the following:",
            pick_choice: "Pick one of the choices above",
            pick_choice1: "Confirm parking with new end date and time",
            pick_choice2: "Go back and edit the parking action",
            today_at: "Today at ",
            make_your_choice: "Make your choice from the options below:",
            start_with_the_product:
              "Start with the product that was in use when the app was last used.",
            new_content_available: "New content is available:",
            press_button_to_reload_the_page: "Press button to reload the page.",
            reload_page: "OK",
            reload_instruction1:
              "* If the reload does not work, delete your history, cookies and other browser data.",
            reload_instruction2: "Then try again.",
            activations: "Activations",
            new_activation: "New activation",
            activate_uppercase: "Activate",
            activations_license_plate: "Activation:",
            stop_activation_confirmation:
              "Are you sure you want to stop this activation?",
            delete_activation_confirmation:
              "Are you sure you want to delete this activation?",
            running_activation_not_found: "Current activation not found",
            planned_activation_not_found: "Scheduled activation not found",
            service_not_available:
              "<p class=service-not-available-message>At the moment it is not possible to use 2Park. Please try again later. Sorry for the inconvenience!</p><p class=service-not-available-message  status-code>Status code: {{statusCode}}</p>",
            cannot_connect_to_server:
              "Unable to connect to the server. Please check your Internet connection.",
            active: "Active",
            inactive: "Inactive",
            inactive_activation_not_found: "Inactive activation not found",
            create_account_link_product: "Create account/link product",
            enter_authorization_key_you_have_below_received:
              "Enter the authorization key you received below:",
            authorization_key: "Authorization key",
            further: "Continue",
            invalid_authorization_key:
              "The authorization key entered is invalid. Try again or contact the person who gave you this key.",
            authorization: "Authorization:",
            enter_your_email_address_below_so_we_can_send_you_email:
              "Enter your e-mail address below so we can send you an e-mail that allows you to easily create an account and/or add an authorized product to an existing account.",
            an_email_has_been_sent_to_you:
              "An email has been sent to you. Check your in-box (and possibly your Spam folder). Follow the instructions in this email.",
            in_order_to_use_this_product_you_must_turn_on_location_services:
              "In order to use this product, you must turn on location services",
            parking_is_not_possible_you_are_not_at_or_near_the_parking_location:
              "Parking is not possible: you are not at or near the parking location",
            now: "now",
          },
          nl_NL: {
            login: "Log in",
            email: "Email",
            password: "Wachtwoord",
            forgot_password: "Wachtwoord vergeten?",
            remember_me: "Onthoud mij",
            yes: "Ja",
            no: "Nee",
            cookie_missing:
              "Deze website maakt gebruik van een session cookie. Dit is een functionele cookie. Zonder deze cookie kunt u deze website niet gebruiken.",
            settings: "Instellingen",
            language: "Taal",
            name: "Naam",
            my_name: "Mijn naam",
            start_product: "Start met product",
            contrast: "Contrast",
            last_used_product: "Laatst gebruikt product",
            change_starting_product: "Verander het startproduct",
            warn_on_low_balance: "Waarschuwen bij laag saldo?",
            warn_if_balance_below_euro: "Waarschuw indien saldo onder euro",
            warn_if_balance_below_minutes:
              "Waarschuw indien saldo onder minuten",
            warn_if_balance_below_times: "Waarschuw indien saldo onder keer",
            warn_if_balance_below: "Waarschuw indien saldo onder",
            value_should_be_greater_than_0: "Waarde moet groter dan 0 zijn",
            button_save: "Bewaar",
            button_topup: "Ga naar betalen",
            delete: "Verwijder",
            NO_USERNAME:
              "U heeft uw e-mailadres niet ingevuld in het daarvoor bestemde veld.",
            NO_PASSWORD:
              "U heeft uw wachtwoord niet ingevuld in het daarvoor bestemde veld.",
            INVALID_CREDS:
              "U heeft een ongeldige gebruikersnaam of wachtwoord opgegeven",
            top_up: "Opwaarderen",
            authorizations: "Machtiging(en)",
            history: "Historie",
            choose_another_product: "Kies ander product",
            new_parking_action: "Nieuwe parkeeractie",
            add_new_parking_action: "Nieuwe parkeeractie",
            logout: "Uitloggen",
            parking_actions: "Parkeeracties",
            activate_license_plate: "Activeer kenteken",
            transactions: "Transacties",
            running: "Lopend",
            planned: "Gepland",
            stop: "Stop",
            valid_from: "Geldig van",
            valid_from_only_start_date: "Geldig vanaf",
            until: "Tot",
            until_lowercase: "tot",
            extend: "Verleng",
            license_plate: "Kenteken",
            license_plate_message: "Voer kenteken in",
            enter_favorite_name: "Voer naam favoriet in",
            name_favorite: "Naam favoriet",
            start_date_time: " Startdatum en -tijd",
            end_date_time: "Einddatum en -tijd",
            start: "Start",
            home: "Home",
            favorite_message: "Favoriete naam opgeslagen",
            running_action_not_found: "Geen lopende parkeeracties gevonden",
            planned_action_not_found: "Geen geplande parkeeracties gevonden",
            parking_action_info:
              "Parkeeractie wordt gestopt vanwege activatie aan het einde van de dag.",
            alternative_info: "Het volgende alternatief wordt voorgesteld:",
            no_thanks: "nee, bedankt",
            activate: "activeren",
            only_paid_parking:
              "Alleen tijd betaald parkeren wordt in rekening gebracht",
            today: "vandaag",
            yesterday: "gisteren",
            tomorrow: "morgen",
            confirm: "Bevestig",
            anonymous: "Gemachtigd",
            unknown: "Onbekend",
            temporary_license_plate_not_active:
              "Het vaste kenteken is niet actief zolang het tijdelijke kenteken in gebruik is",
            temporary_license_plate_active: "Het vaste kenteken is actief",
            temporary_vehicle: "Tijdelijk voertuig",
            select_location_massage: "Selecteer een locatie",
            stop_parking_action_confirmation:
              "Weet u zeker dat u deze parkeeractie wilt stoppen?",
            delete_parking_action_confirmation:
              "Weet u zeker dat u deze parkeeractie wilt verwijderen?",
            stop_action_yes: "Ja, stoppen",
            stop_action_no: "Nee, niet stoppen",
            attention_your_balance: "Let op: uw saldo is nu: {{balance}}",
            your_parking_action_may_have_been:
              "Uw parkeeractie kan ingekort zijn vanwege een tekort aan saldo.",
            month_0: "Jan",
            month_1: "Feb",
            month_2: "Maart",
            month_3: "Apr",
            month_4: "Mei",
            month_5: "Juni",
            month_6: "Juli",
            month_7: "Aug",
            month_8: "Sept",
            month_9: "Okt",
            month_10: "Nov",
            month_11: "Dec.",
            january: "Januari",
            february: "Februari",
            march: "Maart",
            april: "April",
            may: "Mei",
            june: "Juni",
            july: "Juli",
            august: "Augustus",
            september: "September",
            october: "Oktober",
            november: "November",
            december: "December",
            hours_abbreviated: "u",
            su: "Zo",
            mo: "Ma",
            tu: "Di",
            we: "Wo",
            Th: "Do",
            fr: "Vr",
            sa: "Za",
            other_products: "Alle producten",
            my_license_plate: "Mijn kenteken",
            for_license_plate: "Voor kenteken",
            other_products_save: "Bewaar",
            via: "machtiging via",
            other_products_remove_success_message: "Product is verwijderd",
            saldo: "Saldo",
            max_act: "Beschikbare acties",
            action: "actie",
            actions: "acties",
            action_left: "actie over",
            actions_left: "acties over",
            authorizedFor: "Gemachtigd voor:",
            withdraw_other_product_confirmation:
              "Weet u zeker dat u dit product wilt verwijderen?",
            select: "Selecteer",
            blocked: "Geblokkeerd",
            expired: "Verlopen",
            revoked: "Geblokkeerd",
            authorization_by: "Autorisatie door",
            running_lowercase: " lopend",
            planned_lowercase: " gepland",
            parking_actions_lowercase: "parkeeracties:",
            no_license_plate_info: "Er is momenteel geen kenteken actief",
            for: " voor ",
            balance_warning: "Saldo waarschuwing",
            set_balance_waning: "Stel in",
            set_balance_alert: "Saldo waarschuwing instellen",
            current_balance: "Huidig saldo",
            your_balance_has_come_below:
              "Uw saldo ({{amount}}) is onder de ingestelde waarde van ({{threshold}}) gekomen.",
            set_balance_alarm: "Stel saldo alarm in",
            action_time: "actie",
            action_times: "acties",
            you_cannot_start_parking_action_because_your_balance:
              "U kunt geen parkeeractie starten omdat uw saldo \u20ac 0,00 is.",
            click_top_up_button_or_OK:
              "Klik op [Opwaarderen] om uw saldo nu op te hogen (voor zover dat nog mogelijk is), of op [OK] om dit op een later tijdstip te doen.",
            authorized_by_me: "Machtiging(en)",
            new_authorization: "Nieuwe machtiging",
            edit: "Wijzig",
            withdraw: "Intrekken",
            units: "Units",
            authorization_save: "Bewaar",
            value_empty_message: "Waarde kan niet leeg zijn",
            units_too_large_message: "Stel alstublieft een kleinere waarde in",
            value_more_then_0: "Waarde moet groter zijn dan 0",
            same_user_email: "U kunt uw e-mailadres hier niet gebruiken",
            enter_correct_email: " Voer een correct e-mailadres in",
            edit_authorization: "Wijzigen gemachtigde",
            withdraw_authorization: "Trek machtiging in",
            withdraw_authorization_success: "Machtiging is ingetrokken",
            withdraw_authorization_failed:
              "Autorisatie kan niet worden verwijderd",
            withdraw_authorization_confirmation:
              "Weet u zeker dat u deze machtiging wilt intrekken?",
            only_once: "Eenmalig",
            with_balance: "Met saldo",
            accepted: "Geaccepteerd",
            not_accepted: "Nog niet geaccepteerd",
            have_not_authorized:
              "U heeft nog geen machtigingen uitgegeven in deze sector",
            MINUTE_label: "Aantal minuten",
            EURO_label: "Bedrag in Euro",
            TIMES_label: "Aantal keer",
            minuut: "MINUUT",
            hours: "Uren",
            minutes: "Minuten",
            withdraw_authorization_yes: "Ja, intrekken",
            withdraw_authorization_no: "Nee, niet intrekken",
            through_email: "Via e-mail",
            through_authorization_key: "Via machtigingssleutel",
            authorization_type: " Type machtiging",
            select_license_plate: "Selecteer kenteken",
            favorite: "Favoriet",
            recent: "Recent geparkeerd",
            cancel: "Annuleer",
            favorite_not_found: "U heeft nog geen favorieten",
            recent_not_found: "Er zijn geen recente parkeeracties",
            select_date_time: "Selecteer datum en tijd",
            date_time_can_not_be_past: "Datum en tijd kunnen niet voorbij zijn",
            select_valid_end_time: "Selecteer geldige eindtijd",
            select_valid_start_time: "Selecteer geldige starttijd",
            only_letters_and_numbers: "Alleen letters en cijfers",
            date: "Datum",
            time: "Tijd",
            label_start_date: "Startdatum",
            label_end_date: "Einddatum",
            label_start_time: "Starttijd",
            label_end_time: "Eindtijd",
            extend_parking_action: "Verleng parkeeractie",
            parking_action_extend_message: "Parkeeractie is verlengd",
            parking_action_stop_message: "Parkeeractie is gestopt",
            edit_planned_parking_action: "Wijzig geplande parkeeractie",
            planned_parking_action_changed:
              "Geplande parkeeractie is gewijzigd",
            could_not_change_planned_parking_action:
              "Kan de geplande parkeeractie niet wijzigen",
            favorites: "Favorieten",
            new_favorite: "Nieuwe favoriet",
            favorite_save: "Bewaar",
            yes_delete_it: "Ja, verwijder",
            no_keep_it: "Nee, verwijder niet",
            withdraw_favorite_success: "Favoriet verwijderd",
            withdraw_favorite_failed: "Favoriet kan niet worden verwijderd",
            withdraw_favorite_confirmation:
              "Weet u zeker dat u deze favoriet wilt verwijderen?",
            have_not_favorites: " U heeft nog geen favorieten voor dit product",
            start_parking_action: "Start parkeeractie",
            change: "Wijzig",
            change_favorite: "Wijzig favoriet",
            product_information: "Regeling",
            duration: "Looptijd:",
            content_arrangement: "Inhoud van deze regeling",
            product_valid_to: "Geldig t/m",
            valid: "Geldig",
            form: "van",
            select_below_the_value_by_which_the_balance_should_be_increased:
              "Selecteer hieronder de waarde waarmee het saldo moet worden opgehoogd",
            no_products_to_choose_from: "Geen producten om uit te kiezen",
            topUp_massage:
              "Voor deze periode is het niet meer mogelijk om uw tegoed op te waarderen omdat het maximum bereikt is.",
            pay: "Betaal",
            topup_description:
              "Deze opwaardeerbedragen zijn binnen de huidige periode nog toegestaan voor dit product",
            how_much: "Met hoeveel moet het saldo worden opgewaardeerd ?",
            you_have_current_and_or_planned_parking_actions:
              "Let op: Uw saldo is opgehoogd. Wellicht wilt u uw lopende en/of geplande parkeeracties voor dit product verlengen of opnieuw plannen. ",
            please_enter_email:
              "Vul hieronder uw e-mail adres in om een nieuw wachtwoord aan te vragen",
            request_new_password: "Nieuw wachtwoord aanvragen",
            enter_number_with_image:
              "Vul hieronder de letters/cijfers van bovenstaande afbeelding in. Dit is om te voorkomen dat geautomatiseerde programma's misbruik maken van deze service.",
            send: "Verzenden",
            set_new_password: "Nieuw wachtwoord instellen",
            enter_new_password:
              "Vul hieronder uw nieuwe wachtwoord in. Dit dient te bestaan uit minimaal 8 tekens, waarvan minimaal 1 hoofdletter, minimaal 1 kleine letter, minimaal 1 cijfer en minimaal 1 speciaal symbool zoals #, @ of $.",
            re_enter_password: "Herhaal wachtwoord",
            set: "Instellen",
            next: "Volgende",
            password_empty: "Het wachtwoord mag niet leeg zijn",
            password_mismatch: "Wachtwoord komt niet overeen",
            password_requirements: "Wachtwoord voldoet niet aan de voorwaarden",
            your_session_has_expired_you_have_to_log_in_again:
              "Uw sessie is verlopen. U dient opnieuw in te loggen",
            the_product: "Het product",
            is_blocked_and_cannot_be_used:
              "is geblokkeerd en kan daarom niet gebruikt worden",
            becomes: " wordt",
            valid_from_lowercase: "geldig van",
            right_now_you_dont_have_any_products:
              "Op dit moment heeft u nog geen producten",
            no_product: "Geen product",
            increase_results: "Resultaat opwaarderen",
            check_again: "Controleer opnieuw",
            continue: "Ga verder",
            status_PAYMENT_INIT_message:
              "Het resultaat van uw opwaardering is nog niet bekend. Mogelijk is er sprake van een storing bij de provider.",
            status_PAYMENT_CANCELLED_message: "De betaling is geannuleerd.",
            status_PAYMENT_PAID_NOT_PROCESSED_message:
              "Uw betaling is geregistreerd maar nog niet verwerkt. Als uw betaling binnen 15 minuten nog niet is verwerkt, neem dan contact op met uw parkeer beheerder.",
            status_PAYMENT_SUCCESS_message:
              "De betaling is succesvol afgerond \u2013 uw saldo is opgehoogd.",
            status_PAYMENT_UNCERTAIN_message:
              "De status van uw betaling is onduidelijk - mogelijk wordt deze op een later tijdstip alsnog verwerkt",
            status_INVALID_EXT_CREDS_message:
              "De inloggegevens zijn niet geldig",
            status_PWD_NOT_EQUAL_message:
              "De opgegeven wachtwoorden zijn niet hetzelfde",
            register_product: "Account aanmaken en/of product koppelen",
            ok: "OK",
            you_about_register: "Toe te voegen product",
            of: "Voor",
            with_the_account: "Voor account",
            info_product:
              "Om dit product te kunnen gebruiken moet u een account aanmaken. Standaard wordt uw email adres gebruikt in combinatie met een wachtwoord dat u hieronder kunt instellen. Dit dient te bestaan uit minimaal 8 tekens, waarvan minimaal 1 hoofdletter, minimaal 1 kleine letter, minimaal 1 cijfer en minimaal 1 speciaal symbool zoals #, @ of $.",
            please_enter_password: "Voer een wachtwoord in",
            please_repeat_password: "Voer dit wachtwoord nogmaals in",
            product_PRODUCT_ADDED: "U kunt nu gebruik maken van dit product.",
            problem_adding_product: "Het product kon niet worden toegevoegd",
            product_not_been: "U kunt dit product nu niet gebruiken.",
            you_about_register_product: "Toe te voegen product",
            register_product_info:
              "Door op Bevestigen te klikken wordt het onderstaande product toegevoegd aan uw account onder de organisatie ",
            product_will_be_linked:
              "Dit product zal gekoppeld worden aan uw account: ",
            create_password_account:
              "Maak een wachtwoord aan voor dit account: ",
            password_info:
              "Het wachtwoord heeft <span> nodig om minimaal 8 tekens lang te zijn </span> en moet <span> ten minste \xe9\xe9n van de volgende waarden bevatten: </ span>",
            upper_case_letter: "hoofdletter",
            lower_case_letter: "kleine letter",
            number: "nummer",
            special_symbol: "speciaal symbool (zoals: # @ $)",
            create_account_add_product:
              "Maak een account aan om het onderstaande parkeerproduct van <span>{{municipality}}</span> te koppelen en te kunnen gebruiken:",
            create_an_account: "Maak een account aan",
            click_password_requirements:
              "Het wachtwoord dient te bestaan uit minimaal 8 tekens, waarvan minimaal 1 hoofdletter, minimaal 1 kleine letter, minimaal 1 cijfer en minimaal 1 speciaal symbool zoals #, @ of $.",
            register_grant: "Account aanmaken en/of product koppelen",
            granted_by: "Door",
            you_about_register_grant: "Gemachtigd product",
            problem_adding_grant:
              "Het gemachtigde product kon niet worden toegevoegd",
            grant_not_been: "U kunt dit product nu niet gebruiken",
            EXPIRED: "Deze link is niet meer geldig",
            NODATAFOUND:
              "Er is iets fout gegaan bij het ophalen van de gegevens",
            PRODUCT_ADDED:
              "U kunt nu gebruik maken van dit gemachtigde product",
            CONFIG_ERROR: "Er is een configuratie fout opgetreden",
            INVALID_PASSWORD:
              "Het opgegeven wachtwoord voldoet niet aan de wachtwoordvereisten",
            register_grant_info:
              "Door op Bevestig te klikken accepteert u de onderstaande machtiging. U vindt het gemachtigde product daarna onder de organisatie ",
            clear: "Duidelijk",
            close_menu: "Menu sluiten",
            menu: "Menu",
            back: "Terug",
            theme: "Thema",
            add_new: "Voeg nieuw toe",
            submit: "Opslaan",
            search: "Zoeken",
            refresh: "Verversen",
            choose_date: "Kies datum",
            increase_hours: "Verhoog uren",
            decrease_hours: "Verlaag uren",
            increase_minutes: "Verhoog de minuten",
            decrease_minutes: "Minuten verlagen",
            history_have_not_parking_actions:
              "U heeft nog geen parkeeracties gedaan in deze sector",
            history_have_not_activation:
              "U heeft nog geen activatie gedaan in deze sector",
            history_have_not_transactions:
              "U heeft nog geen transacties gedaan in deze sector",
            load_more: "Toon meer",
            no_more_records_found: "Geen records meer gevonden.",
            send_full_history_to_email: "Stuur historie per e-mail",
            please_check_your_email:
              "Controleer uw e-mail voor de historie data.",
            license_plate_switch: "Kentekenswitch",
            no_license_plate_has_yet_been_activated:
              "Er is nog geen kenteken geactiveerd",
            choose_license_number_activate:
              "Kies een kenteken om te activeren:",
            active_license_plate: "Het actieve kenteken is:",
            license_plate_not_activate: "Kenteken niet geactiveerd",
            active_license_plate_since:
              "Het actieve kenteken <b>sinds {{since}}</b> is:",
            default: "Standaard",
            black_white: "Zwart-wit",
            white_black: "Wit-zwart",
            black_yellow: "Zwart-geel",
            yellow_black: "Geel-zwart",
            select_location: "Selecteer een locatie",
            auto_login_message:
              "U bent automatisch ingelogd na het verlopen van de sessie.",
            about: "Over 2Park",
            app_version: "Versie 1.2.0.21",
            env_dev: "(Ontwikkeling)",
            env_acc: "(Acceptatie)",
            env_prod: "(Productie)",
            copyright: "Copyright 2019-2023",
            all_rights_reserved: "Alle rechten voorbehouden",
            support: "Support:",
            add_product: "Voeg product toe",
            product_code: "Product code",
            pin_code: "Pin code",
            add_product_description:
              "Vul hieronder de productcode en pincode in zoals deze op uw toewijzingsbrief vermeld staan.",
            you_can_use_product: "U kunt nu gebruik maken van dit product",
            all_actions: "Alle parkeeracties",
            all_parking_actions: "Alle parkeeracties",
            organizations: "Organisaties",
            organizations_menu: "Alle producten",
            show_products: "Toon producten",
            show_info: "Info",
            product_label: " product",
            product_plural_label: " producten",
            alt1: "Stel de einddatum en -tijd in op: <b>{{time}}</b>",
            alt2: "Ga terug en verander de parkeeractie handmatig",
            alt_descriptions:
              "U kunt geen parkeeractie instellen die tot na middernacht duurt. U kunt een van de volgende dingen doen: ",
            pick_choice: "Kies een van de bovenstaande opties",
            pick_choice1: "Bevestig parkeren met nieuwe einddatum en -tijd",
            pick_choice2: "Ga terug en bewerk de parkeeractie handmatig",
            today_at: "Vandaag om ",
            make_your_choice: "Maak uw keuze uit de volgende opties:",
            start_with_the_product:
              "Begin met het product dat in gebruik was toen de app voor het laatst werd gebruikt.",
            new_content_available: "Nieuwe inhoud is beschikbaar:",
            press_button_to_reload_the_page:
              "Druk op de knop om de pagina opnieuw te laden.",
            reload_page: "OK",
            reload_instruction1:
              "* Mocht het herladen niet werken, wis uw geschiedenis, cookies en andere browsergegevens.",
            reload_instruction2: "Probeer het daarna opnieuw.",
            activations: "Activaties",
            new_activation: "Nieuwe activatie",
            activate_uppercase: "Activeer",
            activations_license_plate: "Activatie:",
            stop_activation_confirmation:
              "Weet u zeker dat u deze activatie wilt stoppen?",
            delete_activation_confirmation:
              "Weet u zeker dat u deze activatie wilt verwijderen?",
            running_activation_not_found: "Geen lopende activatie gevonden",
            planned_activation_not_found: "Geen geplande activatie gevonden",
            service_not_available:
              "<p class=service-not-available-message>Op dit moment is het niet mogelijk om 2Park te gebruiken. Probeert u het later opnieuw. Excuses voor het ongemak!</p><p class=service-not-available-message status-code>Status code: {{statusCode}}</p>",
            cannot_connect_to_server:
              "Er kon geen verbinding worden gemaakt met de server, controleer uw internetverbinding.",
            active: "Actief",
            inactive: "Niet actief",
            inactive_activation_not_found: "Inactieve activering niet gevonden",
            create_account_link_product: "Maak account/koppel product",
            enter_authorization_key_you_have_below_received:
              "Vul hieronder de machtigingssleutel in die u heeft ontvangen:",
            authorization_key: "Machtigingssleutel",
            further: "Verder",
            invalid_authorization_key:
              "De ingevoerde machtigingssleutel is ongeldig. Probeer opnieuw of neem contact op met degene die u deze sleutel heeft gegeven.",
            authorization: "Machtiging:",
            enter_your_email_address_below_so_we_can_send_you_email:
              "Vul hieronder uw e-mailadres in, zodat wij u een e-mail kunnen sturen waardoor u eenvoudig een account kunt aanmaken en/of een gemachtigd product kunt toevoegen aan een bestaand account.",
            an_email_has_been_sent_to_you:
              "Er is een e-mail naar u verzonden. Controleer uw in-box (en eventueel uw Spam-folder). Volg de instructies in deze e-mail.",
            in_order_to_use_this_product_you_must_turn_on_location_services:
              "Om met dit product te kunnen werken, moet u de locatie voorziening aanzetten",
            parking_is_not_possible_you_are_not_at_or_near_the_parking_location:
              "Parkeren is niet mogelijk: u bevindt zich niet op of bij de parkeerlocatie",
            now: "nu",
          },
        }));
      var x = H.getItem("locale", "nl_NL");
      L.a.locale = x || "nl_NL";
      var z = L.a,
        Y = {};
      [
        "name",
        "locale",
        "startingProduct",
        "theme",
        "themeTemporary",
        "selectedProduct",
        "rememberMe",
      ].forEach(function (e) {
        Y[String(e)] = "";
      });
      var G = Y,
        V = function (e, t) {
          return {
            type: "ON_FORM_FIELD_VALUE_CHANGED",
            fieldName: e,
            fieldValue: t,
          };
        },
        B = function (e) {
          return { type: "ON_FORM_FIELD_CLEAR_VALUE", fieldName: e };
        },
        W = function (e, t) {
          return {
            type: "ON_INITIALIZE_FORM_FIELD",
            fieldName: e,
            fieldValue: t,
          };
        },
        K = function (e, t) {
          return { type: "ON_ERROR_UPDATE", fieldName: e, errorMessage: t };
        },
        Z = function (e, t, a) {
          var n = H.getItem("usersData")
              ? JSON.parse(H.getItem("usersData"))
              : {},
            r = H.getItem("email");
          return (
            void 0 === n[r] && (n[r] = G),
            (n[r].name = e),
            (n[r].startingProduct = t),
            (n[r].selectedProduct = a),
            H.setItem("usersData", JSON.stringify(n)),
            { type: "SAVE_SETTINGS", name: e, startingProduct: t }
          );
        },
        Q = function (e) {
          return { type: "ON_STARTING_PRODUCT_CHANGED", productId: e };
        },
        J = function (e) {
          return { type: "ON_LOCALE_CHANGED", locale: e };
        },
        q = function (e) {
          return { type: "ON_NAME_CHANGED", name: e };
        },
        X = function (e) {
          return { type: "ON_EMAIL_CHANGED", email: e };
        },
        $ = function (e) {
          return function (t) {
            t({ type: "SET_CURRENT_PRODUCT", payload: e });
          };
        },
        ee = function (e) {
          return function (t, a) {
            var n = a().settings.name;
            (H.setItem("startingProduct", e),
              H.setItem("name", n),
              t(Z(n, e, void 0)));
          };
        },
        te = function (e) {
          return { type: "ON_SELECTED_PRODUCT", selectedProduct: e };
        },
        ae = function () {
          return { type: "CLOSE_CONTEXT_MENU" };
        },
        ne = function (e) {
          return { type: "ACTIVE_TAB_CHANGE", activeTab: e };
        },
        re = function (e) {
          return { type: "THEME_CHANGE", theme: e };
        },
        oe = function (e) {
          return { type: "TEMPORARY_THEME_CHANGE", theme: e };
        },
        ie = function (e) {
          return function (e, t) {
            e({ type: "SHOW_MENU_CHANGE" });
          };
        },
        ce = function (e) {
          return function (t, a) {
            t(ne(e));
          };
        },
        se = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return function (a, n) {
            var r = H.getItem("usersData")
                ? JSON.parse(H.getItem("usersData"))
                : {},
              o = H.getItem("email");
            null === o &&
              (o =
                void 0 === n().form.login_email
                  ? String(n().settings.email)
                  : String(n().form.login_email.value));
            var i = void 0 === e ? "" : e;
            (t ? (r[o].themeTemporary = i) : (r[o].theme = i),
              H.setItem("usersData", JSON.stringify(r)),
              t
                ? a(oe(e))
                : (H.setItem("theme", e),
                  H.setItem("lastUsedTheme", e),
                  a(re(e))));
          };
        },
        le = function (e) {
          return (
            clearInterval(e),
            { type: "SET_INTERVAL_PARKING_ACTIONS_STOP" }
          );
        },
        ue = function (e) {
          return { type: "REMEMBER_ME_INIT", value: e };
        },
        de = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0;
          return { type: "SHOW_MODAL_MESSAGE", message: e, goToScreen: t };
        },
        me = function () {
          return { type: "SHOW_MODAL_DIALOG" };
        },
        _e = function () {
          return { type: "HIDE_MODAL_DIALOG" };
        },
        pe = a(8),
        fe = a.n(pe),
        ge = function (e) {
          var t = fe()().format("DD MMM YYYY"),
            a = fe()(e, "DD-MM-YYYY HH:mm:ss");
          return t === a.format("DD MMM YYYY")
            ? z.t("today_at") + a.format("HH:mm")
            : a.format("DD MMM YYYY HH:mm");
        },
        ve = function (e) {
          return { __html: e };
        },
        he = function (e) {
          return r.a.createElement("span", { dangerouslySetInnerHTML: ve(e) });
        },
        Ee = function (e) {
          return { type: "ON_PRODUCTS_RETRIEVED", products: e };
        },
        be = function (e, t) {
          return { type: "ON_BALANCE_RETRIEVED", productId: e, balance: t };
        },
        Ae = function (e) {
          return { type: "GET_BALANCE_FAILED", productId: e, balance: null };
        },
        Te = function () {
          return { type: "OTHER_PRODUCTS_WILL_UNMOUNT" };
        },
        Oe = function (e, t, a, n) {
          return (
            "create" === e.params.type &&
            (-1 === a ? t && "INTERNAL" !== t.prr_options : "email" === n)
          );
        },
        Ne = function (e, t) {
          return -1 !== e && "key" === t;
        },
        ye = function (e, t, a) {
          if ("create" === e.params.type) {
            if (-1 !== t) return !1;
            if (a && "INTERNAL" !== a) return !0;
          }
          return !1;
        },
        Ie = function (e) {
          return !(!e || "INTERNAL" === e);
        },
        Ce = function (e, t, a) {
          if (a && "INTERNAL" !== a.prr_options) {
            if (!e || "" === e) return "value_empty_message";
            if (e && "" !== e) {
              if (
                !/^([a-z0-9A-Z_.-]+)@([a-z0-9A-Z_.-]+)\.([a-zA-Z.]{2,6})$/.test(
                  e,
                )
              )
                return "enter_correct_email";
            } else if (e === t) return "same_user_email";
          }
        },
        Se = function (e) {
          if (!e || "" === e) return "value_empty_message";
        },
        we = function (e) {
          return e ? e.search(/ANO_GRANT/i) : -1;
        },
        ke = function (e) {
          return e ? e.search(/NO_BALANCE/i) : -1;
        },
        Pe = function (e, t) {
          return !!e && e.search(t) > -1;
        },
        De = function (e, t) {
          return (60 * Number(e) + Number(t)).toString();
        },
        je = function (e, t) {
          return function (a, n) {
            var r = n().settings.locale;
            (a(Le()),
              P()
                .getTopupListUpgrade(e, r)
                .then(function (e) {
                  if ("OK" === e.status.code.major) {
                    var n = e.data.upgrade_units.map(function (e) {
                      return {
                        value: e.uut_parameters[0].prr_value,
                        title: "".concat(
                          e.uut_parameters[2].prr_value.replace(
                            "&#128;",
                            "\u20ac",
                          ),
                        ),
                      };
                    });
                    (n.length > 0 &&
                      (a(W("currentIndex", 0)),
                      a(W("topupPicker", n[0].value))),
                      a(Me(n)));
                  } else
                    "FAIL" === e.status.code.major &&
                    "SESSION_TIMEOUT" === e.status.code.minor
                      ? (a(Re(e.status.message)), a(ha(t)))
                      : (a(Re(e.status.message)),
                        f.toast.error(e.status.message));
                })
                .catch(function (e) {
                  return a(Re(e));
                }));
          };
        },
        Le = function () {
          return { type: "GET_TOP_UP_LIST_STARTED" };
        },
        Me = function (e) {
          return { type: "GET_TOP_UP_LIST_SUCCESS", payload: e };
        },
        Re = function (e) {
          return { type: "GET_TOP_UP_LIST_FAILED", payload: e };
        },
        Fe = function () {
          return { type: "TOP_UP_LIST_TRANSACTION_STARTED" };
        },
        Ue = function (e) {
          return { type: "TOP_UP_LIST_TRANSACTION_SUCCESS", payload: e };
        },
        He = function (e) {
          return { type: "TOP_UP_LIST_TRANSACTION_FAILED", payload: e };
        },
        xe = function (e, t, a, n) {
          return function () {
            var n = document.createElement("form");
            (document.body.appendChild(n),
              (n.method = t || "POST"),
              (n.action = e),
              a.forEach(function (e) {
                var t = document.createElement("input");
                ((t.type = "hidden"),
                  (t.name = e.prr_label),
                  (t.value = e.prr_value),
                  n.appendChild(t));
              }),
              n.submit());
          };
        },
        ze = function (e) {
          return e < 10 ? "0".concat(e) : e;
        },
        Ye = function (e) {
          var t = new Date(e);
          t.setSeconds(0);
          var a = ze(t.getHours()),
            n = ze(t.getMinutes()),
            r = ze(t.getSeconds()),
            o = t.getMonth() + 1;
          return (
            (o = ze(o)),
            ""
              .concat(t.getDate(), "-")
              .concat(o, "-")
              .concat(t.getFullYear(), " ")
              .concat(a, ":")
              .concat(n, ":")
              .concat(r)
          );
        },
        Ge = function (e) {
          var t = e.split(" ")[0],
            a = t.split("-")[0],
            n = t.split("-")[1],
            r = t.split("-")[2],
            o = e.split(" ")[1],
            i = o.split(":")[0],
            c = o.split(":")[1];
          return new Date(
            Number(r),
            Number(n) - 1,
            Number(a),
            Number(i),
            Number(c),
          );
        },
        Ve = function (e) {
          return { type: "ON_CHANGE_START_DATE_TIME", startDateTime: e };
        },
        Be = function (e) {
          return { type: "ON_CHANGE_END_DATE_TIME", endDateTime: e };
        },
        We = function (e, t, a) {
          return { type: "GET_AMOUNT", amount: e, prompt: t, message: a };
        },
        Ke = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return function (a, n) {
            var r = n().settings,
              o = r.startingProduct,
              i = r.currentProduct,
              c = r.locale,
              s = i || o,
              l = n().data.products.find(function (e) {
                return e.value === s;
              }),
              u = l.productIsTemporary,
              d = l.location,
              m = l.balance,
              _ = l.isGeofencing,
              p = n().parkingActions,
              g = p.startDateTime,
              v = p.endDateTime,
              h = "true" === _ ? Ye(new Date()) : g,
              E = v || "",
              b = n().form,
              A = b.newParkingActions_license_plate,
              T = b.newParkingActions_name_favorite,
              O = b.newParkingActions_location,
              N = A ? A.value : void 0,
              y = T && T.value ? T.value : void 0,
              I = O && O.value ? O.value.locationValue : d.prr_default_value,
              S = n().main,
              w = S.temporaryLicensePlates,
              k = S.isUserGeofenceLocations,
              P =
                m && m.ble_parameters.length > 0
                  ? m.ble_parameters.find(function (e) {
                      return "BLE_THRESHOLD" === e.prr_label;
                    })
                  : void 0;
            "true" === _ && 1 === k.length && (I = k[0].code);
            var D = {
              action: {
                atn_parameters: [
                  { prr_label: "MBR_IDENT", prr_value: N },
                  { prr_label: "TIMESTART", prr_value: h },
                  { prr_label: "TIMEEND", prr_value: E },
                  { prr_label: "LOCATION", prr_value: I },
                ],
              },
            };
            if (u) {
              var j =
                w.length > 0
                  ? w.find(function (e) {
                      return e;
                    })
                  : void 0;
              if (j.idn_identifier) {
                var L = {
                  prr_label: "IDN_IDENTIFICATION",
                  prr_value: j.idn_identifier,
                };
                D.action.atn_parameters.push(L);
              }
              if (j.idn_type) {
                var M = { prr_label: "IDN_TYPE", prr_value: j.idn_type };
                D.action.atn_parameters.push(M);
              }
            }
            var R = JSON.stringify(D);
            (a(qe()),
              C()
                .createParkingActions(R, s, c)
                .then(function (n) {
                  if ("OK" === n.status.code.major)
                    (t && a(it(y || void 0, N, s)),
                      a(Qe()),
                      P && a(_t(!0)),
                      a(ne(0)),
                      e.push("/"),
                      a(et()),
                      a(B("newParkingActions_license_plate")),
                      a(B("newParkingActions_name_favorite")),
                      a(B("newParkingActions_location")));
                  else if (
                    "FAIL" === n.status.code.major &&
                    n.data.alternates.length > 0
                  ) {
                    (n.data.alternates.map(function (t) {
                      var r = t.action.atn_parameters,
                        o = r.find(function (e) {
                          return "TIMEEND" === e.prr_label;
                        }),
                        i = r.find(function (e) {
                          return "AMOUNT" === e.prr_label;
                        });
                      (o && a(V("alternatesEndDateTime", o.prr_value)),
                        i && a(We(i.prr_value, i.prr_prompt, n.status.message)),
                        e.push("/alternatives/create"));
                    }),
                      a(Ze()));
                  } else
                    "FAIL" === n.status.code.major &&
                    "SESSION_TIMEOUT" === n.status.code.minor
                      ? a(ha(e))
                      : (f.toast.error(n.status.message), a(Je()));
                })
                .catch(function (t) {
                  (a(Je()),
                    a(et()),
                    a(B("newParkingActions_license_plate")),
                    a(B("newParkingActions_name_favorite")),
                    a(ha(e)));
                }));
          };
        },
        Ze = function () {
          return { type: "ON_STOPPED_PARKING_ACTION" };
        },
        Qe = function () {
          return { type: "CREATE_PARKING_ACTIONS_SUCCESS" };
        },
        Je = function () {
          return { type: "CREATE_PARKING_ACTIONS_FAILED" };
        },
        qe = function () {
          return { type: "CREATE_PARKING_ACTIONS_PROCESS" };
        },
        Xe = function () {
          return { type: "ON_INITIALIZE_START_DATE_TIME" };
        },
        $e = function (e, t, a) {
          return {
            type: "ON_INITIALIZE_DATE_TIME",
            selectedActionId: e,
            startDateTime: t,
            endDateTime: a,
            currentEndDateTimeActiveActions: a,
          };
        },
        et = function () {
          return { type: "CLEAR_START_END_DATE_TIME" };
        },
        tt = function (e) {
          return function (t, a) {
            var n = a().parkingActions,
              r = n.selectedActionId,
              o = n.endDateTime,
              i = a().settings,
              c = i.startingProduct,
              s = i.currentProduct,
              l = i.locale,
              u = a().data.products,
              d = s || c,
              m = u.find(function (e) {
                return e.value === d;
              }).balance,
              _ =
                m && m.ble_parameters.length > 0
                  ? m.ble_parameters.find(function (e) {
                      return "BLE_THRESHOLD" === e.prr_label;
                    })
                  : void 0;
            (t(qe()),
              C()
                .extendParkingActions(r, l, d, o)
                .then(function (a) {
                  if ("OK" === a.status.code.major)
                    (t(at()),
                      _ && t(_t(!0)),
                      t(ne(0)),
                      e.push("/"),
                      f.toast.success(z.t("parking_action_extend_message")),
                      t(et()),
                      t(B("newParkingActions_license_plate")),
                      t(B("newParkingActions_name_favorite")));
                  else if (
                    "FAIL" === a.status.code.major &&
                    a.data.alternates.length > 0
                  ) {
                    (a.data.alternates.map(function (n) {
                      var r = n.action.atn_parameters,
                        o = r.find(function (e) {
                          return "TIMEEND" === e.prr_label;
                        }),
                        i = r.find(function (e) {
                          return "AMOUNT" === e.prr_label;
                        });
                      (o && t(t(V("alternatesEndDateTime", o.prr_value))),
                        i && t(We(i.prr_value, i.prr_prompt, a.status.message)),
                        e.push("/alternatives/extend"));
                    }),
                      t(Ze()));
                  } else
                    "FAIL" === a.status.code.major &&
                    "SESSION_TIMEOUT" === a.status.code.minor
                      ? (t(nt()), t(ha(e)))
                      : (t(nt()), f.toast.error(a.status.message));
                })
                .catch(function (a) {
                  (t(nt()), t(ha(e)));
                }));
          };
        },
        at = function () {
          return { type: "EXTEND_PARKING_ACTIONS_SUCCESS" };
        },
        nt = function () {
          return { type: "EXTEND_PARKING_ACTIONS_FAILED" };
        },
        rt = function () {
          return { type: "ON_EDIT_PLANNED_PARKING_ACTION_SUCCESS" };
        },
        ot = function () {
          return { type: "ON_EDIT_PLANNED_PARKING_ACTION_FAILED" };
        },
        it = function (e, t, a) {
          return function (n, r) {
            var o = r().settings.locale,
              i = {
                favorite: {
                  fav_parameters: [{ prr_label: "NICKNAME", prr_value: e }],
                  action: "add",
                  mbr_ident: t,
                },
              },
              c = JSON.stringify(i);
            k()
              .handleFavorite(c, o, a)
              .then(function (e) {
                "OK" === e.status.code.major
                  ? n(ct())
                  : (n(st()), f.toast.error(e.status.message));
              })
              .catch(function (e) {
                (n(st()), f.toast.error(e));
              });
          };
        },
        ct = function () {
          return { type: "ON_HANDLE_FAVORITE_SUCCESS" };
        },
        st = function () {
          return { type: "ON_HANDLE_FAVORITE_FAILED" };
        },
        lt = function (e) {
          return e.search("REQUIRED");
        },
        ut = function (e, t, a) {
          return (
            ("create" !== e.params.type || !t) &&
            !("create" === e.params.type && !a) &&
            ("create" !== e.params.type || "" !== a)
          );
        },
        dt = function (e) {
          return e ? e.search(/MEMBER_ADMIN/i) : -1;
        },
        mt = function (e) {
          return e ? e.search(/NO_ENDDATETIME/i) : -1;
        },
        _t = function (e) {
          return {
            type: "PARKING_ACTION_WAS_STARTED",
            parkingActionWasStarted: e,
          };
        },
        pt = 0,
        ft = function (e, t, a) {
          return function (n, r) {
            var o = r().settings,
              i = o.startingProduct,
              c = o.currentProduct,
              s = o.locale,
              l = c || i,
              u = a.params.ctyId,
              d = e.filter(function (e) {
                return e.cityId === u;
              });
            if ((n({ type: "OTHER_PRODUCTS_WILL_UNMOUNT" }), d.length > 0)) {
              var m = d.filter(function (e) {
                  if (e.cityId === u && -1 === ke(e.options)) return e;
                }),
                _ = d.filter(function (e) {
                  return "false" === e.isBlocked;
                });
              (d.map(function (e, a) {
                if (e.cityId === u) {
                  var r = ke(e.options);
                  ("false" === e.isBlocked &&
                    n(bt(e.value, s, e.productIsSwitch, e.options, t, m, _)),
                    -1 === r &&
                      I()
                        .getBalance(e.value, s)
                        .then(function (a) {
                          if ((pt++, "OK" === a.status.code.major)) {
                            var r =
                              a.data.balance &&
                              a.data.balance.ble_parameters.length > 0
                                ? a.data.balance
                                : void 0;
                            n(be(e.value, r));
                          } else
                            "FAIL" === a.status.code.major &&
                            "SESSION_TIMEOUT" === a.status.code.minor
                              ? n(ha(t))
                              : "FAIL" === a.status.code.major &&
                                a.status.code.minor;
                          pt === m.length &&
                            (setTimeout(function () {
                              return n({ type: "FINISH_FETCH" });
                            }, 200),
                            (pt = 0));
                        })
                        .catch(function (e) {}),
                    m.length);
                }
              }),
                0 ===
                  e.filter(function (e) {
                    if (e.value !== l) return e;
                  }).length && n({ type: "OTHER_PRODUCTS_WILL_MOUNT" }));
            } else t.push("/no-products");
          };
        },
        gt = function (e) {
          return function (t, a) {
            var n = a().settings,
              r = n.startingProduct,
              o = n.currentProduct,
              i = n.locale,
              c = o || r;
            I()
              .getBalance(c, i)
              .then(function (a) {
                if ("OK" === a.status.code.major) {
                  var n =
                    a.data.balance && a.data.balance.ble_parameters.length > 0
                      ? a.data.balance
                      : void 0;
                  if (n)
                    n.ble_parameters.find(function (e) {
                      return "BLE_THRESHOLD" === e.prr_label;
                    }) &&
                      e &&
                      "/top-up/success" === e.location.pathname &&
                      t(
                        (function (e, t) {
                          return function (a, n) {
                            y()
                              .getCategoryProductDetails(e, t)
                              .then(function (e) {
                                if ("OK" === e.status.code.major) {
                                  var t = e.data.pdt_members;
                                  if (t.length > 0)
                                    t.filter(function (e) {
                                      return e.mbr_actions.length > 0;
                                    }).length > 0 &&
                                      a(
                                        de(
                                          z.t(
                                            "you_have_current_and_or_planned_parking_actions",
                                          ),
                                        ),
                                      );
                                }
                              })
                              .catch();
                          };
                        })(c, i),
                      );
                  t(
                    (function (e, t) {
                      return {
                        type: "GET_BALANCE_SUCCESS",
                        productId: e,
                        balance: t,
                      };
                    })(c, n),
                  );
                } else t(Ae(c));
              })
              .catch(function () {
                return t(Ae(c));
              });
          };
        },
        vt = function (e) {
          return fe()() > e;
        },
        ht = function (e) {
          if (e.byGrant && "false" === e.byGrant.is_blocked) {
            var t = e.byGrant.grt_parameters;
            if (!t) return !1;
            var a = t.find(function (e) {
              return "VALID_UNTIL" === e.prr_label;
            });
            if (!a) return !1;
            var n = fe()(a.prr_value, "DD-MM-YYYY HH:mm:ss");
            return vt(n);
          }
          if ("" === e.validTo) return !1;
          var r = fe()(e.validTo, "YYYY-MM-DD HH:mm:ss");
          return vt(r);
        },
        Et = function (e) {
          return (
            "true" === e.isBlocked ||
            !(!e.byGrant || "true" !== e.byGrant.is_blocked) ||
            ht(e)
          );
        },
        bt = function (e, t, a, n, r, o, i) {
          return function (c) {
            var s, l, u, d;
            y()
              .getCategoryProductDetails(e, t)
              .then(function (t) {
                if ((0 === o.length && pt++, "OK" === t.status.code.major)) {
                  var m = t.data.pdt_members;
                  if (m.length > 0 && (a && (u = At(m)), !a)) {
                    var _ = Jt(m).pdtMembersActive,
                      p = Jt(m).pdtMembersScheduled,
                      f = qt(m),
                      g = _.length > 0 ? _.length : void 0,
                      v = p.length > 0 ? p.length : void 0,
                      h = void 0;
                    (-1 === dt(n) &&
                      -1 !== mt(n) &&
                      ((h = f.length > 0 ? f.length : void 0), (v = void 0)),
                      (s = g),
                      (l = v),
                      (d = h));
                  }
                  (a ||
                    c(
                      (function (e, t, a, n) {
                        return {
                          type: "ADD_COUNT_ACTIVE_AND_SCHEDULE_ACTIONS",
                          productId: e,
                          activeCount: t,
                          scheduleCount: a,
                          notActiveCount: n,
                        };
                      })(e, s, l, d),
                    ),
                    a &&
                      c(
                        (function (e, t) {
                          return {
                            type: "PRODUCT_SWITCH_LICENSE_PALE_ACTIVE",
                            productId: e,
                            licensePlateIsActive: t,
                          };
                        })(e, u),
                      ));
                } else
                  "FAIL" === t.status.code.major &&
                    "SESSION_TIMEOUT" === t.status.code.minor &&
                    c(ha(r));
                0 === o.length &&
                  i.length === pt &&
                  (setTimeout(function () {
                    return c({ type: "FINISH_FETCH" });
                  }, 200),
                  (pt = 0));
              })
              .catch(function (e) {
                c(ha(r));
              });
          };
        },
        At = function (e) {
          return !!e.find(function (e) {
            return "YES" === e.mbr_active;
          });
        },
        Tt = function (e) {
          return (
            e.split(" ")[0].split("-")[2] +
            " " +
            z.t("month_".concat(e.split(" ")[0].split("-")[1] - 1)) +
            " " +
            e.split(" ")[0].split("-")[0]
          );
        },
        Ot = function (e) {
          return (
            e.split(" ")[0].split("-")[0] +
            " " +
            z.t("month_".concat(e.split(" ")[0].split("-")[1] - 1)) +
            " " +
            e.split(" ")[0].split("-")[2]
          );
        },
        Nt = function (e) {
          return { type: "PRODUCT_SELECTED", productSelected: e };
        },
        yt = function (e) {
          return { type: "SELECT_PRODUCT_IS_VISITED", visited: e };
        },
        It = {
          locale: [V, J],
          name: [V, q],
          startingProduct: [V],
          theme: [re],
          themeTemporary: [oe],
          selectedProduct: [te, Nt],
          rememberMe: [ue],
        },
        Ct = It,
        St = { locale: "nl_NL", name: z.t("my_name") },
        wt = St,
        kt = function (e, t) {
          return function (t, a) {
            var n = a().settings.locale;
            (t(Pt()),
              y()
                .getCategories(
                  n,
                  function (e) {
                    return ga(e, t);
                  },
                  function () {
                    return va(t);
                  },
                )
                .then(function (a) {
                  if ("OK" === a.status.code.major) {
                    var n = [],
                      r = a.data.categories;
                    if (r) {
                      r.map(function (e) {
                        var t = e.cty_products,
                          a = e.cty_external_content,
                          r = e.cty_description;
                        t &&
                          t.map(function (t) {
                            var o = t.pdt_parameter_groups,
                              i = o.find(function (e) {
                                return "START" === e.pgp_label;
                              }),
                              c = i
                                ? i.pgp_parameters.find(function (e) {
                                    return "LOCATION" === e.prr_label;
                                  })
                                : void 0,
                              s = c || void 0,
                              l = t.pdt_description,
                              u = o.find(function (e) {
                                return "GRANT" === e.pgp_label;
                              }),
                              d = u ? u.pgp_parameters : void 0,
                              m = t.pdt_options,
                              _ = t.by_grant,
                              p = m.split("|"),
                              f = p.find(function (e) {
                                return "PRODUCT_GRANT" === e;
                              }),
                              g = p.find(function (e) {
                                return "MEMBER_GRANT" === e;
                              }),
                              v = !((!f && !g) || _),
                              h = Ht(m),
                              E = xt(m),
                              b = t.pdt_is_geofencing
                                ? t.pdt_is_geofencing
                                : "false";
                            n.push({
                              value: t.pdt_id,
                              city: e.cty_name,
                              cityDescription: r,
                              productDescription: l,
                              cityId: e.cty_id,
                              name: t.pdt_name,
                              validFrom: t.pdt_valid_from,
                              validTo: t.pdt_valid_to,
                              location: s,
                              options: m,
                              byGrant: _,
                              showAuthorizations: v,
                              logoFolder: a.toLowerCase(),
                              productIsSwitch: h,
                              productIsTemporary: E,
                              productGrantParameters: d,
                              isBlocked: t.pdt_is_blocked,
                              isGeofencing: b,
                            });
                          });
                      });
                      var o = H.getItem("startingProduct");
                      if (n.length > 0) {
                        var i = H.getItem("usersData");
                        if (null === o && void 0 !== i) {
                          var c = H.getItem("email"),
                            s = JSON.parse(i);
                          o = s[c].startingProduct;
                        }
                        ((o = n.some(function (e) {
                          return e.value === o;
                        })
                          ? o
                          : n[0].value),
                          n.map(function (e) {
                            var t = e.name.split(" - ")[0],
                              a = e.name.split(" - ")[1];
                            return (
                              (e.name = t.trim()),
                              (e.title = a && a.trim()),
                              e
                            );
                          }),
                          t(Ee(n)),
                          t(Dt(r || [])));
                      } else e.push("/no-products");
                    } else e.push("/no-products");
                  } else
                    ("FAIL" === a.status.code.major && a.status.code.minor,
                      t(ha(e)));
                })
                .catch(function (a) {
                  (e.push("/login"), t(pa()));
                }));
          };
        },
        Pt = function () {
          return { type: "GET_ORGANIZATION_REQUEST_STARTED" };
        },
        Dt = function (e) {
          return { type: "GET_ORGANIZATION_REQUEST_SUCCESS", organizations: e };
        },
        jt = function () {
          return { type: "GET_LOCATION_FETCH_START" };
        },
        Lt = function (e) {
          return { type: "GET_LOCATION_SUCCESS", location: e };
        },
        Mt = function () {
          return { type: "GET_LOCATION_FAILED" };
        },
        Rt = function (e, t, a) {
          return function (n, r) {
            var o = H.getItem("locale");
            (o || (o = r().auth.locale), n(J(o)));
            var i = H.getItem("name");
            i && (n(V("name", i)), n(q(i)));
            var c = H.getItem("usersData")
                ? JSON.parse(H.getItem("usersData"))
                : {},
              s = H.getItem("email");
            (void 0 === c[s] && (c[s] = G),
              H.setItem("usersData", JSON.stringify(c)),
              Object.keys(c[s]).forEach(function (e) {
                var t = Ct[e];
                c[s].hasOwnProperty(e) &&
                  Ct.hasOwnProperty(e) &&
                  ("" !== c[s][e]
                    ? t.forEach(function (t) {
                        n(t === V ? t(e, c[s][e]) : t(c[s][e]));
                      })
                    : wt[e] &&
                      t.forEach(function (t) {
                        n(t === V ? t(e, wt[e]) : t(wt[e]));
                      }));
              }),
              n(Kt(e, void 0, t, a)));
          };
        },
        Ft = function (e, t) {
          return !!e.find(function (e) {
            return e.value === t;
          }).productIsSwitch;
        },
        Ut = function (e, t) {
          var a = e.find(function (e) {
              return e.value === t;
            }),
            n = zt(a.options),
            r = Yt(a.options);
          return !(n || !r);
        },
        Ht = function (e) {
          return null !== e.match(/switch/gi);
        },
        xt = function (e) {
          return null !== e.match(/flpn/gi);
        },
        zt = function (e) {
          return null !== e.match(/MEMBER_ADMIN/gi);
        },
        Yt = function (e) {
          return null !== e.match(/NO_ENDDATETIME/gi);
        },
        Gt = function (e, t) {
          var a = e.grt_parameters;
          if (a) {
            var n = a.find(function (e) {
              return e.prr_label === t;
            });
            if (n) return n;
          }
        },
        Vt = function (e, t) {
          var a = e.find(function (e) {
            return e.value === t;
          });
          if ("true" === a.isBlocked) return !0;
          if ("false" === a.isBlocked && !a.byGrant) {
            var n = a.validFrom,
              r = a.validTo;
            if ("" !== n) {
              var o = fe()(n, "YYYY-MM-DD HH:mm");
              if (!vt(o)) return !0;
            }
            if ("" !== r) {
              var i = fe()(r, "YYYY-MM-DD HH:mm");
              if (vt(i)) return !0;
            }
          }
          if ("false" === a.isBlocked && a.byGrant) {
            var c = Gt(a.byGrant, "VALID_FROM"),
              s = Gt(a.byGrant, "VALID_UNTIL");
            if (c) {
              var l = fe()(c.prr_value, "DD-MM-YYYY HH:mm");
              if (!vt(l)) return !0;
            }
            if (s) {
              var u = fe()(s.prr_value, "DD-MM-YYYY HH:mm");
              if (vt(u)) return !0;
            }
          }
          return !1;
        },
        Bt = function (e, t) {
          return function (a, n) {
            var r = e.find(function (e) {
              return e.value === t;
            });
            if (r) {
              if ("true" === r.isBlocked) {
                var o = ""
                  .concat(z.t("the_product"), " ")
                  .concat(r.cityDescription, " ")
                  .concat(r.productDescription, " ")
                  .concat(z.t("is_blocked_and_cannot_be_used"));
                a(de(o));
              }
              if ("false" === r.isBlocked && !r.byGrant) {
                var i = r.validFrom,
                  c = r.validTo;
                if ("" !== i) {
                  var s = fe()(i, "YYYY-MM-DD HH:mm");
                  if (!vt(s)) {
                    var l = ""
                      .concat(z.t("the_product"), " ")
                      .concat(r.cityDescription, " ")
                      .concat(r.productDescription, " ")
                      .concat(z.t("becomes"), " ")
                      .concat(z.t("valid_from_lowercase"), " ")
                      .concat(Tt(i), " ")
                      .concat(
                        "" !== c
                          ? "".concat(z.t("until_lowercase"), " ").concat(Tt(c))
                          : "",
                        " ",
                      );
                    return void a(de(l));
                  }
                }
                if ("" !== c) {
                  var u = fe()(c, "YYYY-MM-DD HH:mm");
                  if (vt(u)) {
                    var d = ""
                      .concat(z.t("the_product"), " ")
                      .concat(r.cityDescription, " ")
                      .concat(r.productDescription, " was ")
                      .concat(
                        "" !== i
                          ? ""
                              .concat(z.t("valid_from_lowercase"), " ")
                              .concat(Tt(i))
                          : "",
                        " ",
                      )
                      .concat(z.t("until_lowercase"), " ")
                      .concat(Tt(c));
                    return void a(de(d));
                  }
                }
              }
              if ("false" === r.isBlocked && r.byGrant) {
                var m = Gt(r.byGrant, "VALID_FROM"),
                  _ = Gt(r.byGrant, "VALID_UNTIL");
                if (m) {
                  var p = fe()(m.prr_value, "DD-MM-YYYY HH:mm");
                  if (!vt(p)) {
                    var f = ""
                      .concat(z.t("the_product"), " ")
                      .concat(r.cityDescription, " ")
                      .concat(r.productDescription, " ")
                      .concat(z.t("becomes"), " ")
                      .concat(z.t("valid_from_lowercase"), " ")
                      .concat(Ot(m.prr_value), " ")
                      .concat(
                        _
                          ? ""
                              .concat(z.t("until_lowercase"), " ")
                              .concat(Ot(_.prr_value))
                          : "",
                        " ",
                      );
                    return void a(de(f));
                  }
                }
                if (_) {
                  var g = fe()(_.prr_value, "DD-MM-YYYY HH:mm");
                  if (vt(g)) {
                    var v = ""
                      .concat(z.t("the_product"), " ")
                      .concat(r.cityDescription, " ")
                      .concat(r.productDescription, " was ")
                      .concat(
                        m
                          ? ""
                              .concat(z.t("valid_from_lowercase"), " ")
                              .concat(Ot(m.prr_value))
                          : "",
                        " ",
                      )
                      .concat(z.t("until_lowercase"), " ")
                      .concat(Ot(_.prr_value));
                    return void a(de(v));
                  }
                }
              }
            }
          };
        },
        Wt = function (e, t) {
          return !!e.find(function (e) {
            return e.cityId === t;
          });
        },
        Kt = function (e, t) {
          var a =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return function (r, o) {
            var i = o().settings.locale,
              c = o().ui.setInterval;
            (r(ra()),
              y()
                .getCategories(
                  i,
                  function (e) {
                    return ga(e, r);
                  },
                  function () {
                    return va(r);
                  },
                )
                .then(function (i) {
                  if ("OK" === i.status.code.major) {
                    var s = [],
                      l = i.data.categories;
                    if ((r(Dt(l || [])), l && l.length > 0)) {
                      l.map(function (e) {
                        var t = e.cty_products,
                          a = e.cty_external_content,
                          n = e.cty_description;
                        t &&
                          t.map(function (t) {
                            var i = t.pdt_parameter_groups,
                              c = i.find(function (e) {
                                return "START" === e.pgp_label;
                              }),
                              l = c
                                ? c.pgp_parameters.find(function (e) {
                                    return "LOCATION" === e.prr_label;
                                  })
                                : void 0,
                              u = l || void 0,
                              d = t.pdt_description,
                              m = i.find(function (e) {
                                return "GRANT" === e.pgp_label;
                              }),
                              _ = m ? m.pgp_parameters : void 0,
                              p = t.pdt_options,
                              f = t.by_grant,
                              g = o().main.allProductsIsBlocked,
                              v = p.split("|"),
                              h = v.find(function (e) {
                                return "PRODUCT_GRANT" === e;
                              }),
                              E = v.find(function (e) {
                                return "MEMBER_GRANT" === e;
                              }),
                              b = !((!h && !E) || f),
                              A = Ht(p),
                              T = xt(p);
                            g && "false" === t.pdt_is_blocked && r(sa());
                            var O = t.pdt_is_geofencing
                              ? t.pdt_is_geofencing
                              : "false";
                            s.push({
                              value: t.pdt_id,
                              city: e.cty_name,
                              cityDescription: n,
                              productDescription: d,
                              cityId: e.cty_id,
                              name: t.pdt_name,
                              validFrom: t.pdt_valid_from,
                              validTo: t.pdt_valid_to,
                              location: u,
                              options: p,
                              byGrant: f,
                              showAuthorizations: b,
                              logoFolder: a.toLowerCase(),
                              productIsSwitch: A,
                              productIsTemporary: T,
                              productGrantParameters: _,
                              isBlocked: t.pdt_is_blocked,
                              isGeofencing: O,
                            });
                          });
                      });
                      var u = H.getItem("startingProduct");
                      if ((s.length <= 0 && r(sa()), s.length > 0)) {
                        var d = H.getItem("usersData");
                        if (null === u && void 0 !== d) {
                          var m = H.getItem("email"),
                            _ = JSON.parse(d);
                          u = _[m].startingProduct;
                        }
                        ((u = s.some(function (e) {
                          return e.value === u;
                        })
                          ? u
                          : s[0].value),
                          r(Q(u)),
                          r(V("startingProduct", u)),
                          s.map(function (e) {
                            var t = e.name.split(" - ")[0],
                              a = e.name.split(" - ")[1];
                            return (
                              (e.name = t.trim()),
                              (e.title = a && a.trim()),
                              e
                            );
                          }),
                          r(Ee(s)));
                        var p = o().settings.currentProduct
                          ? o().settings.currentProduct
                          : u;
                        r(Xt(p, e));
                        var g = s.find(function (e) {
                          return e.value === p;
                        });
                        if (
                          (g && !Pe(g.options, "MAX_ACT") && r(gt(e)),
                          g && Pe(g.options, "MAX_ACT") && r(Zt(p)),
                          t)
                        )
                          Wt(s, t) || e.push("/organizations");
                        var v = Ft(s, p),
                          h = Ut(s, p);
                        if (
                          (v && !n
                            ? e.push("/switch-license-plate")
                            : h && !n && e.push("/activations"),
                          Vt(s, p))
                        ) {
                          var E = s.find(function (e) {
                            return e.value === p;
                          });
                          a &&
                            (r(la()),
                            r(Bt(s, p)),
                            e.push("/other-products/" + E.cityId));
                        } else {
                          var b = Ft(s, p),
                            A = Ut(s, p);
                          b && !n
                            ? e.push("/switch-license-plate")
                            : A && !n && e.push("/activations");
                        }
                      } else a ? e.push("/no-products") : e.push("/settings");
                    } else
                      (r(Ee([])),
                        a ? e.push("/no-products") : e.push("/settings"));
                  } else
                    "FAIL" === i.status.code.major &&
                    "SESSION_TIMEOUT" === i.status.code.minor
                      ? (c && r(le(c)), r(ha(e)))
                      : (c && r(le(c)),
                        e.push("/login"),
                        r(pa()),
                        f.toast.error(i.status.message));
                })
                .catch(function () {
                  (e.push("/login"), r(pa()));
                }));
          };
        },
        Zt = function (e) {
          return function (t, a) {
            I()
              .getAvailableActions(e)
              .then(function (e) {
                e &&
                  e.status &&
                  e.status &&
                  "OK" === e.status.code.major &&
                  t({
                    type: "ON_AVAILABLE_ACTIONS",
                    availableActions: e.data.available_actions,
                  });
              })
              .catch();
          };
        },
        Qt = function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              var a = e.idn_members,
                n = {
                  mbr_identifier: a.find(function (e) {
                    return "FLPN" === e.mbr_type;
                  }).mbr_identifier,
                  idn_identifier: e.idn_identifier,
                  idn_type: e.idn_type,
                },
                r = a.some(function (e) {
                  return "YES" === e.mbr_active && "LPN" === e.mbr_type;
                });
              ((n.active = !r), t.push(n));
            }),
            t
          );
        },
        Jt = function (e) {
          var t = [],
            a = [];
          return (
            e.map(function (e) {
              var n = e.mbr_actions;
              n.length > 0 &&
                n.forEach(function (r) {
                  if ("SCHEDULED" === r.atn_state && "NO" === r.atn_chained) {
                    var o = Object.assign({}, r);
                    ((o.mbr_identifier = e.mbr_identifier),
                      (o.mbr_parameters = e.mbr_parameters),
                      a.push(o));
                  } else {
                    var i = Object.assign({}, r);
                    if (
                      ((i.mbr_identifier = e.mbr_identifier),
                      (i.mbr_parameters = e.mbr_parameters),
                      "ACTIVE" === r.atn_state && "NO" === r.atn_chained)
                    )
                      t.push(i);
                    else if (!r.atn_chained_child_id) {
                      var c = (function (e) {
                          var t = [];
                          return (
                            e.forEach(function (a, n) {
                              var r,
                                o = [];
                              "ACTIVE" === a.atn_state &&
                                "YES" === a.atn_chained &&
                                a.atn_chained_child_id &&
                                (o.push(a.atn_id),
                                (r = a.atn_chained_child_id),
                                e.forEach(function (e) {
                                  e.atn_chained_child_id && e.atn_id === r
                                    ? (o.push(e.atn_id),
                                      (r = e.atn_chained_child_id))
                                    : e.atn_chained_child_id ||
                                      e.atn_id !== r ||
                                      o.push(e.atn_id);
                                }),
                                t.push(o));
                            }),
                            t
                          );
                        })(n),
                        s = (function (e, t) {
                          var a = 0,
                            n = t.flat();
                          return (
                            n.length > 0 &&
                              n.forEach(function (t) {
                                var n = e.find(function (e) {
                                  return e.atn_id === t;
                                });
                                if (n) {
                                  var r = n.atn_parameters.find(function (e) {
                                    return "COST" === e.prr_label;
                                  });
                                  if (r) {
                                    var o =
                                        "string" === typeof r.prr_value
                                          ? r.prr_value.replace(",", ".")
                                          : r.prr_value,
                                      i = a + Number(o);
                                    a = Math.floor(100 * i) / 100;
                                  }
                                }
                              }),
                            a.toFixed(2).toString()
                          );
                        })(n, c);
                      (c.length > 0 &&
                        c.forEach(function (e, t) {
                          if (
                            e.find(function (e) {
                              return e === r.atn_id;
                            })
                          ) {
                            var a = (function (e, t) {
                              var a = t.find(function (t) {
                                return t.atn_id === e;
                              });
                              if (a)
                                return a.atn_parameters.find(function (e) {
                                  return "TIMESTART" === e.prr_label;
                                });
                            })(e[0], n);
                            ((i.parentId = e[0]),
                              (i.parentTimeStart = a.prr_value),
                              s > 0 && (i.cost = s));
                          }
                        }),
                        t.push(i));
                    }
                  }
                });
            }),
            { pdtMembersActive: t, pdtMembersScheduled: a }
          );
        },
        qt = function (e) {
          return e
            .filter(function (e) {
              return "NO" === e.mbr_active;
            })
            .map(function (e) {
              return { mbr_id: e.mbr_id, mbr_identifier: e.mbr_identifier };
            });
        },
        Xt = function (e, t) {
          var a =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          return function (n, r) {
            var o = r().settings.locale,
              i = [],
              c = [],
              s = [],
              l = [];
            (a && n(ra()),
              y()
                .getCategoryProductDetails(e, o)
                .then(function (e) {
                  if ("OK" === e.status.code.major) {
                    var a = e.data.pdt_members,
                      r = e.data.pdt_identifications;
                    (r.length > 0 && (s = Qt(r)),
                      a.length > 0 &&
                        ((i = Jt(a).pdtMembersActive),
                        (c = Jt(a).pdtMembersScheduled),
                        (l = qt(a))),
                      n($t(s)),
                      n(ea(i)),
                      n(ta(c)),
                      n(aa(l)));
                  } else
                    "FAIL" === e.status.code.major &&
                    "SESSION_TIMEOUT" === e.status.code.minor
                      ? n(ha(t))
                      : n(na());
                })
                .catch(function () {
                  n(na());
                }));
          };
        },
        $t = function (e) {
          return {
            type: "GET_TEMPORARY_LICENSE_PLATES",
            temporaryLicensePlates: e,
          };
        },
        ea = function (e) {
          return {
            type: "GET_CATEGORY_PRODUCT_DETAILS_ACTIVE",
            productDetailsActive: e,
          };
        },
        ta = function (e) {
          return {
            type: "GET_CATEGORY_PRODUCT_DETAILS_SCHEDULED",
            productDetailsScheduled: e,
          };
        },
        aa = function (e) {
          return {
            type: "GET_CATEGORY_PRODUCT_DETAILS_NOT_ACTIVE",
            productDetailsNotActive: e,
          };
        },
        na = function () {
          return { type: "GET_CATEGORY_PRODUCT_DETAILS_FAILED" };
        },
        ra = function () {
          return { type: "GET_CATEGORY_PRODUCT_DETAILS_STARTED" };
        },
        oa = function (e, t) {
          return function (a, n) {
            var r = n().settings,
              o = r.startingProduct,
              i = r.currentProduct,
              c = r.locale,
              s = i || o;
            (a(ra()),
              C()
                .stopParkingActions(e, c, s)
                .then(function (e) {
                  "OK" === e.status.code.major
                    ? (a(ia()),
                      a(Xt(s)),
                      a(gt()),
                      f.toast.success(z.t("parking_action_stop_message")))
                    : "FAIL" === e.status.code.major &&
                        "SESSION_TIMEOUT" === e.status.code.minor
                      ? (a(ca()), a(ha(t)))
                      : (a(ca()), f.toast.error(e.status.message));
                })
                .catch(function () {
                  return a(ca);
                }));
          };
        },
        ia = function () {
          return { type: "OON_STOP_PARKING_ACTIONS_SUCCESS" };
        },
        ca = function () {
          return { type: "OON_STOP_PARKING_ACTIONS_FAILED" };
        },
        sa = function () {
          return { type: "CHANGE_ALL_PRODUCTS_IS_BLOCKED_STATUS" };
        },
        la = function () {
          return { type: "CHANGE_ALL_PRODUCTS_IS_BLOCKED" };
        },
        ua = function () {
          return { type: "IS_USER_WITHIN_GEOFENCE_FETCH" };
        },
        da = function (e) {
          return { type: "IS_USER_WITHIN_GEOFENCE_SUCCESS", locations: e };
        },
        ma = function () {
          return { type: "IS_USER_WITHIN_GEOFENCE_FAIL" };
        },
        _a = function (e) {
          return { type: "AUTHORIZE_FAILED", errorMessage: e };
        },
        pa = function () {
          var e;
          return (
            (e = "cdts"),
            (document.cookie =
              e + "=;Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;"),
            H.setItem("avail", "Y"),
            { type: "UNAUTHORIZE_USER" }
          );
        },
        fa = function (e, t, a, n) {
          return function (r) {
            var o = H.getItem("usersData")
              ? JSON.parse(H.getItem("usersData"))
              : {};
            void 0 === o[e] && (o[e] = G);
            var i = o[e].theme;
            i = void 0 === a ? i : a;
            var c = o[e].locale && "" !== o[e].locale ? o[e].locale : t;
            ((o[e].locale = c),
              (o[e].theme = i),
              (o[e].rememberMe = n),
              (z.locale = c),
              H.setItem("locale", c),
              H.setItem("usersData", JSON.stringify(o)),
              r(re(a)));
          };
        },
        ga = function (e, t) {
          var a = e || "";
          t(de(he(z.t("service_not_available", { statusCode: a }))));
        },
        va = function (e) {
          e(de(z.t("cannot_connect_to_server")));
        },
        ha = function (e) {
          return function (t, a) {
            var n,
              r,
              o = a().auth.locale,
              i = a().ui.themeTemporary,
              c = H.getItem("email"),
              s =
                ((n = "cdts"),
                document.cookie.split(";").reduce(
                  function (e, t) {
                    var a = t.split("=");
                    return a[0].trim() === n ? a[1] : e;
                  },
                  void 0,
                ));
            if (c && s) {
              var l = ((r = s), decodeURIComponent(escape(window.atob(r))));
              N()
                .login(c, l, o)
                .then(function (a) {
                  "OK" === a.status.code.major
                    ? (H.setItem("email", c),
                      t(X(c)),
                      t(fa(c, o, i)),
                      t(Ta(void 0)),
                      t(oe(void 0)),
                      t({ type: "AUTHORIZE_SUCCESS" }),
                      t(Rt(e)),
                      e.push("/"))
                    : (e.push("/login"),
                      t(pa()),
                      f.toast.error(
                        z.t(
                          "your_session_has_expired_you_have_to_log_in_again",
                        ),
                      ));
                })
                .catch(function (a) {
                  (e.push("/login"),
                    t(pa()),
                    f.toast.error(
                      z.t("your_session_has_expired_you_have_to_log_in_again"),
                    ));
                });
            } else
              (e.push("/login"),
                t(pa()),
                f.toast.error(
                  z.t("your_session_has_expired_you_have_to_log_in_again"),
                ));
          };
        },
        Ea = function () {
          return function (e, t) {
            var a = t().settings.locale;
            N()
              .getCaptcha(a)
              .then(function (t) {
                "OK" === t.status.code.major
                  ? e({ type: "CAPTCHA_SUCCESS", captcha: t.data })
                  : (e({ type: "AUTHORIZE_FAILED" }),
                    f.toast.error(t.status.message));
              })
              .catch(function () {
                return e({ type: "AUTHORIZE_FAILED" });
              });
          };
        },
        ba = function (e, t, a, n) {
          return function (r, o) {
            var i = o().form,
              c = i.captcha,
              s = i.new_password,
              l = i.confirm_password,
              u = o().auth.captcha,
              d = c ? c.value : void 0,
              m = s ? s.value : void 0,
              _ = l ? l.value : void 0,
              p = decodeURIComponent(e);
            (r({ type: "FETCH_STARTED" }),
              N()
                .resetPassword(d, u.id, p, t, m, _, a)
                .then(function (e) {
                  "OK" === e.status.code.major
                    ? (r({ type: "RESET_PASSWORD_SUCCESS" }), n.push("/"))
                    : (r({ type: "RESET_PASSWORD_FAILED" }),
                      r(Ea()),
                      f.toast.error(e.status.message));
                })
                .catch(function () {
                  return r({ type: "RESET_PASSWORD_FAILED" });
                }));
          };
        },
        Aa = function (e) {
          return function (t) {
            ((z.locale = e), t(Ta(e)));
          };
        },
        Ta = function (e) {
          return { type: "ON_CHANGE_LOCALE_TEMPORAL", locale: e };
        },
        Oa = function (e) {
          return e.replace(/[&]/gi, "");
        },
        Na = Object(s.b)(
          function (e) {
            return { form: e.form };
          },
          { onFormFieldValueChanged: V, onErrorUpdate: K },
        ),
        ya = Object(m.b)(Na),
        Ia = ya(function (e) {
          var t = e.name,
            a = e.value,
            o = void 0 === a ? "" : a,
            i = e.label,
            c = e.onFormFieldValueChanged,
            s = e.validator,
            l = e.onErrorUpdate,
            u = e.disabled,
            d = void 0 !== u && u,
            m = e.showClearButton,
            _ = void 0 !== m && m,
            p = e.form,
            f = e.licensePlate,
            g = void 0 !== f && f,
            v = e.units,
            h = void 0 !== v && v,
            E = e.maxlength,
            b = void 0 === E ? 255 : E,
            A = e.type,
            T = void 0 === A ? "text" : A,
            O = e.placeholder,
            N = e.title,
            y = e.autofocus,
            I = e.leftIconClass,
            C = e.showSearchButton,
            S = void 0 !== C && C,
            w = e.onClickSearchButton,
            k = e.upperCase,
            P = void 0 !== k && k,
            D = e.areaRequired,
            j = void 0 !== D && D,
            L = e.areaLabel,
            M = e.tabIndex,
            R = e.enterFloat,
            F = void 0 !== R && R,
            U = e.enterWithoutSpaces,
            H = void 0 !== U && U,
            x = Object(n.createRef)(),
            Y = p[t];
          return r.a.createElement(
            "div",
            {
              className: "input-container ".concat(
                g ? "license-plate-container" : "license-plate-container-white",
              ),
            },
            i &&
              r.a.createElement("label", { htmlFor: t, id: "label-" + t }, i),
            r.a.createElement(
              "div",
              { className: "input-clear-container" },
              I && r.a.createElement("div", { className: I }),
              S &&
                r.a.createElement(
                  "button",
                  {
                    className: "btn-search",
                    type: "button",
                    onClick: function () {
                      return w && w();
                    },
                    "aria-label": z.t("search"),
                  },
                  r.a.createElement("div", { className: "search_icon" }),
                ),
              r.a.createElement("input", {
                value: o,
                id: t,
                placeholder: O,
                disabled: d,
                ref: function (e) {
                  return (x = e);
                },
                maxLength: g ? 10 : b,
                onBlur: function (e) {
                  !(function (e) {
                    if (s) {
                      var a = s(e);
                      a && l(t, a);
                    }
                  })(e.target.value);
                },
                tabIndex: M,
                type: T,
                title: N && N,
                autoFocus: y && y,
                "aria-labelledby": void 0 !== i ? "label-" + t : void 0,
                "aria-required": j,
                "aria-label": void 0 !== L && void 0 === i ? L : void 0,
                onChange: function (e) {
                  g
                    ? (function (e, t) {
                        var a = e.target.value.toUpperCase();
                        c(
                          t,
                          (function (e) {
                            return e.replace(
                              /[!@#$%^&*.\\/\-+='"<>:;!?,_(){}[\]~`\u0384\u0384|\u2116 ]/gi,
                              "",
                            );
                          })(a),
                        );
                      })(e, t)
                    : h
                      ? (function (e, t) {
                          var a = e.target.value;
                          c(
                            t,
                            (function (e) {
                              return e.replace(/[^0-9]/gi, "");
                            })(a),
                          );
                        })(e, t)
                      : P
                        ? (function (e, t) {
                            var a = e.target.value.toUpperCase(),
                              n = Oa(a);
                            c(t, n);
                          })(e, t)
                        : F
                          ? (function (e, t) {
                              var a = e.target.value
                                .replace(/[^0-9,]/g, "")
                                .replace(/(\..*)\./g, "$1");
                              c(t, a);
                            })(e, t)
                          : H
                            ? (function (e, t) {
                                var a = e.target.value.replace(/(\s)+/g, "");
                                c(t, a);
                              })(e, t)
                            : (function (e, t) {
                                var a = e.target.value,
                                  n = Oa(a);
                                c(t, n);
                              })(e, t);
                },
              }),
              _ &&
                !d &&
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    className: "clear-input",
                    "aria-label": z.t("clear"),
                    name: "clear",
                    onClick: function () {
                      (c(t, ""), (x.value = ""), x.focus());
                    },
                  },
                  "Clear",
                ),
            ),
            r.a.createElement(
              "div",
              { className: "error-container" },
              Y &&
                Y._changed &&
                Y.errorMessage &&
                r.a.createElement(
                  "div",
                  { className: "error-message" },
                  z.t(Y.errorMessage),
                ),
            ),
          );
        }),
        Ca = Object(s.b)(null, { onFormFieldValueChanged: V }),
        Sa = Object(m.b)(Ca),
        wa =
          (Sa(function (e) {
            var t = e.name,
              a = e.value,
              n = e.label,
              o = e.list,
              i = e.onFormFieldValueChanged,
              c = e.autofocus,
              s = e.defaultSelected,
              l = e.onChangeSelect,
              u = e.selectedProduct,
              d = e.startingProductId,
              m = e.isBlocked,
              _ = e.startingProduct;
            return r.a.createElement(
              "div",
              null,
              r.a.createElement("label", { htmlFor: t }, n),
              r.a.createElement(
                "select",
                {
                  id: t,
                  value: u && d,
                  autoFocus: c && c,
                  onChange: function (e) {
                    var n;
                    if ("last_product" === e.target.value) n = a;
                    else {
                      var r = m(e.target.value);
                      (r || (n = e.target.value), r && (n = _));
                    }
                    if (l)
                      if ("last_product" === e.target.value) l(e.target.value);
                      else {
                        var o = m(e.target.value);
                        (o || l(e.target.value), o && l("last_product"));
                      }
                    i(t, n);
                  },
                },
                s &&
                  r.a.createElement(
                    "option",
                    { value: s.value, key: "default" },
                    s.title,
                  ),
                o.map(function (e, t) {
                  return r.a.createElement(
                    "option",
                    { key: t, value: e.value },
                    e.title,
                  );
                }),
              ),
            );
          }),
          Object(s.b)(
            function (e) {
              return { rememberMe: e.ui.rememberMe, locale: e.auth.locale };
            },
            {
              rememberMeChange: function () {
                return function (e, t) {
                  e({
                    type: "REMEMBER_ME_CHANGE",
                    rememberMeValue: "no" === t().ui.rememberMe ? "yes" : "no",
                  });
                };
              },
            },
          )),
        ka = Object(m.b)(wa),
        Pa = ka(function (e) {
          var t = e.rememberMeChange,
            a = (e.rememberMe, e.tabIndex),
            n = r.a.createRef();
          return r.a.createElement(
            "div",
            {
              className: "login-remember-me",
              tabIndex: a,
              "area-label": z.t("remember_me"),
              onKeyDown: function (e) {
                (13 !== e.keyCode && "Enter" !== e.key) || n.current.click();
              },
            },
            r.a.createElement(
              "label",
              { className: "switch", "aria-label": "switch" },
              r.a.createElement("input", {
                type: "checkbox",
                ref: function (e) {
                  return e;
                },
                name: "remember-me",
                onChange: function () {
                  return t();
                },
              }),
              r.a.createElement("span", { className: "slider round", ref: n }),
              r.a.createElement("span", null),
              '""',
            ),
            r.a.createElement("div", null, z.t("remember_me")),
          );
        }),
        Da = Object(n.createContext)({ content: "", buttons: null }),
        ja = Object(s.b)(
          function (e) {
            return { message: e.ui.modalMessage };
          },
          { hideModalDialog: _e },
        ),
        La = Object(m.b)(ja),
        Ma = La(function (e) {
          var t = e.hideModalDialog,
            a = Object(n.useContext)(Da);
          return r.a.createElement(
            "div",
            { className: "modal-message-overlay" },
            r.a.createElement(
              "div",
              { className: "modal-message-container" },
              r.a.createElement(
                "div",
                { className: "modal-dialog" },
                a.content,
                !a.buttons &&
                  r.a.createElement(
                    "button",
                    {
                      className: "modal-dialog-ok",
                      onClick: function () {
                        return t();
                      },
                      "aria-label": z.t("ok"),
                    },
                    z.t("ok"),
                  ),
                a.buttons &&
                  r.a.createElement(
                    "div",
                    { className: "modal-buttons-wrap" },
                    a.buttons.map(function (e, t) {
                      return r.a.createElement(
                        "button",
                        {
                          className: "".concat(e.cssClass ? e.cssClass : ""),
                          key: t,
                          onClick: e.onClick,
                          autoFocus: e.autoFocus,
                          tabIndex: "0",
                          "aria-label": e.text,
                        },
                        e.text,
                      );
                    }),
                  ),
                a.footer,
              ),
            ),
          );
        }),
        Ra = a(1049),
        Fa = Object(s.b)(
          function (e) {
            return { message: e.ui.modalMessage, goToScreen: e.ui.goToScreen };
          },
          {
            hideModalMessage: function () {
              return { type: "HIDE_MODAL_MESSAGE" };
            },
          },
        ),
        Ua = Object(m.b)(Ra.a, Fa),
        Ha = Ua(function (e) {
          var t = e.hideModalMessage,
            a = (e.buttons, e.message),
            n = e.history,
            o = e.goToScreen;
          return r.a.createElement(
            "div",
            { className: "modal-message-overlay" },
            r.a.createElement(
              "div",
              { className: "modal-message-container" },
              r.a.createElement(
                "div",
                { className: "modal-message" },
                r.a.createElement("p", null, a),
                r.a.createElement(
                  "div",
                  { className: "modal-buttons-wrap" },
                  r.a.createElement(
                    "button",
                    {
                      autoFocus: !0,
                      className: "modal-dialog-ok",
                      tabIndex: "0",
                      "aria-label": z.t("ok"),
                      onClick: function () {
                        (t(), o && n.push(o));
                      },
                    },
                    z.t("ok"),
                  ),
                ),
              ),
            ),
          );
        }),
        xa = a(43),
        za = a(97),
        Ya = a.n(za),
        Ga = [
          {
            title: "default",
            value: "default",
            className: "default-theme-item",
          },
          {
            title: "black_white",
            value: "black-white",
            className: "black-white-theme-item",
          },
          {
            title: "white_black",
            value: "white-black",
            className: "white-black-theme-item",
          },
          {
            title: "black_yellow",
            value: "black-yellow",
            className: "black-yellow-theme-item",
          },
          {
            title: "yellow_black",
            value: "yellow-black",
            className: "yellow-black-theme-item",
          },
        ],
        Va = Object(s.b)(function (e) {
          return { currentTheme: e.ui.theme };
        }, null),
        Ba = Object(m.b)(Va),
        Wa = Ba(function (e) {
          var t = e.changeTheme,
            a = e.currentTheme,
            o = Object(n.useRef)(null);
          Object(n.useEffect)(function () {
            o && o.current && o.current.focus();
          }, []);
          var i = function (e) {
              t && t(e);
            },
            c = "theme-" + a;
          return r.a.createElement(
            "div",
            { id: "theme-list", className: c },
            Ga.map(function (e, t) {
              var a = e.value,
                n = e.title,
                c = e.className;
              return r.a.createElement(
                "div",
                {
                  key: t,
                  className: "theme-item ",
                  tabIndex: "1",
                  ref: 0 === t ? o : null,
                  onClick: function () {
                    return i(a);
                  },
                  onKeyDown: function (e) {
                    return (function (e, t, a, n) {
                      var r,
                        o = e.key || e.keyCode;
                      if (
                        ((13 !== o && "Enter" !== o) || t(a),
                        (r = window.event
                          ? !!window.event.shiftKey
                          : !!e.shiftKey),
                        (9 === o || "Tab" === o) && !r && n === Ga.length - 1)
                      ) {
                        e.preventDefault();
                        var i = window.document.querySelectorAll(".theme-item");
                        i.length > 0 && i[0].focus();
                      }
                      if ((9 === o || "Tab" === o) && r && 0 === n) {
                        e.preventDefault();
                        var c = window.document.querySelectorAll(".theme-item");
                        c.length > 0 && c[c.length - 1].focus();
                      }
                    })(e, i, a, t);
                  },
                },
                r.a.createElement("div", {
                  className: "theme-indicator ".concat(c),
                }),
                z.t(n),
              );
            }),
          );
        }),
        Ka = [
          { value: "en_UK", title: "English", className: "en" },
          { value: "nl_NL", title: "Nederlands", className: "nl" },
        ],
        Za = Object(s.b)(function (e) {
          return { currentTheme: e.ui.theme };
        }, null),
        Qa = Object(m.b)(Za),
        Ja = Qa(function (e) {
          var t = e.changeLocale,
            a = e.currentTheme,
            o = (e.setLanguagesOpen, Object(n.useRef)(null));
          Object(n.useEffect)(function () {
            o && o.current && o.current.focus();
          }, []);
          var i = function (e) {
              t && t(e);
            },
            c = "lang-list theme-" + a;
          return r.a.createElement(
            "div",
            { className: c },
            Ka.map(function (e, t) {
              var a = e.value,
                n = e.title,
                c = e.className;
              return r.a.createElement(
                "div",
                {
                  key: t,
                  className: "lang-item ".concat(c),
                  tabIndex: "2",
                  ref: 0 === t ? o : null,
                  onClick: function () {
                    return i(a);
                  },
                  onKeyDown: function (e) {
                    var n,
                      r = e.key || e.keyCode;
                    if (
                      ((13 !== r && "Enter" !== r) || i(a),
                      (n = window.event
                        ? !!window.event.shiftKey
                        : !!e.shiftKey),
                      (9 === r || "Tab" === r) && !n && t === Ka.length - 1)
                    ) {
                      e.preventDefault();
                      var o = window.document.querySelectorAll(".lang-item");
                      o.length > 0 && o[0].focus();
                    }
                    if ((9 === r || "Tab" === r) && n && 0 === t) {
                      e.preventDefault();
                      var c = window.document.querySelectorAll(".lang-item");
                      c.length > 0 && c[c.length - 1].focus();
                    }
                  },
                },
                n,
              );
            }),
          );
        }),
        qa = function () {
          var e = Object(n.useState)("s"),
            t = Object(xa.a)(e, 2),
            a = t[0],
            o = t[1],
            i = function (e, t) {
              ("s" === t
                ? (document.body.style.fontSize = "0.875em")
                : "m" === t
                  ? (document.body.style.fontSize = "1.1em")
                  : "l" === t && (document.body.style.fontSize = "1.475em"),
                o(t));
            };
          return r.a.createElement(
            "div",
            { className: "font-adj" },
            r.a.createElement(
              "div",
              {
                className: "font-adj__small ".concat(
                  "s" === a ? "selected" : "",
                ),
                onClick: function (e) {
                  return i(0, "s");
                },
              },
              "A",
            ),
            r.a.createElement(
              "div",
              {
                className: "font-adj__medium ".concat(
                  "m" === a ? "selected" : "",
                ),
                onClick: function (e) {
                  return i(0, "m");
                },
              },
              "A",
            ),
            r.a.createElement(
              "div",
              {
                className: "font-adj__large ".concat(
                  "l" === a ? "selected" : "",
                ),
                onClick: function (e) {
                  return i(0, "l");
                },
              },
              "A",
            ),
          );
        },
        Xa = Object(s.b)(
          function (e) {
            return { locale: e.auth.locale, currentTheme: e.ui.theme };
          },
          { changeTheme: re, onChangeLocale: Aa },
        ),
        $a = Object(m.b)(Xa),
        en = $a(function (e) {
          var t = e.onChangeLocale,
            a = e.changeTheme,
            o = e.locale,
            i = Object(n.useState)(!1),
            c = Object(xa.a)(i, 2),
            s = c[0],
            l = c[1],
            u = Object(n.useState)(!1),
            d = Object(xa.a)(u, 2),
            m = d[0],
            _ = d[1];
          Object(n.useEffect)(
            function () {
              var e = H.getItem("locale"),
                n = H.getItem("lastUsedTheme");
              (n && a(n),
                t(e && "nl" !== e && "nl_NL" !== e ? "en_UK" : "nl_NL"));
            },
            [a, t],
          );
          var p = function (e) {
              (13 !== e.keyCode && "Enter" !== e.key) || f();
            },
            f = function () {
              _(!m);
            },
            g = function () {
              l(!s);
            },
            v = function (e) {
              (H.setItem("locale", e), t(e), _(!1));
            };
          return r.a.createElement(
            "div",
            { className: "municipality-theme-and-language-container" },
            r.a.createElement(
              Ya.a,
              {
                isOpen: s,
                onClickOutside: function () {
                  return l(!1);
                },
                position: "bottom",
                content: r.a.createElement(Wa, {
                  changeTheme: function (e) {
                    (l(!1), H.setItem("lastUsedTheme", e), a(e));
                  },
                }),
                align: "start",
              },
              r.a.createElement(
                "span",
                {
                  tabIndex: "1",
                  onKeyDown: function (e) {
                    (13 !== e.keyCode && "Enter" !== e.key) || g();
                  },
                  onClick: function () {
                    return g();
                  },
                },
                z.t("contrast"),
              ),
            ),
            r.a.createElement(qa, null),
            "nl_NL" === o &&
              r.a.createElement(
                Ya.a,
                {
                  isOpen: m,
                  position: ["bottom"],
                  onClickOutside: function () {
                    return _(!1);
                  },
                  nudgedLeft: "50",
                  content: r.a.createElement(Ja, { changeLocale: v }),
                  align: "end",
                },
                r.a.createElement(
                  "span",
                  {
                    tabIndex: "2",
                    onKeyDown: p,
                    onClick: function () {
                      return f();
                    },
                  },
                  z.t("language"),
                ),
              ),
            "nl_NL" !== o &&
              r.a.createElement(
                Ya.a,
                {
                  isOpen: m,
                  position: ["bottom"],
                  onClickOutside: function () {
                    return _(!1);
                  },
                  nudgedLeft: "50",
                  content: r.a.createElement(Ja, { changeLocale: v }),
                  align: "end",
                },
                r.a.createElement(
                  "span",
                  {
                    tabIndex: "2",
                    onKeyDown: p,
                    onClick: function () {
                      return f();
                    },
                  },
                  z.t("language"),
                ),
              ),
          );
        }),
        tn = Object(s.b)(
          function (e) {
            var t = e.form.login_email ? e.form.login_email.value : "",
              a = e.form.login_password ? e.form.login_password.value : "";
            return {
              progress: e.auth.progress,
              errorMessage: e.auth.errorMessage,
              authenticated: e.auth.authenticated,
              email: t,
              password: a,
              locale: e.auth.locale,
              themeTemporary: e.ui.themeTemporary,
              dialogVisible: e.ui.showModalDialog,
              showModalMessage: e.ui.showModalMessage,
              theme: e.ui.theme,
              settingsWasChange: e.auth.settingsWasChange,
            };
          },
          {
            onLoginButtonPressed: function (e, t) {
              return function (a, n) {
                var r,
                  o = n().auth.locale,
                  i = n().ui,
                  c = i.themeTemporary,
                  s = i.rememberMe,
                  l = ((r = t), window.btoa(unescape(encodeURIComponent(r))));
                if ("yes" === s) {
                  var u = new Date();
                  (u.setTime(u.getTime() + 31536e6),
                    (document.cookie = "cdts="
                      .concat(l, "; expires=")
                      .concat(u.toGMTString(), "; Secure")));
                }
                N()
                  .login(
                    e,
                    t,
                    o,
                    function (e) {
                      return ga(e, a);
                    },
                    function () {
                      return va(a);
                    },
                  )
                  .then(function (t) {
                    t &&
                      t.status &&
                      (t.status && "OK" === t.status.code.major
                        ? (H.setItem("email", e),
                          a(X(e)),
                          a(fa(e, o, c, s)),
                          a(Ta(void 0)),
                          a(oe(void 0)),
                          a({ type: "AUTHORIZE_SUCCESS" }))
                        : t.status &&
                          "FAIL" === t.status.code.major &&
                          a(_a(t.status.code.minor)));
                  })
                  .catch(function (e) {
                    (a(_a()), a(de(e.message)));
                  });
              };
            },
            onChangeLocale: Aa,
            changeThemeTemporary: oe,
            showModalDialog: me,
            hideModalDialog: _e,
            onSaveSettingsPublic: function (e) {
              return function (t, a) {
                var n = a().auth.locale,
                  r = a().ui.theme;
                (H.setItem("locale", n),
                  H.setItem("theme", r),
                  H.setItem("lastUsedTheme", r));
                var o = H.getItem("usersData")
                  ? JSON.parse(H.getItem("usersData"))
                  : {};
                (void 0 === o[e] && (o[e] = G),
                  (o[e].locale = n),
                  (o[e].theme = r),
                  H.setItem("usersData", JSON.stringify(o)));
              };
            },
            changeTheme: re,
            onSettingsWasChange: function (e) {
              return { type: "SETTINGS_WAS_CHANGE", arg: e };
            },
            unauthorizeUser: pa,
            showMyModalMessage: de,
          },
        ),
        an = Object(m.b)(tn),
        nn = an(function (e) {
          var t = e.email,
            a = e.password,
            o = e.authenticated,
            i = e.progress,
            c = e.onLoginButtonPressed,
            s = e.errorMessage,
            l = e.locale,
            d = e.onChangeLocale,
            m = (e.changeThemeTemporary, e.showModalDialog, e.dialogVisible),
            g = (e.hideModalDialog, e.themeTemporary, e.history, e.theme),
            h = e.onSaveSettingsPublic,
            E = e.changeTheme,
            b = (e.settingsWasChange, e.onSettingsWasChange, e.unauthorizeUser),
            A = e.showMyModalMessage,
            T = e.showModalMessage;
          (Object(n.useEffect)(
            function () {
              (!1 !== navigator.cookieEnabled && !0 !== H.failedStorage) ||
                (b(), A(z.t("cookie_missing")));
            },
            [A, b],
          ),
            Object(n.useEffect)(
              function () {
                var e = H.getItem("locale"),
                  t = H.getItem("lastUsedTheme");
                (t && E(t),
                  d(e && "nl" !== e && "nl_NL" !== e ? "en_UK" : "nl_NL"));
              },
              [E, d],
            ));
          var O = l ? l.slice(0, -3) : "nl",
            N = "login-screen-container theme-" + g;
          return r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(p.Helmet, { htmlAttributes: { lang: O } }),
            r.a.createElement(
              "div",
              { className: N },
              r.a.createElement(
                "div",
                { className: "container login-container" },
                r.a.createElement(f.ToastContainer, {
                  position: "bottom-center",
                  autoClose: 5e3,
                  hideProgressBar: !0,
                  newestOnTop: !1,
                  closeOnClick: !0,
                  rtl: !1,
                  pauseOnVisibilityChange: !0,
                  draggable: !0,
                  pauseOnHover: !0,
                }),
                H.getItem("email") &&
                  o &&
                  r.a.createElement(u.a, {
                    toRedirect: !0,
                    to: { pathname: "/" },
                  }),
                r.a.createElement(
                  n.Fragment,
                  null,
                  r.a.createElement(
                    "h1",
                    { className: "hidden-page-title" },
                    "Parkapp3",
                  ),
                  r.a.createElement(
                    "div",
                    { className: "login-contrast-and-language" },
                    " ",
                    r.a.createElement(en, null),
                    " ",
                  ),
                  r.a.createElement(
                    "div",
                    { className: "login-logo" },
                    r.a.createElement("img", {
                      src: v.a,
                      alt: "Parkapp3 logo",
                    }),
                  ),
                  r.a.createElement(
                    "form",
                    {
                      className: "parkapp-form login-form",
                      onSubmit: function (e) {
                        !(function (e) {
                          (e.preventDefault(),
                            !1 !== navigator.cookieEnabled &&
                            !0 !== H.failedStorage
                              ? (h(t), c(t, a))
                              : A(z.t("cookie_missing")));
                        })(e);
                      },
                    },
                    r.a.createElement(
                      "div",
                      { className: "login-form-fields" },
                      r.a.createElement(Ia, {
                        name: "login_email",
                        placeholder: z.t("email"),
                        title: "Email",
                        label: z.t("email"),
                        value: t,
                        type: "email",
                        autofocus: !0,
                        areaRequired: !0,
                        leftIconClass: "left-icon-email-field",
                        tabIndex: 3,
                        enterWithoutSpaces: !0,
                      }),
                      r.a.createElement(Ia, {
                        name: "login_password",
                        placeholder: z.t("password"),
                        type: "password",
                        title: "Password",
                        label: z.t("password"),
                        value: a,
                        areaRequired: !0,
                        leftIconClass: "left-icon-email-password",
                        tabIndex: 4,
                      }),
                      r.a.createElement(Pa, { tabIndex: 5 }),
                      r.a.createElement(
                        _.a,
                        {
                          className: "forgot-password",
                          to: "/request-new-password",
                        },
                        z.t("forgot_password"),
                      ),
                      s &&
                        r.a.createElement(
                          "div",
                          { className: "error-message" },
                          z.t(s),
                        ),
                    ),
                    r.a.createElement(
                      n.Fragment,
                      null,
                      i && r.a.createElement("div", { className: "loader" }),
                      !i &&
                        r.a.createElement(
                          "div",
                          { className: "login-submit-container" },
                          r.a.createElement(
                            "button",
                            {
                              type: "submit",
                              className: "button submit",
                              "aria-label": z.t("login"),
                            },
                            z.t("login"),
                          ),
                          r.a.createElement(
                            "div",
                            { className: "copyright-and-version" },
                            r.a.createElement(
                              "span",
                              null,
                              z.t("copyright"),
                              " | ",
                              z.t("app_version"),
                            ),
                          ),
                        ),
                    ),
                  ),
                ),
                m && r.a.createElement(Ma, null),
                T && r.a.createElement(Ha, null),
              ),
            ),
          );
        }),
        rn = (a(939), a(84)),
        on = a.n(rn),
        cn = a(490),
        sn = Object(m.b)(cn.a),
        ln = sn(function (e) {
          var t = e.titleArea,
            a = e.titleAreaCount,
            o = e.singleLineHeader
              ? "page-header-title single-line-header"
              : "page-header-title";
          return r.a.createElement(
            n.Fragment,
            null,
            t &&
              r.a.createElement(
                "div",
                { className: o },
                r.a.createElement("h1", null, t),
                a > 0 &&
                  a < 100 &&
                  r.a.createElement("span", { className: "items-count" }, a),
                a > 0 &&
                  a > 99 &&
                  r.a.createElement(
                    "span",
                    { className: "items-count border-none" },
                    "(",
                    a,
                    ")",
                  ),
              ),
          );
        }),
        un = a(491),
        dn = a.n(un),
        mn = function (e, t, a, n) {
          var r = dt(n),
            o = mt(n);
          return !e && !a && (-1 !== r || -1 === o) && void 0 === t;
        },
        _n = function (e, t, a, n, r) {
          var o = dt(r),
            i = mt(r);
          return !e && !a && !n && (-1 !== o || -1 === i) && !!t;
        },
        pn = function (e, t, a, n, r) {
          var o = ke(n),
            i = dt(n),
            c = mt(n);
          return (
            !e && !a && !r && (-1 !== i || -1 === c) && -1 === o && void 0 === t
          );
        },
        fn = Object(s.b)(
          function (e) {
            var t = e.settings,
              a = t.startingProduct,
              n = t.currentProduct,
              r = n || a,
              o = e.data.products,
              i = o.length,
              c = o.find(function (e) {
                return e.value === r;
              });
            c || (c = o[0]);
            var s = e.form,
              l = s.newParkingActions_license_plate,
              u = s.newParkingActions_name_favorite,
              d = e.parkingActions,
              m = d.startDateTime,
              _ = d.endDateTime,
              p = l && l.value,
              f = u && u.value,
              g = e.main.allProductsIsBlocked;
            return {
              showAuthorizations: c ? c.showAuthorizations : "",
              byGrant: c ? c.byGrant : "",
              productIsSwitch: c ? c.productIsSwitch : "",
              productIsTemporary: c ? c.productIsTemporary : "",
              startDateTime: m,
              endDateTime: _,
              license_plate_value: p,
              favorite_value: f,
              options: c ? c.options : "",
              selectedProduct: c || null,
              allProductsIsBlocked: g,
              productsLength: i,
            };
          },
          {
            onMenuButtonPressed: ie,
            onLogoutButtonPressed: function () {
              return function (e, t) {
                e(function (e, t) {
                  var a = H.getItem("usersData")
                      ? JSON.parse(H.getItem("usersData"))
                      : {},
                    n = H.getItem("email");
                  (null === n &&
                    (n =
                      void 0 === t().form.login_email
                        ? String(t().settings.email)
                        : String(t().form.login_email.value)),
                    (a[n].rememberMe = "no"),
                    H.setItem("usersData", JSON.stringify(a)),
                    e(ue("no")));
                });
                var a = H.getItem("usersData"),
                  n = H.getItem("lastUsedTheme");
                e(se("default"));
                var r = H.getItem("locale");
                (H.clear(),
                  H.setItem("usersData", a),
                  H.setItem("locale", r),
                  H.setItem("lastUsedTheme", n),
                  e({ type: "CLOSE_MENU" }),
                  e(pa()));
              };
            },
            onInitializeStartDateTime: Xe,
            onClearStartEndDateTime: et,
            onFormFieldClearValue: B,
            showModalMessage: de,
            showAbout2Park: function () {
              return { type: "SHOW_MODAL_ABOUT2PARK" };
            },
          },
        ),
        gn = Object(m.b)(fn),
        vn = gn(function (e) {
          var t = e.showMenu,
            a = e.onMenuButtonPressed,
            o = e.onLogoutButtonPressed,
            i = e.showAuthorizations,
            c = (e.currentProduct, e.byGrant),
            s = e.startDateTime,
            l = e.endDateTime,
            u = e.license_plate_value,
            d = e.favorite_value,
            m = e.onInitializeStartDateTime,
            p = e.onClearStartEndDateTime,
            f = e.onFormFieldClearValue,
            g = e.productIsSwitch,
            v = e.productIsTemporary,
            h = (e.showModalMessage, e.showAbout2Park),
            E = e.options,
            b = e.selectedProduct,
            A = e.allProductsIsBlocked,
            T = e.productsLength,
            O = [
              (function (e, t, a, n, r) {
                var o = dt(r),
                  i = mt(r);
                return e
                  ? [
                      "/switch-license-plate",
                      "activate_license_plate",
                      "ParkingActions",
                    ]
                  : t
                    ? [
                        "/parking-actions",
                        "temporary_vehicle",
                        "ParkingActions",
                      ]
                    : -1 === o && -1 !== i
                      ? ["/activations", "activations", "ParkingActions"]
                      : !a || n
                        ? []
                        : [
                            "/parking-actions",
                            "parking_actions",
                            "ParkingActions",
                          ];
              })(g, v, b, A, E),
              pn(g, c, v, E, A) ? ["/top-up", "top_up", "TopUp"] : [],
              mn(g, c, A, E) ? ["/favorites", "favorites", "Favorites"] : [],
              _n(g, i, v, A, E)
                ? ["/authorizations", "authorizations", "Authorizations"]
                : [],
              b ? ["/history", "history", "History"] : [],
            ],
            N = function (e) {
              (u && f("newParkingActions_license_plate"),
                d && f("newParkingActions_name_favorite"),
                (s || l) && p(),
                "/parking-actions-form/create" === e && m());
            };
          return r.a.createElement(
            n.Fragment,
            null,
            t &&
              r.a.createElement(
                dn.a,
                null,
                r.a.createElement(
                  "div",
                  {
                    id: "main-menu-overlay",
                    className: "active",
                    onClick: function () {
                      return a();
                    },
                  },
                  r.a.createElement(
                    "div",
                    {
                      id: "main-menu",
                      onClick: function (e) {
                        return e.stopPropagation();
                      },
                    },
                    r.a.createElement("button", {
                      className: "menu-button close",
                      onClick: function () {
                        return a();
                      },
                      "aria-label": z.t("close_menu"),
                    }),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "ul",
                        null,
                        O.map(function (e, t) {
                          var n = e[1] && 0 !== e[1].length ? e[1] : "";
                          if (e && e[0])
                            return r.a.createElement(
                              "li",
                              { key: t },
                              r.a.createElement(
                                _.a,
                                {
                                  className: n,
                                  to: e[0],
                                  onClick: function () {
                                    (N(e[0]), a(e[0]));
                                  },
                                },
                                z.t(e[1]),
                              ),
                            );
                        }),
                        b &&
                          !A &&
                          r.a.createElement(
                            n.Fragment,
                            null,
                            r.a.createElement("span", null),
                            r.a.createElement(
                              "li",
                              null,
                              r.a.createElement(
                                _.a,
                                {
                                  className: "all-actions",
                                  to: "/all-actions",
                                  onClick: function () {
                                    (N("/all-actions"), a());
                                  },
                                },
                                z.t("all_actions"),
                              ),
                            ),
                          ),
                        (b || A) &&
                          T > 0 &&
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              _.a,
                              {
                                className: "other-products",
                                to: "/organizations",
                                onClick: function () {
                                  (N("/organizations"), a("/organizations"));
                                },
                              },
                              z.t("organizations_menu"),
                            ),
                          ),
                        (!b || A) && r.a.createElement("span", null),
                        r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            _.a,
                            {
                              className: "settings",
                              to: "/settings",
                              onClick: function () {
                                (N("/settings"), a("/other-products"));
                              },
                            },
                            z.t("settings"),
                          ),
                        ),
                        r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            _.a,
                            {
                              className: "logout",
                              to: "/",
                              onClick: function () {
                                return o();
                              },
                            },
                            z.t("logout"),
                          ),
                        ),
                        r.a.createElement(
                          "li",
                          null,
                          r.a.createElement(
                            "button",
                            {
                              className: "about",
                              onClick: function () {
                                return h();
                              },
                            },
                            z.t("about"),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
          );
        }),
        hn = function (e) {
          var t = e.availableActions;
          return r.a.createElement(
            "div",
            { className: "avail-actions" },
            r.a.createElement(
              "div",
              { className: "balance-label" },
              z.t("max_act").toUpperCase(),
            ),
            r.a.createElement("div", { className: "amount" }, t),
          );
        },
        En = Object(s.b)(
          function (e) {
            return { locale: e.settings.locale, currentTheme: e.ui.theme };
          },
          {
            onThemeChanged: se,
            onChangeLanguage: function (e) {
              return function (t) {
                var a = H.getItem("email");
                ((z.locale = e), H.setItem("locale", e));
                var n = H.getItem("usersData")
                  ? JSON.parse(H.getItem("usersData"))
                  : {};
                (void 0 === n[a] && (n[a] = G),
                  (n[a].locale = e),
                  H.setItem("usersData", JSON.stringify(n)),
                  t(J(e)));
              };
            },
            changeLanguageForProductName: function (e) {
              return function (t, a) {
                var n = a().data.products;
                y()
                  .getCategories(e)
                  .then(function (e) {
                    if ("OK" === e.status.code.major) {
                      var a = n,
                        r = e.data.categories;
                      (t(Dt(r || [])),
                        r &&
                          r.length > 0 &&
                          a &&
                          a.length > 0 &&
                          ((a = a.map(function (e) {
                            var t = Object.assign({}, e),
                              a = r.filter(function (t) {
                                return t.cty_id === e.cityId;
                              });
                            return (
                              a.length > 0 &&
                                a.forEach(function (a) {
                                  var n = a.cty_products.find(function (t) {
                                    return t.pdt_id === e.value;
                                  });
                                  if (n) {
                                    var r = n.pdt_name.split(" - ")[0],
                                      o = n.pdt_name.split(" - ")[1];
                                    ((t.city = a.cty_name),
                                      (t.cityDescription = a.cty_description),
                                      (t.name = r.trim()),
                                      (t.title = o && o.trim()),
                                      (t.productDescription =
                                        n.pdt_description));
                                  }
                                }),
                              t
                            );
                          })),
                          t(Ee(a))));
                    }
                  })
                  .catch(function () {});
              };
            },
          },
        ),
        bn = Object(m.b)(En),
        An = bn(function (e) {
          var t = e.onThemeChanged,
            a = e.onChangeLanguage,
            o = e.changeLanguageForProductName,
            i = e.locale,
            c = Object(n.useState)(!1),
            s = Object(xa.a)(c, 2),
            l = s[0],
            u = s[1],
            d = Object(n.useState)(!1),
            m = Object(xa.a)(d, 2),
            _ = m[0],
            p = m[1],
            f = function (e) {
              (13 !== e.keyCode && "Enter" !== e.key) || g();
            },
            g = function () {
              p(!_);
            },
            v = function () {
              u(!l);
            },
            h = function (e) {
              (p(!1), a(e), o(e));
            };
          return r.a.createElement(
            "div",
            {
              className:
                "municipality-product-area-theme-and-language-container",
            },
            r.a.createElement(
              Ya.a,
              {
                isOpen: l,
                onClickOutside: function () {
                  return u(!1);
                },
                position: ["bottom"],
                content: r.a.createElement(Wa, {
                  changeTheme: function (e) {
                    (u(!1), t(e));
                  },
                }),
                containerStyle: { zIndex: 999 },
                align: "start",
              },
              r.a.createElement(
                "span",
                {
                  tabIndex: "1",
                  onKeyDown: function (e) {
                    (13 !== e.keyCode && "Enter" !== e.key) || v();
                  },
                  onClick: function () {
                    return v();
                  },
                },
                z.t("contrast"),
              ),
            ),
            "nl_NL" === i &&
              r.a.createElement(
                Ya.a,
                {
                  isOpen: _,
                  position: ["bottom"],
                  onClickOutside: function () {
                    return p(!1);
                  },
                  nudgedLeft: "50",
                  content: r.a.createElement(Ja, { changeLocale: h }),
                  align: "end",
                },
                r.a.createElement(
                  "span",
                  {
                    tabIndex: "2",
                    onKeyDown: f,
                    onClick: function () {
                      return g();
                    },
                  },
                  z.t("language"),
                ),
              ),
            "nl_NL" !== i &&
              r.a.createElement(
                Ya.a,
                {
                  isOpen: _,
                  position: ["bottom"],
                  onClickOutside: function () {
                    return p(!1);
                  },
                  nudgedLeft: "50",
                  content: r.a.createElement(Ja, { changeLocale: h }),
                  align: "end",
                },
                r.a.createElement(
                  "span",
                  {
                    tabIndex: "2",
                    onKeyDown: f,
                    onClick: function () {
                      return g();
                    },
                  },
                  z.t("language"),
                ),
              ),
          );
        }),
        Tn = function (e) {
          var t = "",
            a = "",
            n = "",
            r = "",
            o = "";
          if (
            (e &&
              "" !== e &&
              ((t = e[0].prr_value ? e[0].prr_value : ""),
              (a = e[1].prr_value ? e[1].prr_value : ""),
              (n = e[2].prr_value ? e[2].prr_value : "")),
            "TIMES" === a)
          ) {
            var i =
              1 === Math.floor(t) ? z.t("action_left") : z.t("actions_left");
            return "".concat(Math.floor(t), " ").concat(i);
          }
          if ("MINUTE" === a) {
            var c = t.split(".");
            return (
              (r = Math.trunc(c[0] / 60)),
              (o = c[0] % 60),
              "".concat(r).concat(z.t("hours_abbreviated"), " ").concat(o, "m")
            );
          }
          if ("EURO" === a)
            return (
              n +
              " " +
              t
                .split("")
                .map(function (e, a) {
                  return a ===
                    ((t.split(".")[0].length % 3) - 1 === -1
                      ? 2
                      : (t.split(".")[0].length % 3) - 1) &&
                    t.split(".")[0].length > 3
                    ? e + "."
                    : "." === e
                      ? ","
                      : e;
                })
                .join("")
            );
        },
        On = function (e) {
          var t = e.balance,
            a = (function (e) {
              return e ? e.search(/NO_BALANCE/i) : -1;
            })(e.options),
            o = Tn(t),
            i = "";
          return (
            t && "" !== t && (i = t[1].prr_value ? t[1].prr_value : ""),
            r.a.createElement(
              "div",
              { className: "balance" },
              -1 === a &&
                t &&
                "" !== t &&
                r.a.createElement(
                  "div",
                  { className: "balance-container" },
                  r.a.createElement(
                    "div",
                    { className: "balance-label" },
                    z.t("saldo").toUpperCase(),
                  ),
                  r.a.createElement(
                    n.Fragment,
                    null,
                    "TIMES" !== i &&
                      r.a.createElement("div", { className: "amount" }, o),
                    "TIMES" === i &&
                      r.a.createElement(
                        n.Fragment,
                        null,
                        r.a.createElement(
                          "div",
                          { className: "amount" },
                          o.split(" ")[0],
                        ),
                        r.a.createElement(
                          "div",
                          { className: "actions-left" },
                          1 === o.split(" ")[0] && z.t("action_left"),
                          1 !== o.split(" ")[0] && z.t("actions_left"),
                        ),
                      ),
                  ),
                ),
            )
          );
        },
        Nn = Object(s.b)(
          function (e) {
            var t = e.settings,
              a = t.startingProduct,
              n = t.currentProduct,
              r = n || a,
              o = e.settings.name,
              i = e.data.products,
              c = e.main.allProductsIsBlocked,
              s = i.find(function (e) {
                return e.value === r;
              });
            return (
              s || (s = i[0]),
              {
                showMenu: e.ui.showMenu,
                city: s ? s.city : "",
                product: s ? s.name : "",
                productDescription: s ? s.title : "",
                balance: s && s.balance ? s.balance.ble_parameters : "",
                validFrom: s ? s.validFrom : "",
                validTo: s ? s.validTo : "",
                logoFolder: s ? s.logoFolder : "",
                productOptions: s && s.options ? s.options : void 0,
                availableActions: e.main.availableActions,
                username: o,
                allProductsIsBlocked: c,
                locale: e.settings.locale,
              }
            );
          },
          { onMenuButtonPressed: ie },
        ),
        yn = Object(m.b)(Nn, cn.a),
        In = yn(function (e) {
          var t = e.onMenuButtonPressed,
            a = e.showMenu,
            o = e.city,
            i = e.product,
            c = e.productDescription,
            s = (e.username, e.balance),
            l = (e.validFrom, e.validTo, e.logoFolder),
            u = e.showBackButton,
            d = e.titleArea,
            m = e.titleAreaCount,
            _ = e.titleAreaClick,
            p = e.titleAreaBackPath,
            f = e.history,
            g = e.showProductInformation,
            v = e.nonContextCityFolderName,
            h = e.productOptions,
            E = e.availableActions,
            b = e.singleLineHeader,
            A = e.allProductsIsBlocked,
            T = Object(n.useState)(),
            N = Object(xa.a)(T, 2),
            y = N[0],
            I = N[1];
          Object(n.useEffect)(function () {
            (function () {
              var e = O().withConfig({ baseURL: "" });
              return {
                getVersion: function () {
                  return e.get({ url: "/version.json" });
                },
              };
            })()
              .getVersion()
              .then(function (e) {
                var t = e.env;
                t && I(t);
              });
          }, []);
          var C = "/city-logos/default/logo.png",
            S = "/city-logos/" + l + "/logo.png",
            w = p || "/";
          return r.a.createElement(
            "header",
            null,
            r.a.createElement(
              "div",
              { className: "page-municipality-product-area" },
              r.a.createElement(An, null),
              r.a.createElement(
                "div",
                { className: "page-municipality-product-row" },
                r.a.createElement(
                  "div",
                  { className: "main-menu-block" },
                  r.a.createElement(
                    "div",
                    { className: "main-menu-container" },
                    !u &&
                      r.a.createElement(
                        "button",
                        {
                          className: "menu-button",
                          tabIndex: 3,
                          onClick: function () {
                            return t();
                          },
                          "aria-label": z.t("menu"),
                        },
                        y &&
                          "acc" === y.toLocaleLowerCase() &&
                          r.a.createElement(
                            "span",
                            { className: "text-menu top" },
                            y.toUpperCase(),
                          ),
                        r.a.createElement(
                          "span",
                          { className: "text-menu" },
                          "MENU",
                        ),
                      ),
                    u &&
                      r.a.createElement("button", {
                        className: "back-button",
                        tabIndex: 3,
                        onClick: function () {
                          _ ? _() : f.push({ pathname: w });
                        },
                        "aria-label": z.t("back"),
                      }),
                    r.a.createElement(vn, { showMenu: a }),
                  ),
                  g &&
                    !A &&
                    r.a.createElement(
                      "div",
                      { className: "header-city-block" },
                      r.a.createElement(on.a, {
                        src: S,
                        fallbackImage: C,
                        initialImage: C,
                        alt: o + " logo",
                      }),
                    ),
                  v &&
                    r.a.createElement(
                      "div",
                      { className: "header-city-block" },
                      r.a.createElement(on.a, {
                        src: "".concat("/city-logos/").concat(v, "/logo.png"),
                        fallbackImage: C,
                        initialImage: C,
                        alt: o + " logo",
                      }),
                    ),
                ),
                r.a.createElement(
                  "div",
                  { className: "product-city-block" },
                  g &&
                    r.a.createElement(
                      n.Fragment,
                      null,
                      !A &&
                        r.a.createElement(
                          "div",
                          { className: "product-name" },
                          i,
                        ),
                      r.a.createElement(
                        "div",
                        { className: "product-description" },
                        c,
                      ),
                    ),
                  r.a.createElement(ln, {
                    titleArea: d,
                    titleAreaCount: m,
                    singleLineHeader: b,
                  }),
                ),
                g &&
                  r.a.createElement(
                    "div",
                    null,
                    !Pe(h, "MAX_ACT") &&
                      g &&
                      r.a.createElement(On, { balance: s, options: h }),
                    Pe(h, "MAX_ACT") &&
                      g &&
                      null !== E &&
                      void 0 !== E &&
                      r.a.createElement(hn, { availableActions: E }),
                  ),
                !g && r.a.createElement("div", { style: { width: "50px" } }),
              ),
            ),
          );
        }),
        Cn = function (e) {
          var t = e.actionArea;
          return r.a.createElement("div", { className: "page-action-area" }, t);
        },
        Sn = Object(Ra.a)(function (e) {
          var t = e.history,
            a = e.titleArea,
            n = e.titleAreaClick,
            o = e.showBackButton;
          return r.a.createElement(
            "header",
            null,
            r.a.createElement(
              "div",
              { className: "page-municipality-product-area" },
              r.a.createElement(en, null),
              r.a.createElement(
                "div",
                { className: "page-municipality-product-row header-container" },
                r.a.createElement(
                  "div",
                  { className: "main-menu-block" },
                  r.a.createElement(
                    "div",
                    { className: "main-menu-container" },
                    o &&
                      r.a.createElement("button", {
                        className: "back-button",
                        onClick: function () {
                          n ? n() : t.push("/");
                        },
                        "aria-label": z.t("back"),
                      }),
                  ),
                ),
                r.a.createElement(
                  "div",
                  { className: "product-city-block" },
                  r.a.createElement(ln, { titleArea: a }),
                ),
                r.a.createElement("div", null),
              ),
            ),
          );
        }),
        wn = Object(s.b)(null, {
          hideAbout2Park: function () {
            return { type: "HIDE_MODAL_ABOUT2PARK" };
          },
        }),
        kn = Object(m.b)(wn),
        Pn = kn(function (e) {
          var t = e.hideAbout2Park;
          return r.a.createElement(
            "div",
            { className: "modal-message-overlay" },
            r.a.createElement(
              "div",
              { className: "modal-message-container" },
              r.a.createElement(
                "div",
                { className: "modal-message" },
                r.a.createElement(
                  "div",
                  { className: "modal-logo" },
                  r.a.createElement("img", { src: v.a, alt: "Parkapp3 logo" }),
                ),
                r.a.createElement("p", null, z.t("app_version")),
                r.a.createElement(
                  "p",
                  null,
                  z.t("copyright"),
                  " | ",
                  z.t("all_rights_reserved"),
                ),
                r.a.createElement(
                  "div",
                  { className: "modal-buttons-wrap" },
                  r.a.createElement(
                    "button",
                    {
                      className: "modal-dialog-ok about2Park",
                      onClick: function () {
                        return t();
                      },
                      autoFocus: !0,
                    },
                    z.t("ok"),
                  ),
                ),
              ),
            ),
          );
        }),
        Dn = function (e, t) {
          var a = e && "" !== e ? Tt(e) : void 0,
            o = t && "" !== t ? Tt(t) : void 0;
          return (
            !(!a && !o) &&
            r.a.createElement(
              n.Fragment,
              null,
              r.a.createElement(
                "span",
                null,
                a && z.t("form"),
                " ",
                a && a,
                " ",
              ),
              r.a.createElement(
                "span",
                null,
                o && z.t("until_lowercase"),
                " ",
                o && o,
                " ",
              ),
            )
          );
        },
        jn = function (e, t) {
          var a = e && "" !== e ? Ot(e) : void 0,
            o = t && "" !== t ? Ot(t) : void 0;
          return (
            !(!a && !o) &&
            r.a.createElement(
              n.Fragment,
              null,
              r.a.createElement(
                "span",
                null,
                a && z.t("form"),
                " ",
                a && a,
                " ",
              ),
              r.a.createElement(
                "span",
                null,
                o && z.t("until_lowercase"),
                " ",
                o && o,
                " ",
              ),
            )
          );
        },
        Ln = function (e) {
          return "true" === e.isBlocked && !e.byGrant;
        },
        Mn = function (e) {
          return !(!e.byGrant || "true" !== e.byGrant.is_blocked);
        },
        Rn = function (e) {
          return !(
            !e.productIsSwitch ||
            !1 !== e.productIsSwitchLicensePlateActive ||
            "false" !== e.isBlocked ||
            ht(e)
          );
        },
        Fn = function (e, t, a, n) {
          var o = z.t("parking_actions_lowercase"),
            i = z.t("running_lowercase"),
            c = z.t("planned_lowercase"),
            s = e || 0,
            l = t || 0;
          return (
            -1 === dt(n) &&
              -1 !== mt(n) &&
              ((o = z.t("activations").toLowerCase() + ":"),
              (i = " " + z.t("active").toLowerCase()),
              (c = " " + z.t("inactive").toLowerCase()),
              (l = a || 0)),
            (s > 0 || l > 0) &&
              r.a.createElement(
                "p",
                { className: "count-running-and-scheduled-actions" },
                o,
                " ",
                s > 0 ? s + i : "",
                s > 0 && l > 0 ? "," : "",
                " ",
                l > 0 ? +l + c : "",
              )
          );
        },
        Un = function (e, t, a) {
          var n;
          if (e) {
            var r = e.grt_parameters,
              o = r
                ? r.find(function (e) {
                    return "VALID_FROM" === e.prr_label;
                  })
                : void 0,
              i = r
                ? r.find(function (e) {
                    return "VALID_UNTIL" === e.prr_label;
                  })
                : void 0,
              c = o ? o.prr_value : void 0,
              s = i ? i.prr_value : void 0;
            n = jn(c, s);
          } else n = Dn(t, a);
          return n;
        },
        Hn = function (e) {
          var t = e.find(function (e) {
              return "AMOUNT" === e.prr_label;
            }),
            a = e.find(function (e) {
              return "BLE_THRESHOLD" === e.prr_label;
            });
          if (a && t && 0 !== Number(a.prr_value)) {
            var n = Number(a.prr_value) > Number(t.prr_value);
            return r.a.createElement("span", {
              className: "icon-balance-warning ".concat(n ? "red" : "blue"),
            });
          }
          return r.a.createElement("span", {
            className: "icon-balance-warning",
          });
        },
        xn = Object(s.b)(function (e) {
          var t = e.form.tresholdActionsLeft;
          return { tresholdActionsLeftValue: t ? t.value : "" };
        }, null),
        zn = Object(m.b)(xn),
        Yn = zn(function (e) {
          var t = e.tresholdActionsLeftValue;
          return r.a.createElement(
            "div",
            { className: "actions-left-field" },
            r.a.createElement(
              "div",
              { className: "wrapper-fields" },
              r.a.createElement("label", null, z.t("actions_left")),
              r.a.createElement(Ia, {
                name: "tresholdActionsLeft",
                value: t,
                units: !0,
                areaLabel: z.t("actions_left"),
                autofocus: !0,
              }),
            ),
          );
        }),
        Gn = Object(s.b)(function (e) {
          var t = e.form.tresholdMoney;
          return { tresholdMoneyValue: t ? t.value : "" };
        }, null),
        Vn = Object(m.b)(Gn),
        Bn = Vn(function (e) {
          var t = e.tresholdMoneyValue;
          return r.a.createElement(
            "div",
            { className: "money-field" },
            r.a.createElement(
              "div",
              { className: "wrapper-fields" },
              r.a.createElement("label", null, "\u20ac"),
              r.a.createElement(Ia, {
                name: "tresholdMoney",
                value: t,
                enterFloat: !0,
                placeholder: "1,50",
                areaLabel: "threshold-money",
                autofocus: !0,
              }),
            ),
          );
        }),
        Wn = Object(s.b)(function (e) {
          var t = e.form,
            a = t.tresholdHours,
            n = t.tresholdMinutes;
          return {
            tresholdHoursValue: a ? a.value : "",
            tresholdMinutesValue: n ? n.value : "",
          };
        }),
        Kn = Object(m.b)(Wn),
        Zn = Kn(function (e) {
          var t = e.tresholdHoursValue,
            a = e.tresholdMinutesValue;
          return r.a.createElement(
            "div",
            { className: "time-fields" },
            r.a.createElement(
              "div",
              { className: "wrapper-fields" },
              r.a.createElement(Ia, {
                name: "tresholdHours",
                value: t,
                units: !0,
                placeholder: "1",
                areaLabel: z.t("hours_abbreviated"),
                autofocus: !0,
              }),
              r.a.createElement("label", null, z.t("hours_abbreviated")),
            ),
            r.a.createElement(
              "div",
              { className: "wrapper-fields" },
              r.a.createElement(Ia, {
                name: "tresholdMinutes",
                value: a,
                units: !0,
                areaLabel: z.t("minutes"),
              }),
              r.a.createElement("label", null, "m"),
            ),
          );
        }),
        Qn = function (e) {
          var t = e.split(".");
          return { hours: Math.trunc(t[0] / 60), minutes: t[0] % 60 };
        },
        Jn = Object(s.b)(
          function (e) {
            var t = e.form,
              a = t.tresholdActionsLeft,
              n = t.tresholdMoney,
              r = t.tresholdHours,
              o = t.tresholdMinutes,
              i = e.ui.productIdForPopupSetBalanceWarning,
              c = e.settings.locale,
              s = (void 0 !== e.data.products ? e.data.products : []).find(
                function (e) {
                  return e.value === i;
                },
              ),
              l =
                s.balance && s.balance.ble_parameters
                  ? s.balance.ble_parameters
                  : void 0;
            return {
              selectedProduct: s,
              locale: c,
              thresholdValue: (function (e, t, a, n, r) {
                if (r) {
                  var o = r.find(function (e) {
                    return "CURRENCY_CODE" === e.prr_label;
                  });
                  if (o) {
                    if ("TIMES" === o.prr_value) return e ? e.value : "";
                    if ("MINUTE" === o.prr_value) {
                      var i = a ? a.value : "",
                        c = n ? n.value : "";
                      return De(i, c);
                    }
                    if ("EURO" === o.prr_value) return t ? t.value : "";
                  }
                }
              })(a, n, r, o, l),
              disabledBtn: (function (e, t, a, n, r) {
                if (r) {
                  var o = r.find(function (e) {
                    return "CURRENCY_CODE" === e.prr_label;
                  });
                  if (o) {
                    if ("TIMES" === o.prr_value) return !e || "" === e.value;
                    if ("MINUTE" === o.prr_value) {
                      var i = !a || "" === a.value,
                        c = !n || "" === n.value;
                      return !(!i || !c);
                    }
                    if ("EURO" === o.prr_value) return !t || "" === t.value;
                  }
                }
              })(a, n, r, o, l),
            };
          },
          {
            hidePopupSetBalanceWarning: function () {
              return { type: "HIDE_POPUP_SET_BALANCE_WARNING" };
            },
            onFormFieldClearValue: B,
            setThreshold: function (e, t, a, n) {
              return function (r, o) {
                var i = o().data.products,
                  c = void 0 !== i ? i : [],
                  s = n && "" !== n ? n.replace(",", ".") : "";
                (r({ type: "OTHER_PRODUCTS_WILL_UNMOUNT" }),
                  I()
                    .setThreshold(s, a)
                    .then(function (a) {
                      "OK" === a.status.code.major
                        ? (r({ type: "SET_THRESHOLD_SUCCESS" }), r(ft(c, e, t)))
                        : "FAIL" === a.status.code.major &&
                            "SESSION_TIMEOUT" === a.status.code.minor
                          ? r(ha(e))
                          : (f.toast.error(a.status.message),
                            r({ type: "SET_THRESHOLD_FAIL" }),
                            r({ type: "FINISH_FETCH" }));
                    })
                    .catch(function (t) {
                      (r(ha(e)),
                        r({ type: "SET_THRESHOLD_FAIL" }),
                        r({ type: "FINISH_FETCH" }));
                    }));
              };
            },
            onInitializeFormField: W,
          },
        ),
        qn = Object(m.b)(Jn, Ra.a),
        Xn = qn(function (e) {
          var t = e.hidePopupSetBalanceWarning,
            a = e.selectedProduct,
            o = e.thresholdValue,
            i = e.onFormFieldClearValue,
            c = e.setThreshold,
            s = e.history,
            l = e.match,
            u = e.onInitializeFormField,
            d = e.disabledBtn,
            m = a.name,
            _ = a.title,
            p = a.balance,
            f = a.byGrant,
            g = a.validFrom,
            v = a.validTo,
            h = a.value;
          Object(n.useEffect)(
            function () {
              if (p && p.ble_parameters.length > 0 && p) {
                var e =
                    p.ble_parameters[1] && p.ble_parameters[1].prr_value
                      ? p.ble_parameters[1].prr_value
                      : "",
                  t =
                    p.ble_parameters[4] && p.ble_parameters[4].prr_value
                      ? p.ble_parameters[4].prr_value
                      : "";
                if ("TIMES" === e) {
                  var a = "" !== t && 0 !== Number(t) ? Number(t) : "1";
                  u("tresholdActionsLeft", a);
                }
                if ("MINUTE" === e) {
                  var n = "" !== t && 0 !== Number(t) ? Qn(t).hours : "1",
                    r = "" !== t && 0 !== Number(t) ? Qn(t).minutes : "30";
                  (u("tresholdHours", n), u("tresholdMinutes", r));
                }
                if ("EURO" === e) {
                  var o =
                    "" !== t && 0 !== Number(t)
                      ? Number(t).toFixed(2).toString()
                      : "1.50";
                  ((o = o.replace(".", ",")), u("tresholdMoney", o));
                }
              }
              return function () {
                (i("tresholdActionsLeft"),
                  i("tresholdMoney"),
                  i("tresholdHours"),
                  i("tresholdMinutes"));
              };
            },
            [i, p, u],
          );
          var E = p && p.ble_parameters ? Tn(p.ble_parameters) : "",
            b = Un(f, g, v),
            A =
              p && p.ble_parameters
                ? (function (e) {
                    var t = e.find(function (e) {
                      return "CURRENCY_CODE" === e.prr_label;
                    });
                    if (t) {
                      if ("TIMES" === t.prr_value)
                        return r.a.createElement(Yn, null);
                      if ("MINUTE" === t.prr_value)
                        return r.a.createElement(Zn, null);
                      if ("EURO" === t.prr_value)
                        return r.a.createElement(Bn, null);
                    }
                  })(p.ble_parameters)
                : void 0;
          return r.a.createElement(
            "div",
            { className: "modal-message-overlay" },
            r.a.createElement(
              "div",
              { className: "modal-message-container" },
              r.a.createElement(
                "div",
                { className: "modal-dialog" },
                r.a.createElement(
                  "div",
                  { className: "popup-set-balance-warning-container" },
                  r.a.createElement(
                    "div",
                    { className: "balance_alert-info" },
                    z.t("set_balance_alert"),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "parking-info" },
                    r.a.createElement(
                      "div",
                      { className: "parkapp-item" },
                      m && r.a.createElement("p", null, m),
                      _ && r.a.createElement("p", null, _),
                      b && r.a.createElement("p", null, z.t("valid"), " ", b),
                    ),
                  ),
                  A &&
                    r.a.createElement(
                      "div",
                      { className: "treshold-balance-container" },
                      r.a.createElement(
                        "p",
                        null,
                        z.t("current_balance"),
                        ": ",
                        r.a.createElement(
                          "span",
                          { className: "current-balance" },
                          E,
                        ),
                      ),
                      r.a.createElement(
                        "div",
                        { className: "treshold-fields" },
                        r.a.createElement(
                          "span",
                          { className: "treshold-label" },
                          z.t("warn_if_balance_below"),
                          ":",
                        ),
                        A,
                      ),
                    ),
                ),
                r.a.createElement(
                  "div",
                  {
                    className:
                      "modal-buttons-wrap popup-set-balance-warning-buttons",
                  },
                  r.a.createElement(
                    "button",
                    {
                      className: d ? "disabled" : "",
                      disabled: d,
                      tabIndex: "0",
                      onClick: function () {
                        (c(s, l, h, o), t());
                      },
                    },
                    z.t("set_balance_waning"),
                  ),
                  r.a.createElement(
                    "button",
                    {
                      tabIndex: "0",
                      onClick: function () {
                        t();
                      },
                    },
                    z.t("cancel"),
                  ),
                ),
              ),
            ),
          );
        }),
        $n = Object(s.b)(
          function (e) {
            var t = e.ui,
              a = t.theme,
              n = t.themeTemporary,
              r = t.showContextMenu,
              o = t.showModalMessage,
              i = t.showModalDialog,
              c = t.showModalAbout2Park,
              s = t.visiblePopupSetBalanceWarning,
              l = t.activeTab;
            return {
              theme: a,
              themeTemporary: n,
              showContextMenu: r,
              locale: e.settings.locale,
              showModalMessage: o,
              showModalDialog: i,
              showModalAbout2Park: c,
              visiblePopupSetBalanceWarning: s,
              activeTab: l,
            };
          },
          {
            closeContextMenu: ae,
            onScrollEnd: function (e) {
              return function (t, a) {
                a().ui.scrollEnd !== e &&
                  t(
                    (function (e) {
                      return { type: "SET_SCROLL_END", scrollEnd: e };
                    })(e),
                  );
              };
            },
          },
        ),
        er = Object(m.b)($n),
        tr = er(function (e) {
          var t = e.municipalityProductArea,
            a = e.municipalityHeader,
            o = void 0 !== a && a,
            i = e.bodyArea,
            c = e.titleArea,
            s = e.actionArea,
            l = e.titleAreaClick,
            u = e.titleAreaCount,
            d = e.titleAreaBackPath,
            m = e.tabsArea,
            _ = e.screenClass,
            g = e.theme,
            v = e.themeTemporary,
            h = e.locale,
            E = e.showContextMenu,
            b = e.closeContextMenu,
            A = e.showBackButton,
            T = void 0 !== A && A,
            O = e.showProductInformation,
            N = void 0 === O || O,
            y = e.nonContextCityFolderName,
            I = e.handleRef,
            C = e.showModalMessage,
            S = e.showModalDialog,
            w = e.singleLineHeader,
            k = e.showModalAbout2Park,
            P = e.visiblePopupSetBalanceWarning,
            D = e.onScrollEnd,
            j = e.activeTab,
            L = e.pageList,
            M = void 0 !== L && L,
            R = v || g,
            F = M ? "screen-container list-container " : "screen-container ",
            U = _ ? F + _ + " theme-" + R : F + "theme-" + R,
            H = M ? "site-content site-list-content" : "site-content",
            x = h ? h.split("_").slice(0, -1) : "nl",
            z = Object(n.useRef)(null);
          (Object(n.useEffect)(
            function () {
              D(!1);
            },
            [D],
          ),
            Object(n.useEffect)(
              function () {
                null !== z && ((z.current.scrollTop = 0), D(!1));
              },
              [j, D],
            ));
          return r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(p.Helmet, { htmlAttributes: { lang: x } }),
            E &&
              r.a.createElement("div", {
                className: "context-menu-background theme-".concat(R),
                onClick: function () {
                  return b();
                },
              }),
            r.a.createElement(
              "div",
              { className: U },
              r.a.createElement(
                "div",
                { className: "container" },
                !1 !== t &&
                  r.a.createElement(In, {
                    showBackButton: T,
                    showProductInformation: N,
                    nonContextCityFolderName: y,
                    titleAreaClick: l,
                    titleAreaBackPath: d,
                    titleArea: c,
                    titleAreaCount: u,
                    singleLineHeader: w,
                  }),
                o &&
                  r.a.createElement(Sn, {
                    titleArea: c,
                    titleAreaClick: l,
                    showBackButton: T,
                  }),
                r.a.createElement(
                  "main",
                  null,
                  !1 !== m && m,
                  r.a.createElement(
                    "div",
                    {
                      className: H,
                      ref: z,
                      id: "site-content-scroll",
                      onScroll: function (e) {
                        var t = e.target,
                          a = t.scrollHeight,
                          n = t.scrollTop,
                          r = t.clientHeight;
                        D(a - n === r);
                      },
                    },
                    r.a.createElement(
                      "div",
                      { ref: I, className: "site-content-width" },
                      r.a.createElement(f.ToastContainer, {
                        position: "bottom-center",
                        autoClose: 5e3,
                        hideProgressBar: !0,
                        newestOnTop: !1,
                        closeOnClick: !0,
                        rtl: !1,
                        pauseOnVisibilityChange: !0,
                        draggable: !0,
                        pauseOnHover: !0,
                      }),
                      i,
                    ),
                  ),
                ),
              ),
              r.a.createElement(
                "footer",
                { className: "site-footer" },
                r.a.createElement(
                  "div",
                  { className: "container" },
                  r.a.createElement(Cn, { actionArea: s }),
                ),
              ),
              C && r.a.createElement(Ha, null),
              S && r.a.createElement(Ma, null),
              k && r.a.createElement(Pn, null),
              P && r.a.createElement(Xn, null),
            ),
          );
        }),
        ar = Object(s.b)(
          function (e) {
            return { activeTab: e.ui.activeTab, locale: e.settings.locale };
          },
          { onTabButtonPressed: ce },
        ),
        nr = Object(m.b)(ar),
        rr = nr(function (e) {
          var t = e.tabs,
            a = e.onTabButtonPressed,
            n = e.activeTab,
            o = e.clicked,
            i = void 0 === o || o,
            c = e.tips;
          return r.a.createElement(
            "div",
            { className: "tabs-container" },
            r.a.createElement(
              "div",
              { className: "tabs" },
              t.map(function (e, t) {
                return r.a.createElement(
                  "button",
                  {
                    key: t,
                    tabIndex: 4 + t,
                    className: n === t ? "active" : "",
                    onClick: function () {
                      return i && a(t);
                    },
                    "aria-label": z.t(e),
                  },
                  r.a.createElement("span", { className: "tabText" }, z.t(e)),
                  (c && c[t]) > 0 &&
                    r.a.createElement(
                      "span",
                      {
                        className:
                          c[t] && c[t] > 99
                            ? "items-count-not-circle"
                            : "items-count",
                      },
                      c[t] && c[t] > 99 ? "(".concat(c[t], ")") : c[t],
                    ),
                );
              }),
            ),
          );
        }),
        or = Object(s.b)(
          function (e) {
            return { activeTab: e.ui.activeTab };
          },
          { onTabButtonPressed: ce },
        ),
        ir = Object(m.b)(or),
        cr =
          (ir(function (e) {
            var t = e.tabs,
              a = e.onTabButtonPressed,
              n = e.activeTab,
              o = e.clicked,
              i = void 0 === o || o;
            return r.a.createElement(
              "div",
              { className: "tabs-pills-container" },
              r.a.createElement(
                "div",
                { className: "tabs-pills" },
                t.map(function (e, t) {
                  return r.a.createElement(
                    "button",
                    {
                      key: t,
                      className: n === t ? "active" : "",
                      onClick: function () {
                        return i && a(t);
                      },
                      "aria-label": z.t(e),
                    },
                    z.t(e),
                  );
                }),
              ),
            );
          }),
          function (e) {
            var t = e.licensePlate,
              a = e.licensePlateClass,
              n = e.classContainer;
            return r.a.createElement(
              "div",
              { className: "license-plate-container ".concat(n || "") },
              r.a.createElement(
                "div",
                { className: "license-plate-block" },
                r.a.createElement(
                  "div",
                  { className: "license-plate ".concat(a || "") },
                  r.a.createElement(
                    "span",
                    { className: "license-plate-text" },
                    t,
                  ),
                ),
              ),
            );
          }),
        sr = Object(s.b)(
          function (e) {
            return {
              theme: e.ui.themeTemporary ? e.ui.themeTemporary : e.ui.theme,
            };
          },
          { onThemeChanged: se },
        ),
        lr = Object(m.b)(sr),
        ur = lr(function (e) {
          var t = e.onThemeChanged,
            a = e.onChangeTheme,
            n = e.theme,
            o = e.temporary,
            i = void 0 !== o && o;
          return r.a.createElement(
            "div",
            { className: "theme-buttons" },
            [
              "default",
              "grey-black",
              "black-white",
              "black-yellow",
              "yellow-black",
            ].map(function (e, o) {
              return r.a.createElement("button", {
                className: e,
                disabled: n === { item: e },
                onClick: function () {
                  return (function (e, n) {
                    a ? a(e, n) : t(e, n);
                  })(e, i);
                },
                key: o,
                "aria-label": z.t("theme") + " " + e,
              });
            }),
          );
        }),
        dr = Object(s.b)(
          function (e) {
            return { themeTemporary: e.ui.themeTemporary };
          },
          { changeThemeTemporary: oe },
        ),
        mr = Object(m.b)(dr),
        _r =
          (mr(function (e) {
            var t = e.changeThemeTemporary;
            return r.a.createElement(
              "div",
              { className: "page-municipality-theme" },
              r.a.createElement(ur, {
                temporary: !0,
                onChangeTheme: function (e) {
                  return t(e);
                },
              }),
            );
          }),
          function (e) {
            var t = e.children,
              a = e.isBlocked,
              n = e.onClick,
              o = e.onKeyDown,
              i = e.tabIndex;
            return r.a.createElement(
              "div",
              {
                className: "item-without-settings-container parkapp-item",
                tabIndex: i,
                onClick: n,
                onKeyDown: o,
              },
              t,
              a && r.a.createElement("div", { className: "diagonal-line" }),
            );
          }),
        pr = Object(s.b)(function (e) {
          return { showContextMenuAtTheTop: e.ui.showContextMenuAtTheTop };
        }, null),
        fr = Object(m.b)(pr),
        gr = fr(function (e) {
          var t = e.actions,
            a = "context-menu-container context-menu-";
          return (
            (a += e.showContextMenuAtTheTop ? "top" : "bottom"),
            r.a.createElement(
              "div",
              { className: a },
              r.a.createElement(
                "div",
                { className: "context-menu-content" },
                t.map(function (e, t) {
                  var a = e.title,
                    n = e.onClick,
                    o = e.params;
                  return r.a.createElement(
                    "div",
                    {
                      key: t,
                      onClick: function () {
                        return n(o);
                      },
                    },
                    r.a.createElement(
                      "div",
                      { className: "context-menu-item" },
                      a,
                    ),
                  );
                }),
              ),
            )
          );
        }),
        vr = function (e) {
          var t = e.actions;
          return r.a.createElement(
            "div",
            { className: "button-menu-container" },
            r.a.createElement(
              "div",
              { className: "button-menu-content" },
              t.map(function (e, t) {
                var a = e.title,
                  n = e.onClick,
                  o = e.params;
                return r.a.createElement(
                  "div",
                  {
                    className: "button-menu-item",
                    onClick: function () {
                      return n(o);
                    },
                    key: t,
                  },
                  a,
                );
              }),
            ),
          );
        },
        hr = [
          {
            title: "Extend",
            onClick: function () {
              return null;
            },
            params: {},
          },
          {
            title: "Stop",
            onClick: function () {
              return null;
            },
            params: {},
          },
        ],
        Er = Object(s.b)(
          function (e) {
            var t = e.ui;
            return {
              showContextMenu: t.showContextMenu,
              listItemIndex: t.listItemIndex,
              locale: e.settings.locale,
            };
          },
          {
            toggleContextMenu: function (e, t) {
              return {
                type: "TOGGLE_CONTEXT_MENU",
                listItemIndex: e,
                showContextMenuAtTheTop: t,
              };
            },
          },
        ),
        br = Object(m.b)(Er),
        Ar = br(function (e) {
          var t = e.template,
            a = e.showContextMenu,
            n = e.toggleContextMenu,
            o = e.actions,
            i = void 0 === o ? hr : o,
            c = e.index,
            s = e.listItemIndex,
            l = e.isBlocked,
            u = void 0 !== l && l;
          return r.a.createElement(
            "div",
            {
              className:
                "item-with-settings-container-default parkapp-item ".concat(
                  c === s ? "selected" : "",
                ),
            },
            r.a.createElement(
              "div",
              { className: "item-with-settings-content" },
              t,
              r.a.createElement(vr, { actions: i }),
              u && r.a.createElement("div", { className: "diagonal-line" }),
            ),
            r.a.createElement("div", {
              className: "item-with-settings-button",
              "aria-label": "context-menu",
              onClick: function (e) {
                var t = (window.innerHeight / 2.5) * 2,
                  a = e.screenY > t;
                (0 === c && (a = !1), n(c, a));
              },
            }),
            a && c === s && r.a.createElement(gr, { actions: i }),
          );
        }),
        Tr = function (e) {
          var t = e.name,
            a = e.byGrant,
            n = void 0 !== a && a;
          return r.a.createElement(
            "div",
            { className: "favorite-container" },
            r.a.createElement(
              "div",
              { className: "favorite-name" },
              t && t,
              !t &&
                n &&
                r.a.createElement(
                  "span",
                  { className: "anonymouse" },
                  "(",
                  z.t("anonymous"),
                  ")",
                ),
              !t &&
                !n &&
                r.a.createElement(
                  "span",
                  { className: "anonymouse" },
                  "(",
                  z.t("unknown"),
                  ")",
                ),
            ),
          );
        },
        Or = function (e) {
          var t = e.value,
            a = e.nameField,
            n = e.onClickCancel,
            o = e.showButton,
            i = void 0 === o || o,
            c = e.tabIndex,
            s = e.upperCase,
            l = void 0 === s || s;
          return r.a.createElement(
            "div",
            { className: "search-container" },
            r.a.createElement(
              "div",
              { className: "search-form" },
              r.a.createElement(Ia, {
                name: a,
                value: t,
                areaLabel: z.t("search"),
                autofocus: !0,
                upperCase: l,
                tabIndex: c,
              }),
            ),
            i &&
              r.a.createElement(
                "button",
                {
                  className: "btn-search",
                  onClick: function () {
                    n && n();
                  },
                  "aria-label": z.t("cancel"),
                },
                z.t("cancel"),
              ),
          );
        },
        Nr = function (e) {
          var t = e.logoFolder,
            a = (e.alt, "/city-logos/" + t + "/logo.png");
          return r.a.createElement(
            "div",
            { className: "icon-city" },
            r.a.createElement(on.a, {
              src: a,
              fallbackImage: "/city-logos/default/logo.png",
              initialImage: "/city-logos/default/logo.png",
              alt: t + " logo",
            }),
          );
        },
        yr = function (e) {
          var t = fe()().format("DD-MM-YYYY"),
            a = fe()().subtract(1, "days").format("DD-MM-YYYY"),
            n = fe()().add(1, "days").format("DD-MM-YYYY"),
            o = fe()(e, "DD-MM-YYYY").format("DD-MM-YYYY"),
            i = fe()(e, "DD-MM-YYYY HH:mm:ss"),
            c = fe()().format("YYYY"),
            s = fe()(e, "DD-MM-YYYY").format("YYYY"),
            l =
              t === o
                ? "".concat(z.t("today"))
                : a === o
                  ? "".concat(z.t("yesterday"))
                  : n === o
                    ? "".concat(z.t("tomorrow"))
                    : ""
                        .concat(i.format("DD"), " ")
                        .concat(
                          z.t("month_".concat(i.month())).replace(".", ""),
                        );
          return (
            c !== s && (l += " " + s),
            r.a.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: "<span>"
                  .concat(i.format("HH:mm"), ",&nbsp;</span><span> ")
                  .concat(l, "</span>"),
              },
            })
          );
        },
        Ir = function (e) {
          var t = e.timeEnd,
            a = e.timeStart;
          e.atnState;
          return r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "timeStartEnd-container" },
              r.a.createElement(
                "div",
                { className: "timeStartEnd-clocks" },
                r.a.createElement("div", { className: "dots" }),
                r.a.createElement("div", { className: "dots" }),
                r.a.createElement("div", { className: "dots" }),
                r.a.createElement("div", { className: "dots" }),
                r.a.createElement("div", { className: "dots" }),
              ),
              r.a.createElement(
                "div",
                { className: "time-container" },
                r.a.createElement("div", { className: "time" }, yr(a)),
                r.a.createElement("div", { className: "time" }, yr(t)),
              ),
            ),
          );
        },
        Cr = function (e) {
          e.atnState;
          var t = e.location,
            a = e.productLocationRequired,
            o = e.isGeofencing,
            i = -1 !== a || "true" === o;
          return r.a.createElement(
            n.Fragment,
            null,
            i &&
              r.a.createElement(
                "div",
                { className: "parking-action-location" },
                t,
              ),
          );
        },
        Sr = Object(s.b)(null, null),
        wr = Object(m.b)(Sr),
        kr = wr(function (e) {
          var t = e.favoriteName,
            a = e.licensePlate,
            n = e.atnState,
            o = e.timeEnd,
            i = e.timeStart,
            c = e.locationAction,
            s = e.productLocationRequired,
            l =
              "ACTIVE" === n
                ? z.t("stop_parking_action_confirmation")
                : z.t("delete_parking_action_confirmation");
          return r.a.createElement(
            "div",
            { className: "confirmation-container" },
            r.a.createElement(
              "div",
              { className: "parking-info" },
              r.a.createElement(
                "div",
                { className: "parkapp-item" },
                r.a.createElement(
                  "div",
                  { className: "parkingActionContainer" },
                  r.a.createElement(
                    "div",
                    { className: "left-item" },
                    r.a.createElement(Tr, { name: t }),
                    r.a.createElement(cr, {
                      licensePlate: a,
                      licensePlateClass: "ACTIVE" === n ? "active" : "",
                    }),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "right-item" },
                    r.a.createElement(Ir, {
                      timeEnd: o,
                      timeStart: i,
                      atnState: n,
                    }),
                  ),
                  r.a.createElement(Cr, {
                    atnState: n,
                    location: c,
                    productLocationRequired: s,
                  }),
                ),
              ),
            ),
            r.a.createElement("p", { className: "confirmation-message" }, l),
          );
        }),
        Pr = function (e) {
          if (e && e.balance && e.balance.ble_parameters) {
            var t = e.balance.ble_parameters.find(function (e) {
              return "AMOUNT" === e.prr_label;
            });
            if (t) return t.prr_value;
          }
        },
        Dr = function (e, t) {
          navigator.geolocation
            ? navigator.geolocation.getCurrentPosition(
                function (t) {
                  var a = t.coords;
                  e && e(a);
                },
                function (e) {
                  t &&
                    t({
                      message: z.t(
                        "in_order_to_use_this_product_you_must_turn_on_location_services",
                      ),
                    });
                },
              )
            : t &&
              t({ message: "Error: Your browser doesn't support geolocation" });
        },
        jr = function (e) {
          var t = e.cost,
            a = e.balanceType,
            o =
              void 0 !== t && "" !== t
                ? (function (e, t) {
                    var a = t,
                      n = e;
                    if ("TIMES" === a) {
                      var r =
                        1 === Math.floor(n)
                          ? z.t("action_time")
                          : z.t("action_times");
                      return "".concat(Math.floor(n), " ").concat(r);
                    }
                    if ("MINUTE" === a) {
                      var o = n.replace(/,/g, "");
                      o = Math.round(o);
                      var i = Math.trunc(o / 60),
                        c = o % 60;
                      return ""
                        .concat(i)
                        .concat(z.t("hours_abbreviated"), " ")
                        .concat(c, "m");
                    }
                    if ("EURO" === a)
                      return (
                        "\u20ac " +
                        n
                          .split("")
                          .map(function (e, t) {
                            return t ===
                              ((n.split(".")[0].length % 3) - 1 === -1
                                ? 2
                                : (n.split(".")[0].length % 3) - 1) &&
                              n.split(".")[0].length > 3
                              ? e + "."
                              : "." === e
                                ? ","
                                : e;
                          })
                          .join("")
                      );
                  })(t, a)
                : void 0;
          return r.a.createElement(
            n.Fragment,
            null,
            void 0 !== t &&
              "" !== t &&
              r.a.createElement(
                "div",
                { className: "parking-action-balance" },
                o,
              ),
          );
        },
        Lr = Object(s.b)(
          function (e) {
            return { locale: e.settings.locale };
          },
          {
            onInitializeDateTime: $e,
            onInitializeFormField: W,
            onStopParkingActions: oa,
            onInitializeStartDateTime: Xe,
            closeContextMenu: ae,
            showModalDialog: me,
            hideModalDialog: _e,
          },
        ),
        Mr = Object(m.b)(Lr, Ra.a),
        Rr = Mr(function (e) {
          var t = e.licensePlate,
            a = e.timeEnd,
            o = e.timeStart,
            i = e.atnState,
            c = e.actions_id,
            s = e.history,
            l = e.onInitializeDateTime,
            u = e.onInitializeFormField,
            d = e.onStopParkingActions,
            m = e.options,
            _ = (e.onInitializeStartDateTime, e.favoriteName),
            p = e.parentId,
            f = e.index,
            g = e.closeContextMenu,
            v = e.locationAction,
            h = e.productLocationRequired,
            E = e.showModalDialog,
            b = e.hideModalDialog,
            A = e.byGrant,
            T = e.cost,
            O = e.balanceType,
            N = e.isGeofencing,
            y = (function (e) {
              return null !== e.match(/extend/gi);
            })(m),
            I = function () {
              (g(), d(p || c, s));
            },
            C = function (e) {
              var t = e.yesClick,
                a = e.noClick;
              return [
                {
                  text:
                    "ACTIVE" === i
                      ? z.t("stop_action_yes")
                      : z.t("yes_delete_it"),
                  onClick: t,
                  autoFocus: !0,
                },
                {
                  text:
                    "ACTIVE" === i ? z.t("stop_action_no") : z.t("no_keep_it"),
                  onClick: a,
                },
              ];
            },
            S = Object(n.useContext)(Da),
            w = [
              {
                title: r.a.createElement(
                  "button",
                  {
                    className: "extend-context-menu-button",
                    "aria-label": z.t("extend"),
                  },
                  z.t("extend"),
                ),
                onClick: function () {
                  return (
                    g(),
                    _ && u("newParkingActions_name_favorite", _),
                    u("newParkingActions_license_plate", t),
                    l(c, o, a),
                    void s.push("/parking-actions-form/extend")
                  );
                },
                params: {},
              },
              {
                title: r.a.createElement(
                  "button",
                  {
                    className: "stop-context-menu-button",
                    "aria-label": z.t("stop"),
                  },
                  z.t("stop"),
                ),
                onClick: function () {
                  ((S.content = r.a.createElement(kr, {
                    favoriteName: _,
                    licensePlate: t,
                    atnState: i,
                    timeEnd: a,
                    timeStart: o,
                    locationAction: v,
                    productLocationRequired: h,
                  })),
                    (S.buttons = C({
                      yesClick: function () {
                        (b(), I());
                      },
                      noClick: function () {
                        b();
                      },
                    })),
                    E());
                },
                params: {},
              },
            ],
            k = [
              {
                title: r.a.createElement(
                  "button",
                  {
                    className: "delete-context-menu-button",
                    "aria-label": z.t("delete"),
                  },
                  z.t("delete"),
                ),
                onClick: function () {
                  ((S.content = r.a.createElement(kr, {
                    favoriteName: _,
                    licensePlate: t,
                    atnState: i,
                    timeEnd: a,
                    timeStart: o,
                    locationAction: v,
                    productLocationRequired: h,
                  })),
                    (S.buttons = C({
                      yesClick: function () {
                        (b(), I());
                      },
                      noClick: function () {
                        b();
                      },
                    })),
                    E());
                },
                params: {},
              },
            ];
          return (
            y || w.shift(),
            r.a.createElement(Ar, {
              index: f,
              key: f,
              actions: "ACTIVE" === i ? w : k,
              isShowDotsButtons: "ACTIVE" !== i,
              template: r.a.createElement(
                "div",
                { className: "parkingActionContainer" },
                r.a.createElement(Tr, { name: _, byGrant: A }),
                r.a.createElement(cr, {
                  licensePlate: t,
                  licensePlateClass: "ACTIVE" === i ? "active" : "",
                }),
                r.a.createElement(Ir, {
                  timeEnd: a,
                  timeStart: o,
                  atnState: i,
                }),
                -1 === ke(m) &&
                  r.a.createElement(jr, { cost: T, balanceType: O }),
                r.a.createElement(Cr, {
                  atnState: i,
                  location: v,
                  productLocationRequired: h,
                  isGeofencing: N,
                }),
              ),
            })
          );
        }),
        Fr = function (e) {
          var t = e.active,
            a = void 0 !== t && t,
            n = e.licensePlate;
          return r.a.createElement(
            _r,
            null,
            r.a.createElement(
              "div",
              { className: "license-plate-is-activate-wrapper" },
              r.a.createElement(
                "div",
                { className: "block" },
                !a &&
                  r.a.createElement(
                    "span",
                    null,
                    z.t("temporary_license_plate_not_active"),
                  ),
                a &&
                  r.a.createElement(
                    "span",
                    null,
                    z.t("temporary_license_plate_active"),
                  ),
              ),
              a && r.a.createElement(cr, { licensePlate: n }),
            ),
            !a &&
              r.a.createElement(
                "div",
                { className: "not-active-license-plate" },
                r.a.createElement(
                  "div",
                  { className: "not-active-license-plate-wrapper" },
                  r.a.createElement(cr, { licensePlate: n }),
                ),
                r.a.createElement("div", { className: "icon-info" }),
              ),
          );
        },
        Ur = Object(m.b)(Ra.a),
        Hr = Ur(function (e) {
          var t = e.parkingAction,
            a = e.atnState,
            o = e.options,
            i = e.productIsTemporary,
            c = e.temporaryLicensePlates,
            s = e.productLocation,
            l = e.byGrant,
            u = e.balanceType,
            d = e.isGeofencing,
            m = c.map(function (e, t) {
              return r.a.createElement(Fr, {
                key: t,
                active: e.active,
                licensePlate: e.mbr_identifier,
              });
            }),
            _ = s ? lt(s.prr_options) : void 0;
          t.length > 0 &&
            t.sort(function (e, t) {
              return (
                Ge(e.atn_parameters[1].prr_value) -
                Ge(t.atn_parameters[1].prr_value)
              );
            });
          var p = t.map(function (e, t) {
            var i =
                e.mbr_parameters.length > 0
                  ? e.mbr_parameters[0].prr_value
                  : void 0,
              c = e.mbr_identifier,
              s = i,
              m = e.atn_parameters[1].prr_value,
              p = e.parentTimeStart
                ? e.parentTimeStart
                : e.atn_parameters[0].prr_value,
              f = e.atn_id,
              g = e.parentId,
              v = e.atn_parameters[2] ? e.atn_parameters[2].prr_value : void 0,
              h = !!l,
              E = e.atn_parameters.find(function (e) {
                return "COST" === e.prr_label;
              }),
              b =
                "string" === typeof E.prr_value
                  ? E.prr_value.replace(",", ".")
                  : E.prr_value,
              A = E ? Number(b).toFixed(2).toString() : void 0,
              T = e.cost && e.cost > 0 ? e.cost : A;
            return r.a.createElement(
              n.Fragment,
              { key: t },
              r.a.createElement(Rr, {
                key: t,
                index: t,
                licensePlate: c,
                timeEnd: m,
                timeStart: p,
                atnState: a,
                actions_id: f,
                options: o,
                favoriteName: s,
                parentId: g,
                locationAction: v,
                productLocationRequired: _,
                byGrant: h,
                cost: T,
                balanceType: u,
                isGeofencing: d,
              }),
            );
          });
          return r.a.createElement(
            n.Fragment,
            null,
            0 === t.length &&
              "SCHEDULED" === a &&
              r.a.createElement(
                n.Fragment,
                null,
                i && m,
                r.a.createElement(
                  "div",
                  {
                    className:
                      "action-not-found\n                                    ".concat(
                        i && m.length > 0 ? "temporary" : "",
                      ),
                  },
                  r.a.createElement(
                    "h2",
                    { style: { textAlign: "center" }, "aria-level": "1" },
                    z.t("planned_action_not_found"),
                  ),
                ),
              ),
            0 === t.length &&
              "ACTIVE" === a &&
              r.a.createElement(
                n.Fragment,
                null,
                i && m,
                r.a.createElement(
                  "div",
                  {
                    className:
                      "action-not-found\n                                    ".concat(
                        i && m.length > 0 ? "temporary" : "",
                      ),
                  },
                  r.a.createElement(
                    "h2",
                    { style: { textAlign: "center" }, "aria-level": "1" },
                    z.t("running_action_not_found"),
                  ),
                ),
              ),
            t.length > 0 &&
              "SCHEDULED" === a &&
              r.a.createElement("div", null, i && m, p),
            t.length > 0 &&
              "ACTIVE" === a &&
              r.a.createElement("div", null, i && m, p),
          );
        }),
        xr = function (e) {
          var t = e.onClick,
            a = e.showProgress;
          return r.a.createElement(
            "div",
            { className: "add-new-button" },
            r.a.createElement(
              "button",
              {
                onClick: t,
                "aria-label": z.t("add_new_parking_action"),
                disabled: a,
              },
              !a &&
                r.a.createElement(
                  n.Fragment,
                  null,
                  r.a.createElement("span", { className: "cross" }, "+"),
                  r.a.createElement(
                    "span",
                    null,
                    z.t("add_new_parking_action"),
                  ),
                ),
              a && r.a.createElement("div", { className: "loader small" }),
            ),
          );
        },
        zr = function () {
          return r.a.createElement(
            "div",
            { className: "confirmation-container other-products-confirmation" },
            r.a.createElement(
              "div",
              { className: "balance-warning-info" },
              z.t("you_cannot_start_parking_action_because_your_balance"),
            ),
            r.a.createElement(
              "div",
              { className: "balance-warning-info" },
              z.t("click_top_up_button_or_OK"),
            ),
          );
        },
        Yr =
          (a(467),
          function (e) {
            var t = fe()().format("DD MMM YYYY"),
              a = fe()(e, "DD-MM-YYYY HH:mm").format("DD MMM YYYY"),
              o = fe()(e, "DD-MM-YYYY HH:mm"),
              i = ""
                .concat(o.date(), " ")
                .concat(z.t("month_" + o.month()), " ")
                .concat(o.year());
            return t === a
              ? r.a.createElement(
                  n.Fragment,
                  null,
                  r.a.createElement("span", null, z.t("today")),
                  r.a.createElement(
                    "span",
                    null,
                    fe()(e, "DD-MM-YYYY HH:mm").format("HH:mm"),
                  ),
                )
              : r.a.createElement(
                  n.Fragment,
                  null,
                  r.a.createElement("span", null, i),
                  r.a.createElement(
                    "span",
                    null,
                    fe()(e, "DD-MM-YYYY HH:mm").format("HH:mm"),
                  ),
                );
          }),
        Gr = Object(s.b)(
          function (e) {
            var t = e.parkingActions;
            return {
              startDateTime: t.startDateTime,
              endDateTime: t.endDateTime,
              locale: e.settings.locale,
            };
          },
          {
            onClearStartEndDateTime: et,
            onChangeStartDateTime: Ve,
            onChangeEndDateTime: Be,
          },
        ),
        Vr = Object(m.b)(Gr, Ra.a),
        Br = Vr(function (e) {
          var t,
            a = e.history,
            n = e.startDateTime,
            o = e.match,
            i = e.endDateTime,
            c = e.productOptions,
            s = e.isGeofencing,
            l = (function (e) {
              var t = e.routeType,
                a = e.isGeofencing;
              return "extend" === t || "true" === a;
            })({ routeType: o.params.type, isGeofencing: s }),
            u = "true" === s ? z.t("now") : Yr(n);
          return r.a.createElement(
            "div",
            { className: "startEndDateContainer" },
            r.a.createElement(
              "div",
              { className: "startEndButtons" },
              r.a.createElement(
                "label",
                { htmlFor: "startDateTime" },
                z.t("start_date_time"),
              ),
              r.a.createElement(
                "button",
                {
                  id: "startDateTime",
                  disabled: l,
                  onClick: function () {
                    a.push("/select-date-time/" + o.params.type + "/start");
                  },
                  "aria-label": z.t("start_date_time"),
                },
                n && u,
              ),
              r.a.createElement(
                "div",
                { className: "error-container" },
                n &&
                  n.errorMessage &&
                  r.a.createElement(
                    "div",
                    { className: "error-message" },
                    " ",
                    n.errorMessage,
                  ),
              ),
            ),
            (-1 !== dt((t = c)) || -1 === mt(t)) &&
              r.a.createElement(
                "div",
                { className: "startEndButtons" },
                r.a.createElement(
                  "label",
                  { htmlFor: "endDataTime" },
                  z.t("end_date_time"),
                ),
                r.a.createElement(
                  "button",
                  {
                    id: "endDataTime",
                    onClick: function () {
                      return a.push(
                        "/select-date-time/" + o.params.type + "/end",
                      );
                    },
                    "aria-label": z.t("end_date_time"),
                  },
                  i && Yr(i),
                ),
                r.a.createElement(
                  "div",
                  { className: "error-conteiner" },
                  i &&
                    i.errorMessage &&
                    r.a.createElement(
                      "div",
                      { className: "error-message" },
                      " ",
                      i.errorMessage,
                    ),
                ),
              ),
          );
        }),
        Wr = function (e, t, a, n) {
          if ("create" !== t) return !1;
          if ("create" === t) {
            if ("true" === a && n.length > 1) return !0;
            if ("false" === a && -1 !== e) return !0;
          }
        },
        Kr = Object(s.b)(
          function (e) {
            var t = e.form,
              a = t.newParkingActions_license_plate,
              n = t.newParkingActions_name_favorite,
              r = t.newParkingActions_location,
              o = a && a.value,
              i = n && n.value ? n.value : void 0,
              c = r ? r.value : void 0,
              s = void 0 !== e.data.products ? e.data.products : [];
            return {
              licensePlate: o,
              process: e.parkingActions.process,
              startDateTime: e.parkingActions.startDateTime,
              endDateTime: e.parkingActions.endDateTime,
              withoutAlternates: e.parkingActions.withoutAlternates,
              selectedActionId: e.parkingActions.selectedActionId,
              favorite: i,
              productActive: e.main.productDetailsActive,
              locationValue: c,
              products: s,
              locale: e.settings.locale,
            };
          },
          {
            onStartParkingActions: Ke,
            onErrorUpdate: K,
            onExtendParkingActions: tt,
            onEditParkingActions: function (e) {
              return function (t, a) {
                var n = a().parkingActions,
                  r = n.startDateTime,
                  o = n.endDateTime,
                  i = n.selectedActionId,
                  c = a().settings,
                  s = c.startingProduct,
                  l = c.currentProduct,
                  u = c.locale,
                  d = l || s,
                  m = a().form,
                  _ = m.newParkingActions_license_plate,
                  p = m.newParkingActions_name_favorite,
                  g = m.newParkingActions_location,
                  v = _ ? _.value : void 0,
                  h = p ? p.value : void 0,
                  E = g && g.value ? g.value.locationValue : void 0,
                  b = {
                    action: {
                      atn_parameters: [
                        { prr_label: "MBR_IDENT", prr_value: v },
                        { prr_label: "TIMESTART", prr_value: r },
                        { prr_label: "TIMEEND", prr_value: o },
                        { prr_label: "LOCATION", prr_value: E },
                      ],
                    },
                  },
                  A = JSON.stringify(b);
                (t(qe()),
                  C()
                    .stopParkingActions(i, u, d)
                    .then(function (a) {
                      "OK" === a.status.code.major
                        ? C()
                            .createParkingActions(A, d, u)
                            .then(function (a) {
                              "OK" === a.status.code.major
                                ? (h && t(it(h, v, d)),
                                  t(rt()),
                                  t(ne(1)),
                                  e.push("/"),
                                  f.toast.success(
                                    z.t("planned_parking_action_changed"),
                                  ),
                                  t(et()),
                                  t(B("newParkingActions_license_plate")),
                                  t(B("newParkingActions_name_favorite")))
                                : "FAIL" === a.status.code.major &&
                                    "SESSION_TIMEOUT" === a.status.code.minor
                                  ? (t(ot()), e.push("/login"), t(pa()))
                                  : (t(ot()),
                                    f.toast.error(
                                      z.t(
                                        "could_not_change_planned_parking_action",
                                      ),
                                    ));
                            })
                            .catch(function (e) {
                              (t(ot()), f.toast.error(e));
                            })
                        : "FAIL" === a.status.code.major &&
                            "SESSION_TIMEOUT" === a.status.code.minor
                          ? (t(ot()), t(ha(e)))
                          : (t(ot()),
                            f.toast.error(
                              z.t("could_not_change_planned_parking_action"),
                            ));
                    })
                    .catch(function (e) {
                      (t(ot()), f.toast.error(e));
                    }));
              };
            },
            onBack: function (e) {
              return { type: "ON_BACK", dateTime: e };
            },
            showMessageBlockedProduct: Bt,
          },
        ),
        Zr = Object(m.b)(Kr, Ra.a),
        Qr = Zr(function (e) {
          var t = e.onStartParkingActions,
            a = e.licensePlate,
            o = e.process,
            i = e.history,
            c = e.match,
            s = e.onErrorUpdate,
            l = e.endDateTime,
            u = e.onExtendParkingActions,
            d = e.onEditParkingActions,
            m = e.grant,
            _ = e.favorite,
            p = e.selectedActionId,
            f = e.productActive,
            g = e.locationValue,
            v = e.locationOptions,
            h = e.products,
            E = e.targetProduct,
            b = e.showMessageBlockedProduct,
            A = e.productOptions,
            T = e.isGeofencing,
            O = e.isUserGeofenceLocations,
            N = v ? lt(v) : void 0,
            y = Wr(N, c.params.type, T, O),
            I = function () {
              if (Vt(h, E)) b(h, E);
              else if ("create" === c.params.type) {
                if (
                  !(function (e, t) {
                    var a = !1;
                    return (
                      (e && "" !== e) ||
                        (-1 === dt(A) && -1 !== mt(A)
                          ? s(
                              "newParkingActions_license_plate",
                              "select_license_plate",
                            )
                          : s(
                              "newParkingActions_license_plate",
                              "license_plate_message",
                            ),
                        (a = !0)),
                      y &&
                        (t ||
                          (s(
                            "newParkingActions_location",
                            "select_location_massage",
                          ),
                          (a = !0))),
                      a
                    );
                  })(a, g)
                ) {
                  var e = ut(c, m, _);
                  t(i, e);
                }
              } else
                "extend" === c.params.type
                  ? !(function () {
                      var e = fe()(l, "DD-MM-YYYY HH:mm").format();
                      return f.some(function (t) {
                        return (
                          t.atn_id === p &&
                          fe()(
                            t.atn_parameters[1].prr_value,
                            "DD-MM-YYYY HH:mm",
                          ).format() === e
                        );
                      });
                    })()
                    ? u(i)
                    : i.push("/")
                  : "edit-planned" === c.params.type && d(i);
            };
          return r.a.createElement(
            n.Fragment,
            null,
            !o &&
              r.a.createElement(
                "button",
                {
                  className: "btn-start submit",
                  type: "submit",
                  onClick: function () {
                    I();
                  },
                  "aria-label": z.t("confirm"),
                },
                -1 === dt(A) && -1 !== mt(A)
                  ? z.t("activate_uppercase")
                  : z.t("confirm"),
              ),
            o &&
              r.a.createElement(
                "div",
                { className: "start-actions-loader-container" },
                r.a.createElement("div", { className: "loader" }),
              ),
          );
        }),
        Jr = function (e) {
          var t = e.history,
            a = e.match,
            n = e.location;
          return r.a.createElement(
            "div",
            { className: "location-container" },
            r.a.createElement("div", { className: "location-icon" }),
            r.a.createElement(
              "div",
              { className: "location" },
              r.a.createElement(
                "button",
                {
                  className: "btn-location",
                  onClick: function () {
                    return t.push("/select-location/" + a.params.type);
                  },
                },
                n && n.value && n.value.locationValueDisplay,
              ),
              r.a.createElement(
                "div",
                { className: "error-container" },
                n &&
                  n.errorMessage &&
                  "" !== n.errorMessage &&
                  r.a.createElement(
                    "div",
                    { className: "error-message" },
                    z.t(n.errorMessage),
                  ),
              ),
            ),
          );
        },
        qr = Object(s.b)(function (e) {
          var t = e.form,
            a = t.newParkingActions_license_plate,
            n = t.newParkingActions_name_favorite,
            r = t.newParkingActions_location;
          return {
            currentLicensePlate: a && a.value,
            currentNameFavorite: n && n.value,
            newParkingActions_location: r,
            locale: e.settings.locale,
          };
        }, null),
        Xr = Object(m.b)(qr, Ra.a)(function (e) {
          var t = e.history,
            a = e.match,
            o = e.currentLicensePlate,
            i = e.currentNameFavorite,
            c = e.grant,
            s = e.locationOptions,
            l = e.newParkingActions_location,
            u = e.productOptions,
            d = e.isGeofencing,
            m = e.isUserGeofenceLocations,
            _ = (function (e, t, a) {
              if (-1 === dt(a) && -1 !== mt(a)) return !0;
              if ("extend" === e.params.type) return !0;
              if ("create" === e.params.type && t) {
                if (!t.member_ident || "" === t.member_ident) return !1;
                if (t.member_ident && "" !== t.member_ident) return !0;
              }
              return !1;
            })(a, c, u),
            p = s ? lt(s) : void 0,
            f = (function (e, t) {
              return (
                "extend" !== e.params.type && ("create" !== e.params.type || !t)
              );
            })(a, c),
            g = (function (e, t, a) {
              return (
                (-1 !== dt(e) || -1 === mt(e)) &&
                !("create" === t.params.type && a)
              );
            })(u, a, c),
            v = Wr(p, a.params.type, d, m),
            h = function () {
              -1 === dt(u) && -1 !== mt(u)
                ? t.push("/select-license-plate-not-member/" + a.params.type)
                : t.push("/select-license-plate/" + a.params.type);
            };
          return r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "newParkingActions-form" },
              r.a.createElement(
                "div",
                {
                  className: "favorite-container ".concat(
                    f ? "showSearchButton" : "notShowSearchButton",
                  ),
                },
                g &&
                  r.a.createElement(Ia, {
                    name: "newParkingActions_name_favorite",
                    value: i,
                    disabled: "extend" === a.params.type && !0,
                    maxlength: 10,
                    leftIconClass: "left-icon-favorite",
                    showSearchButton: f,
                    areaLabel: z.t("favorite"),
                    onClickSearchButton: function () {
                      return h();
                    },
                  }),
              ),
              r.a.createElement(
                "div",
                {
                  className: "license-plate-parking-action-container ".concat(
                    f ? "showSearchButton" : "notShowSearchButton",
                  ),
                },
                r.a.createElement(Ia, {
                  name: "newParkingActions_license_plate",
                  value: o,
                  disabled: _,
                  validator: function (e) {
                    return (function (e, t) {
                      if (!e || "" === e)
                        return -1 === dt(t) && -1 !== mt(t)
                          ? "select_license_plate"
                          : "license_plate_message";
                    })(e, u);
                  },
                  licensePlate: !0,
                  autofocus: !0,
                  maxlength: 10,
                  leftIconClass: "left-icon-license-plate",
                  showSearchButton: f,
                  areaLabel: z.t("license_plate"),
                  onClickSearchButton: function () {
                    return h();
                  },
                }),
              ),
            ),
            r.a.createElement(Br, { productOptions: u, isGeofencing: d }),
            v && r.a.createElement(Jr, { history: t, match: a, location: l }),
            "true" === d &&
              1 === m.length &&
              r.a.createElement(
                "div",
                { className: "location-container" },
                r.a.createElement(Cr, { location: m[0].code }),
              ),
          );
        }),
        $r = Object(s.b)(
          function (e, t) {
            var a = t.name;
            return {
              currentIndex: e.form.currentIndex ? e.form.currentIndex.value : 0,
              currentValue: e.form[a] ? e.form[a].value : null,
              locale: e.settings.locale,
            };
          },
          { onFormFieldValueChanged: V },
        ),
        eo = Object(m.b)($r)(function (e) {
          var t = e.name,
            a = e.list,
            n = (e.label, e.onFormFieldValueChanged),
            o = (e.currentIndex, e.currentValue),
            i = e.defaultValue,
            c = o || i;
          return r.a.createElement(
            "div",
            { className: "alternates-radio-group-container" },
            a.map(function (e, a) {
              return r.a.createElement(
                "div",
                {
                  className: "radio-group-item",
                  onClick: function () {
                    (n("currentIndex", a), n(t, e.value));
                  },
                  key: a,
                },
                r.a.createElement(
                  "div",
                  { className: "radio-button" },
                  r.a.createElement("input", {
                    name: "locale",
                    type: "radio",
                    id: "locale-".concat(a),
                    value: e.value,
                    index: a,
                    "aria-labelledby": "locale-".concat(a),
                    "aria-label": z.t("make_your_choice"),
                    checked: c === e.value,
                    "aria-checked": c === e.value,
                    onChange: function (e) {
                      var r = e.target.value;
                      (n(t, r), n("currentIndex", a));
                    },
                  }),
                  r.a.createElement(
                    "label",
                    { htmlFor: "locale-".concat(a) },
                    e.title,
                  ),
                ),
              );
            }),
          );
        }),
        to = Object(m.c)({
          componentWillUnmount: function () {
            var e = this.props.onFormFieldClearValue;
            (e("actionAlternates"),
              e("currentIndex"),
              e("alternatesEndDateTime"));
          },
        }),
        ao = Object(s.b)(
          function (e) {
            var t = e.form.newParkingActions_name_favorite,
              a = e.form.actionAlternates
                ? e.form.actionAlternates.value
                : void 0,
              n = e.form.alternatesEndDateTime
                ? e.form.alternatesEndDateTime.value
                : void 0,
              r = e.parkingActions,
              o = r.endDateTime,
              i = r.message,
              c = t && t.value ? t.value : void 0,
              s = e.settings,
              l = s.startingProduct,
              u = s.currentProduct,
              d = u || l,
              m = (void 0 !== e.data.products ? e.data.products : []).find(
                function (e) {
                  return e.value === d;
                },
              );
            return {
              actionAlternate: a,
              endDateTime: o,
              message: i,
              alternatesEndDateTime: n,
              favorite: c,
              grant: m && m.byGrant ? m.byGrant : void 0,
              locale: e.settings.locale,
            };
          },
          {
            onStartParkingActions: Ke,
            onExtendParkingActions: tt,
            onFormFieldClearValue: B,
            onChangeEndDateTime: Be,
          },
        ),
        no = Object(m.b)(ao, Ra.a, to)(function (e) {
          var t = e.history,
            a = e.match,
            n = e.actionAlternate,
            o = (e.endDateTime, e.onStartParkingActions),
            i = e.message,
            c = e.onExtendParkingActions,
            s = (e.onFormFieldClearValue, e.alternatesEndDateTime),
            l = e.onChangeEndDateTime,
            u = e.favorite,
            d = e.grant,
            m = (function (e) {
              return [
                { value: "1", title: he(z.t("alt1", { time: ge(e) })) },
                { value: "2", title: z.t("alt2") },
              ];
            })(s),
            _ = z.t("pick_choice");
          return (
            "1" === n
              ? (_ = z.t("pick_choice1"))
              : "2" === n && (_ = z.t("pick_choice2")),
            r.a.createElement(tr, {
              screenClass: "altrenates-screen",
              showBackButton: !0,
              titleArea: z.t("new_parking_action"),
              titleAreaClick: function () {
                t.goBack();
              },
              bodyArea: r.a.createElement(
                "div",
                { className: "altrenates-container" },
                i && r.a.createElement("p", null, " ", i, " "),
                r.a.createElement("p", null, z.t("make_your_choice")),
                r.a.createElement(eo, {
                  name: "actionAlternates",
                  list: m,
                  defaultValue: 1,
                }),
              ),
              actionArea: r.a.createElement(
                "button",
                {
                  className: "button submit " + (n ? "" : "button-disabled"),
                  onClick: function () {
                    if ("1" === n) {
                      var e = a.params.type;
                      if ((l(s), "create" === e)) {
                        var r = ut(a, d, u);
                        o(t, r);
                      } else "extend" === e && c(t);
                    } else "2" === n && t.goBack();
                  },
                  "aria-label": _,
                },
                _,
              ),
            })
          );
        }),
        ro = function (e) {
          var t = e.product,
            a = t.name,
            n = t.title,
            o = t.byGrant,
            i = t.validFrom,
            c = t.validTo,
            s = t.balance,
            l = Un(o, i, c),
            u = Tn(s.ble_parameters),
            d = (function (e) {
              var t = "",
                a = "",
                n = "",
                r = "",
                o = "";
              if (
                (e &&
                  "" !== e &&
                  ((t = e[4].prr_value
                    ? Number(e[4].prr_value).toFixed(2)
                    : ""),
                  (a = e[1].prr_value ? e[1].prr_value : ""),
                  (n = e[2].prr_value ? e[2].prr_value : "")),
                "TIMES" === a)
              ) {
                var i =
                  1 === Math.floor(t)
                    ? z.t("action_left")
                    : z.t("actions_left");
                return "".concat(Math.floor(t), " ").concat(i);
              }
              if ("MINUTE" === a) {
                var c = t.split(".");
                return (
                  (r = Math.trunc(c[0] / 60)),
                  (o = c[0] % 60),
                  ""
                    .concat(r)
                    .concat(z.t("hours_abbreviated"), " ")
                    .concat(o, "m")
                );
              }
              if ("EURO" === a)
                return (
                  n +
                  " " +
                  t
                    .split("")
                    .map(function (e, a) {
                      return a ===
                        ((t.split(".")[0].length % 3) - 1 === -1
                          ? 2
                          : (t.split(".")[0].length % 3) - 1) &&
                        t.split(".")[0].length > 3
                        ? e + "."
                        : "." === e
                          ? ","
                          : e;
                    })
                    .join("")
                );
            })(s.ble_parameters);
          return r.a.createElement(
            "div",
            { className: "confirmation-container other-products-confirmation" },
            r.a.createElement(
              "div",
              { className: "balance-warning-icon" },
              z.t("balance_warning"),
            ),
            r.a.createElement(
              "div",
              { className: "parking-info" },
              r.a.createElement(
                "div",
                { className: "parkapp-item" },
                r.a.createElement("p", null, a),
                r.a.createElement("p", null, n),
                l && r.a.createElement("p", null, z.t("valid"), " ", l),
              ),
            ),
            r.a.createElement(
              "div",
              { className: "balance-warning-info" },
              z.t("your_balance_has_come_below", { amount: u, threshold: d }),
            ),
          );
        },
        oo = ["running", "planned"],
        io = ["running"],
        co = Object(s.b)(
          function (e) {
            var t = [],
              a = e.data.productsLoaded,
              n = e.settings,
              r = n.locale,
              o = n.startingProduct,
              i = n.currentProduct,
              c = i || o,
              s = void 0 !== e.data.products ? e.data.products : [],
              l = s.find(function (e) {
                return e.value === c;
              });
            l || (l = s[0]);
            var u = e.main,
              d = u.productDetailsActive,
              m = u.productDetailsScheduled,
              _ = u.temporaryLicensePlates,
              p = u.allProductsIsBlocked,
              f = u.progress,
              g = u.isUserGeofenceProgress,
              v = e.ui,
              h = v.activeTab,
              E = v.showContextMenu,
              b = v.setIntervalId,
              A = v.scrollEnd,
              T = d.length,
              O = m.length;
            return (
              t.push(T),
              t.push(O),
              {
                activeTab: h,
                productDetailsActive: d,
                productDetailsScheduled: m,
                progress: f,
                productsLoaded: a,
                locale: r,
                selectedProduct: l,
                products: s,
                tips: t,
                showContextMenu: E,
                setIntervalId: b,
                temporaryLicensePlates: _,
                targetProduct: c,
                allProductsIsBlocked: p,
                scrollEnd: A,
                isUserGeofenceProgress: g,
                parkingActionWasStarted:
                  e.parkingActions.parkingActionWasStarted,
              }
            );
          },
          {
            initialize: Rt,
            autoRefreshParkingActions: function (e) {
              return function (t, a) {
                var n = setInterval(function () {
                  var n = a().settings,
                    r = n.startingProduct,
                    o = n.currentProduct,
                    i = n.locale,
                    c = a().data.products,
                    s = o || r,
                    l =
                      c.length > 0
                        ? c.find(function (e) {
                            return e.value === s;
                          })
                        : void 0;
                  (t(Xt(s, e, !1)),
                    Pe(l.options, "MAX_ACT") ||
                      (l && -1 !== ke(l.options)) ||
                      t(
                        (function (e, t) {
                          return function (a, n) {
                            I()
                              .getBalance(e, t)
                              .then(function (t) {
                                if (
                                  t &&
                                  t.status &&
                                  t.status &&
                                  "OK" === t.status.code.major
                                ) {
                                  var n =
                                    t.data.balance &&
                                    t.data.balance.ble_parameters.length > 0
                                      ? t.data.balance
                                      : void 0;
                                  a(be(e, n));
                                }
                              })
                              .catch();
                          };
                        })(s, i),
                      ),
                    Pe(l.options, "MAX_ACT") && t(Zt(s)));
                }, 6e4);
                t({
                  type: "SET_INTERVAL_PARKING_ACTIONS_START",
                  setIntervalId: n,
                });
              };
            },
            setIntervalParkingActionsStop: le,
            showMessageBlockedProduct: Bt,
            onClearEndDateTime: function () {
              return { type: "CLEAR_END_DATE_TIME" };
            },
            hideModalDialog: _e,
            showModalDialog: me,
            onParkingActionWasStarted: _t,
            showModalMessage: de,
            isUserWithinGeofence: function (e, t, a, n, r) {
              return function (o) {
                (o(ua()),
                  (function () {
                    var e = O().withConfig({ baseURL: "/gsmpark-app-www/geo" });
                    return {
                      isUserWithinGeofence: function (t, a, n) {
                        return e.post({
                          url: "/isUserWithinGeofence",
                          params:
                            "lat=" + t + "&lon=" + a + "&productCode=" + n,
                        });
                      },
                    };
                  })()
                    .isUserWithinGeofence(e, t, a, n)
                    .then(function (e) {
                      var t = e.status,
                        a = e.locations,
                        n = e.statusCode;
                      if ("OK" === t) {
                        if (a.length > 0) {
                          var i = (function (e) {
                            return e.map(function (e) {
                              return {
                                prr_value: e.code,
                                prr_default_value_display: e.description,
                              };
                            });
                          })(a);
                          (o(Lt(i)), r.push("/parking-actions-form/create"));
                        } else
                          o(
                            de(
                              z.t(
                                "parking_is_not_possible_you_are_not_at_or_near_the_parking_location",
                              ),
                            ),
                          );
                        o(da(a));
                      } else (o(ma()), f.toast.error(n));
                    })
                    .catch(function () {
                      o(ma());
                    }));
              };
            },
          },
        ),
        so = Object(m.b)(co, Ra.a)(function (e) {
          var t = e.activeTab,
            a = e.productsLoaded,
            o = e.progress,
            i = e.history,
            c = e.selectedProduct,
            s = e.products,
            l = e.productDetailsActive,
            d = e.productDetailsScheduled,
            m = e.temporaryLicensePlates,
            _ = e.tips,
            p = e.showContextMenu,
            f = e.showMessageBlockedProduct,
            g = e.targetProduct,
            v = e.initialize,
            h = e.hideModalDialog,
            E = e.showModalDialog,
            b = e.autoRefreshParkingActions,
            A = e.onClearEndDateTime,
            T = e.setIntervalId,
            O = e.allProductsIsBlocked,
            N = e.setIntervalParkingActionsStop,
            y = e.parkingActionWasStarted,
            I = e.onParkingActionWasStarted,
            C = e.scrollEnd,
            S = e.showModalMessage,
            w = e.isUserWithinGeofence,
            k = e.isUserGeofenceProgress,
            P = Object(n.useState)(void 0),
            D = Object(xa.a)(P, 2),
            j = D[0],
            L = D[1],
            M = Object(n.useContext)(Da);
          (Object(n.useEffect)(
            function () {
              return function () {
                T && N(T);
              };
            },
            [T, N],
          ),
            Object(n.useEffect)(
              function () {
                (v(i), b());
                var e = Pr(c);
                return (
                  console.log("balance", e),
                  e && L(e),
                  function () {
                    I(!1);
                  }
                );
              },
              [b, i, v, I],
            ),
            Object(n.useEffect)(
              function () {
                c && "true" === c.isGeofencing && Dr(null, U);
              },
              [a],
            ));
          var R = Pr(c);
          (console.log("newBalance", R),
            Object(n.useEffect)(
              function () {
                if (j && Number(R) !== Number(j) && y) {
                  var e = ke(c.options),
                    t = c.balance;
                  -1 === e &&
                    t &&
                    (function (e) {
                      var t = e.find(function (e) {
                          return "AMOUNT" === e.prr_label;
                        }),
                        a = e.find(function (e) {
                          return "BLE_THRESHOLD" === e.prr_label;
                        });
                      return (
                        !(!t || !a) && Number(a.prr_value) > Number(t.prr_value)
                      );
                    })(t.ble_parameters) &&
                    ((M.content = r.a.createElement(ro, { product: c })),
                    (M.buttons = (function (e) {
                      var t = e.topUpClick,
                        a = e.okClick;
                      return [
                        {
                          text: z.t("top_up"),
                          onClick: t,
                          cssClass: "btn-green",
                          autoFocus: !0,
                        },
                        { text: z.t("ok"), cssClass: "btn-ok", onClick: a },
                      ];
                    })({
                      topUpClick: function () {
                        (h(), i.push("/top-up"));
                      },
                      okClick: function () {
                        h();
                      },
                    })),
                    E());
                }
              },
              [j, R, y, M, h, i, E, c],
            ));
          var F =
              c && c.balance
                ? (function (e) {
                    if (e && e.ble_parameters) {
                      var t = e.ble_parameters.find(function (e) {
                        return "CURRENCY_CODE" === e.prr_label;
                      });
                      return t ? t.prr_value : void 0;
                    }
                  })(c.balance)
                : void 0,
            U = function (e) {
              var t = e.message;
              S(t);
            },
            H = function (e) {
              var t = e.latitude,
                a = e.longitude,
                n = c.value,
                r = c.location,
                o = r ? r.prr_default_value : void 0,
                s = n.split("$")[0];
              w(t, a, s, o, i);
            },
            x = function () {
              (console.log("showPopUpBalanceIsEmpty"),
                (M.content = r.a.createElement(zr, null)),
                (M.buttons = (function (e) {
                  var t = e.topUpClick,
                    a = e.okClick;
                  return [
                    {
                      text: z.t("top_up"),
                      onClick: t,
                      cssClass: "btn-green large",
                      autoFocus: !0,
                    },
                    { text: z.t("ok"), cssClass: "btn-ok large", onClick: a },
                  ];
                })({
                  topUpClick: function () {
                    (h(), i.push("/top-up"));
                  },
                  okClick: function () {
                    h();
                  },
                })),
                E());
            },
            Y = c && "true" === c.isGeofencing ? io : oo;
          return (
            console.log("selectedProduct", c),
            r.a.createElement(
              n.Fragment,
              null,
              a &&
                O &&
                r.a.createElement(u.a, {
                  toRedirect: !0,
                  to: { pathname: "/no-products" },
                }),
              a &&
                r.a.createElement(tr, {
                  screenClass: "screen-fixed-footer main-container",
                  pageList: !0,
                  tabsArea: r.a.createElement(rr, {
                    tabsTitle: "parking_actions",
                    tabs: Y,
                    tips: _,
                  }),
                  titleArea: z.t("parking_actions"),
                  bodyArea: o
                    ? r.a.createElement("div", { className: "loader" })
                    : r.a.createElement(
                        n.Fragment,
                        null,
                        0 === t &&
                          r.a.createElement(Hr, {
                            parkingAction: l,
                            options: c.options,
                            atnState: "ACTIVE",
                            productIsTemporary: c.productIsTemporary,
                            temporaryLicensePlates: m,
                            productLocation: c.location,
                            byGrant: c.byGrant,
                            balanceType: F,
                            isGeofencing: c.isGeofencing,
                          }),
                        1 === t &&
                          r.a.createElement(Hr, {
                            parkingAction: d,
                            options: c.options,
                            atnState: "SCHEDULED",
                            productIsTemporary: c.productIsTemporary,
                            temporaryLicensePlates: m,
                            productLocation: c.location,
                            byGrant: c.byGrant,
                            balanceType: F,
                            isGeofencing: c.isGeofencing,
                          }),
                      ),
                  actionArea:
                    !p &&
                    !C &&
                    r.a.createElement(xr, {
                      onClick: function () {
                        console.log("newBalance", R);
                        var e,
                          t = Vt(s, g),
                          a = "0.00" === (e = R) || " 0.0001" === e,
                          n = (function (e) {
                            var t = e.options,
                              a = e.productIsSwitch,
                              n = e.byGrant,
                              r = e.productIsTemporary,
                              o = ke(t),
                              i = dt(t),
                              c = mt(t);
                            return (
                              !a &&
                              !r &&
                              (-1 !== i || -1 === c) &&
                              -1 === o &&
                              void 0 === n
                            );
                          })(c);
                        t
                          ? f(s, g)
                          : n && a
                            ? x()
                            : (c.productIsTemporary && A(),
                              "true" === c.isGeofencing
                                ? Dr(H, U)
                                : i.push("/parking-actions-form/create"));
                      },
                      showProgress: k,
                    }),
                }),
              !a && r.a.createElement("div", { className: "loader" }),
            )
          );
        }),
        lo = Object(s.b)(
          function (e) {
            var t = void 0 !== e.data.products ? e.data.products : [],
              a = e.form.startingProduct
                ? e.form.startingProduct.value
                : void 0,
              n = a || e.settings.startingProduct;
            return {
              toggleProduct: t.find(function (e) {
                return e.value === n;
              }),
              locale: e.settings.locale,
            };
          },
          { onInitializeFormField: W },
        ),
        uo = Object(m.b)(Ra.a, lo)(function (e) {
          var t = e.selectedProduct,
            a = e.history,
            n = e.toggleProduct;
          return r.a.createElement(
            "div",
            { className: "start-with-product-container" },
            r.a.createElement("label", null, z.t("start_product")),
            r.a.createElement(
              "div",
              { className: "selected-product" },
              !t && z.t("last_used_product"),
              t &&
                (function (e) {
                  if (e) {
                    var t = e.city,
                      a = e.name,
                      n = e.title,
                      r = "";
                    return (
                      t && (r += t),
                      t && a && (r += " - "),
                      a && (r += a),
                      a && n && (r += " - "),
                      n && (r += n),
                      r
                    );
                  }
                  return "";
                })(n),
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  className: "parkapp-button  blue-button",
                  "aria-label": z.t("change_starting_product"),
                  onClick: function () {
                    return a.push("/change-starting-product");
                  },
                },
                z.t("change_starting_product"),
              ),
            ),
          );
        }),
        mo = Object(s.b)(
          function (e, t) {
            var a = t.name;
            return {
              currentIndex: e.form.currentIndex ? e.form.currentIndex.value : 0,
              currentValue: e.form[a] ? e.form[a].value : null,
            };
          },
          { onFormFieldValueChanged: V },
        ),
        _o = Object(m.b)(mo)(function (e) {
          var t = e.className,
            a = e.name,
            n = e.list,
            o = e.label,
            i = e.onFormFieldValueChanged,
            c = (e.currentIndex, e.currentValue),
            s = e.defaultValue,
            l = e.onChangeRadio,
            u = e.ariaLabel,
            d = c || s;
          return r.a.createElement(
            "div",
            { className: t },
            o && r.a.createElement("label", { htmlFor: a }, o),
            r.a.createElement(
              "div",
              {
                className: "radio-group-container",
                role: "radiogroup",
                "aria-label": "Radio group",
              },
              n.map(function (e, t) {
                return r.a.createElement(
                  "div",
                  {
                    className: "radio-group-item",
                    onClick: function () {
                      (i("currentIndex", t), i(a, e.value), l && l(e.value));
                    },
                    key: t,
                  },
                  r.a.createElement("input", {
                    tabIndex: 5 + t,
                    name: a,
                    type: "radio",
                    id: "".concat(a, "-").concat(t),
                    value: e.value,
                    index: t,
                    "aria-labelledby": "".concat(a, "-").concat(t),
                    "aria-label": u,
                    checked: d === e.value,
                    "aria-checked": d === e.value,
                    onChange: function (e) {
                      var n = e.target.value;
                      (i(a, n), i("currentIndex", t), l && l(n));
                    },
                  }),
                  r.a.createElement(
                    "label",
                    { htmlFor: "".concat(a, "-").concat(t) },
                    e.title,
                  ),
                );
              }),
            ),
          );
        }),
        po = [
          { value: "en_UK", title: "English" },
          { value: "nl_NL", title: "Nederlands" },
        ],
        fo = Object(s.b)(function (e) {
          var t = e.form.locale ? e.form.locale.value : void 0;
          return (t || (t = e.settings.locale), { currentLanguage: t });
        }),
        go =
          (Object(m.b)(fo)(function (e) {
            var t = e.currentLanguage,
              a = e.onChangeLanguage;
            return r.a.createElement(_o, {
              className: "language",
              name: "locale",
              value: t,
              list: po,
              onChangeRadio: a,
              label: z.t("language"),
            });
          }),
          Object(s.b)(
            function (e) {
              var t = e.form.name ? e.form.name.value : void 0;
              return (t || (t = e.settings.name), { currentName: t });
            },
            { onFormFieldValueChanged: V },
          )),
        vo =
          (Object(m.b)(go)(function (e) {
            var t = e.currentName;
            e.onFormFieldValueChanged;
            return r.a.createElement(
              "div",
              { className: "input-container" },
              r.a.createElement(Ia, {
                name: "name",
                value: t,
                label: z.t("name"),
                disabled: !0,
              }),
            );
          }),
          Object(s.b)(function (e) {
            return {
              currentEmail: H.getItem("email").replace(
                /[a-zA-Z0-9]{3}@[a-zA-Z0-9]{3}/gi,
                "***@***",
              ),
              locale: e.settings.locale,
            };
          })),
        ho = Object(m.b)(vo)(function (e) {
          var t = e.currentEmail;
          return r.a.createElement(
            "div",
            { className: "input-container  license-plate-container" },
            r.a.createElement(
              "label",
              { htmlFor: "email", id: "label-email" },
              z.t("email"),
            ),
            r.a.createElement(
              "div",
              { className: "input-clear-container" },
              r.a.createElement("span", { id: "email" }, t),
            ),
          );
        }),
        Eo = Object(s.b)(function (e) {
          var t = e.settings,
            a = t.threshold,
            n = t.locale,
            r = e.form,
            o = r.warnOnLowBalance,
            i = r.thresholdEuro,
            c = r.thresholdMinutes,
            s = r.thresholdTimes,
            l = o ? o.value : void 0,
            u = i ? i.value : a.euro,
            d = c ? c.value : a.minutes,
            m = s ? s.value : a.times;
          return (
            l || (l = e.settings.warnOnLowBalance),
            {
              warnOnLowBalanceValue: l,
              thresholdEuroValue: u,
              thresholdMinutesValue: d,
              thresholdTimesVale: m,
              threshold: a,
              locale: n,
            }
          );
        }, null),
        bo =
          (Object(m.b)(Eo)(function (e) {
            var t = e.warnOnLowBalanceValue,
              a = e.thresholdEuroValue,
              o = e.thresholdMinutesValue,
              i = e.thresholdTimesVale,
              c =
                (e.threshold,
                [
                  { value: "Y", title: z.t("yes") },
                  { value: "N", title: z.t("no") },
                ]),
              s = function (e) {
                return e && "" !== e
                  ? e && e <= 0
                    ? "value_should_be_greater_than_0"
                    : void 0
                  : "value_empty_message";
              };
            return r.a.createElement(
              "div",
              { className: "warn-on-low-balance-container" },
              r.a.createElement(
                "div",
                { className: "warn-on-low-radio-container" },
                r.a.createElement(_o, {
                  name: "warnOnLowBalance",
                  label: z.t("warn_on_low_balance"),
                  list: c,
                  value: t,
                  defaultValue: t,
                }),
              ),
              "Y" === t &&
                r.a.createElement(
                  n.Fragment,
                  null,
                  r.a.createElement(Ia, {
                    name: "thresholdEuro",
                    label: z.t("warn_if_balance_below_euro"),
                    value: a,
                    units: !0,
                    validator: function (e) {
                      return s(e);
                    },
                  }),
                  r.a.createElement(Ia, {
                    name: "thresholdMinutes",
                    label: z.t("warn_if_balance_below_minutes"),
                    value: o,
                    units: !0,
                    validator: function (e) {
                      return s(e);
                    },
                  }),
                  r.a.createElement(Ia, {
                    name: "thresholdTimes",
                    label: z.t("warn_if_balance_below_times"),
                    value: i,
                    units: !0,
                    validator: function (e) {
                      return s(e);
                    },
                  }),
                ),
            );
          }),
          Object(m.c)({
            componentWillMount: function () {
              var e = this.props,
                t = e.history,
                a = e.initialize;
              e.selectProductIsVisited || a(t, !1, !0);
            },
            componentWillUnmount: function () {
              (this.props.onSelectProductIsVisited(!1),
                this.props.productSelected !==
                  this.props.settingsProductSelect &&
                  this.props.onChangeSelectedProduct(
                    this.props.settingsProductSelect,
                  ));
            },
          })),
        Ao = Object(s.b)(
          function (e) {
            var t = e.settings.locale;
            return {
              productSelected: e.startingProduct.productSelected,
              settingsProductSelect: e.settings.selectedProduct,
              selectProductIsVisited: e.startingProduct.selectProductIsVisited,
              locale: t,
            };
          },
          {
            onSaveSettings: function () {
              return function (e, t) {
                var a = t().settings.selectedProduct,
                  n = t().form,
                  r = n.name,
                  o = n.startingProduct,
                  i = r ? r.value : void 0,
                  c = o ? o.value : void 0;
                ((i && "" !== i) || (i = z.t("my_name")),
                  H.setItem("startingProduct", c),
                  H.setItem("name", i),
                  H.setItem("selectedProduct", a),
                  e(Z(i, c, a)));
              };
            },
            onThemeChanged: se,
            onSelectedProduct: te,
            initialize: Rt,
            onSelectProductIsVisited: yt,
            onChangeSelectedProduct: Nt,
          },
        ),
        To = Object(m.b)(Ao, Ra.a, bo)(function (e) {
          var t = e.onSaveSettings,
            a = e.history,
            o = e.onSelectedProduct,
            i = e.productSelected;
          return r.a.createElement(tr, {
            screenClass: "settings-screen",
            showProductInformation: !1,
            titleArea: z.t("settings"),
            singleLineHeader: !0,
            bodyArea: r.a.createElement(
              n.Fragment,
              null,
              r.a.createElement(
                "div",
                { className: "parkapp-form settings-form" },
                r.a.createElement(ho, null),
                r.a.createElement(uo, { selectedProduct: i }),
              ),
            ),
            actionArea: r.a.createElement(
              "button",
              {
                className: "button submit",
                onClick: function () {
                  (o(i), t(), a.push("/"));
                },
                "aria-label": z.t("button_save"),
              },
              z.t("button_save"),
            ),
          });
        }),
        Oo = function (e, t) {
          var a = dt(t),
            n = mt(t);
          return "extend" === e
            ? z.t("extend_parking_action")
            : "edit-planned" === e
              ? z.t("edit_planned_parking_action")
              : -1 === a && -1 !== n
                ? z.t("new_activation")
                : z.t("new_parking_action");
        },
        No = Object(s.b)(
          function (e) {
            var t = e.settings,
              a = t.startingProduct,
              n = t.currentProduct,
              r = t.locale,
              o = n || a,
              i = (void 0 !== e.data.products ? e.data.products : []).find(
                function (e) {
                  return e.value === o;
                },
              ),
              c = i && i.byGrant ? i.byGrant : void 0,
              s = i && i.location ? i.location.prr_options : void 0,
              l = i && i.options ? i.options : void 0,
              u = i ? i.isGeofencing : "false";
            return {
              withoutAlternates: e.parkingActions.withoutAlternates,
              startDateTime: e.parkingActions.startDateTime,
              grant: c,
              locationOptions: s,
              targetProduct: o,
              selectedProduct: i,
              productOptions: l,
              locale: r,
              isGeofencing: u,
              isUserGeofenceLocations: e.main.isUserGeofenceLocations,
            };
          },
          {
            onFormFieldClearValue: B,
            onClearStartEndDateTime: et,
            onInitializeStartDateTime: Xe,
            onInitializeFormField: W,
          },
        ),
        yo = Object(m.b)(No, Ra.a)(function (e) {
          var t = e.match,
            a = e.history,
            o = e.onFormFieldClearValue,
            i = e.onClearStartEndDateTime,
            c = e.grant,
            s = e.locationOptions,
            l = e.targetProduct,
            u = e.productOptions,
            d = e.startDateTime,
            m = e.onInitializeStartDateTime,
            _ = e.onInitializeFormField,
            p = e.isGeofencing,
            f = e.isUserGeofenceLocations;
          return (
            Object(n.useLayoutEffect)(
              function () {
                "create" === t.params.type &&
                  (c &&
                    c.member_ident &&
                    "" !== c.member_ident &&
                    _("newParkingActions_license_plate", c.member_ident),
                  d
                    ? (function (e) {
                        var t = fe()(e),
                          a = fe()();
                        if (t.year() < a.year()) return !0;
                        if (t.year() === a.year()) {
                          if (t.month() < a.month()) return !0;
                          if (t.month() === a.month()) {
                            if (t.date() < a.date()) return !0;
                            if (t.date() === a.date()) {
                              if (t.hours() < a.hours()) return !0;
                              if (
                                t.hours() === a.hours() &&
                                t.minutes() < a.minutes()
                              )
                                return !0;
                            }
                          }
                        }
                        return !1;
                      })(fe()(d, "DD-MM-YYYY HH:mm")) && m()
                    : d || m());
              },
              [c, t, _, m, d],
            ),
            r.a.createElement(tr, {
              screenClass: "new-parking-actions-container",
              showBackButton: !0,
              titleArea: Oo(t.params.type, u),
              titleAreaClick: function () {
                (o("newParkingActions_license_plate"),
                  o("newParkingActions_name_favorite"),
                  o("newParkingActions_location"),
                  i(),
                  a.push("/"));
              },
              bodyArea: r.a.createElement(
                "div",
                { className: "newParkingActionsContainer" },
                r.a.createElement(Xr, {
                  grant: c,
                  locationOptions: s,
                  productOptions: u,
                  isGeofencing: p,
                  isUserGeofenceLocations: f,
                }),
              ),
              actionArea: r.a.createElement(Qr, {
                grant: c,
                locationOptions: s,
                targetProduct: l,
                productOptions: u,
                isGeofencing: p,
                isUserGeofenceLocations: f,
              }),
            })
          );
        }),
        Io = a(492),
        Co = a.n(Io),
        So = a(498),
        wo = a(496),
        ko = (function (e) {
          Object(So.a)(a, e);
          var t = Object(wo.a)(a);
          function a() {
            return (Object(b.a)(this, a), t.apply(this, arguments));
          }
          return (
            Object(A.a)(a, [
              {
                key: "render",
                value: function () {
                  var e =
                    fe()().format("DD MMM YYYY") ===
                    fe()(this.props.value, "DD MMM YYYY").format("DD MMM YYYY")
                      ? z.t("today")
                      : this.props.value;
                  return r.a.createElement(
                    "div",
                    { className: "datepicker-container" },
                    r.a.createElement(
                      "div",
                      { className: "datepicker-label" },
                      this.props.label &&
                        r.a.createElement("span", null, this.props.label),
                    ),
                    r.a.createElement(
                      "button",
                      {
                        className: "datepicker-button",
                        autoFocus: !0,
                        onClick: this.props.onClick,
                        "aria-label": z.t("choose_date"),
                      },
                      e,
                    ),
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Po = function (e) {
          return e && "" !== e
            ? fe()(e, "DD-MM-YYYY HH:mm:ss").second(0)
            : fe()().second(0);
        },
        Do = function (e, t, a) {
          var n = null,
            r = null;
          (a && (n = fe()(a, "DD-MM-YYYY HH:mm:ss")),
            t && (r = fe()(t, "DD-MM-YYYY HH:mm:ss")));
          var o = r ? r.hours() : 0,
            i = r ? r.minutes() : 0;
          if ("create" === e.params.type && "start" === e.params.dateTime)
            return fe()(t, "DD-MM-YYYY, HH:mm:ss");
          if ("create" === e.params.type && "end" === e.params.dateTime) {
            if (null !== n && 23 === n.hours() && 59 === n.minutes())
              return n.hours(o).minutes(i);
            if (null !== n) return n;
            if (null === n) return fe()();
          }
          return "start" === e.params.dateTime ? Po(t) : Po(a);
        },
        jo = {
          onDateTimeChange: function (e) {
            e.dateTime;
            return function (e) {
              return { dateTime: e };
            };
          },
          onHoursIncrease: function (e) {
            var t = e.hours;
            return function () {
              var e = Number(t);
              if (23 === e) return { hours: "00" };
              var a = ++e;
              return { hours: a < 10 ? "0".concat(a) : a };
            };
          },
          onHoursDecrease: function (e) {
            var t = e.hours;
            return function () {
              var e = Number(t);
              if (0 === e) return { hours: 23 };
              var a = --e;
              return { hours: a < 10 ? "0".concat(a) : a };
            };
          },
          onMinutesIncrease: function (e) {
            var t = e.minutes;
            return function () {
              var e = Number(t);
              if (59 === e) return { minutes: "00" };
              var a = ++e;
              return { minutes: a < 10 ? "0".concat(a) : a };
            };
          },
          onMinutesDecrease: function (e) {
            var t = e.minutes;
            return function () {
              var e = Number(t);
              if (0 === e) return { minutes: 59 };
              var a = --e;
              return { minutes: a < 10 ? "0".concat(a) : a };
            };
          },
          onHoursChange: function () {
            return function (e) {
              if (e.length < 3 && e < 24 && e > -1) return { hours: e };
            };
          },
          onMinutesChange: function () {
            return function (e) {
              if (e.length < 3 && e < 60 && e > -1) return { minutes: e };
            };
          },
          onBlurHours: function () {
            return function (e) {
              return e || 0 === e
                ? e && e < 10
                  ? { hours: "0".concat(Number(e)) }
                  : void 0
                : { hours: fe()().format("HH") };
            };
          },
          onBlurMinutes: function () {
            return function (e) {
              return e || 0 === e
                ? e && e < 10
                  ? { minutes: "0".concat(Number(e)) }
                  : void 0
                : { minutes: fe()().format("mm") };
            };
          },
        },
        Lo = function (e) {
          var t = e.params;
          if (t) {
            if ("start" === t.dateTime) return z.t("label_start_date");
            if ("end" === t.dateTime) return z.t("label_end_date");
          }
        },
        Mo = function (e) {
          var t = e.params;
          if (t) {
            if ("start" === t.dateTime) return z.t("label_start_time");
            if ("end" === t.dateTime) return z.t("label_end_time");
          }
        },
        Ro = function (e, t) {
          var a = e.params,
            n = a.dateTime;
          return "create" === a.type && "end" === n
            ? new Date(fe()(t, "DD-MM-YYYY HH:mm:ss"))
            : new Date();
        },
        Fo = Object(s.b)(
          function (e) {
            var t = e.parkingActions,
              a = t.endDateTime;
            return {
              startDateTime: t.startDateTime,
              endDateTime: a,
              currentEndDateTimeActiveActions:
                t.currentEndDateTimeActiveActions,
              locale: e.settings.locale,
            };
          },
          { onChangeEndDateTime: Be, onChangeStartDateTime: Ve },
        ),
        Uo = Object(m.b)(
          Fo,
          Ra.a,
          Object(m.e)(function (e) {
            var t = e.match,
              a = e.startDateTime,
              n = e.endDateTime;
            return {
              dateTime: new Date(Do(t, a, n)),
              hours: fe()(Do(t, a, n)).format("HH"),
              minutes: fe()(Do(t, a, n)).format("mm"),
            };
          }, jo),
        )(function (e) {
          var t = e.history,
            a = e.match,
            n = e.onDateTimeChange,
            o = e.onHoursIncrease,
            i = e.onHoursDecrease,
            c = e.onMinutesIncrease,
            s = e.onMinutesDecrease,
            l = e.dateTime,
            u = e.onChangeStartDateTime,
            d = e.onChangeEndDateTime,
            m = e.startDateTime,
            _ = e.endDateTime,
            p = e.hours,
            f = e.minutes,
            g = e.onHoursChange,
            v = e.onMinutesChange,
            h = e.onBlurHours,
            E = e.onBlurMinutes,
            b = e.currentEndDateTimeActiveActions,
            A = function (e, t, n) {
              var r = fe()(e, "DD-MM-YYYY HH:mm:ss"),
                o = fe()(n, "DD-MM-YYYY HH:mm:ss");
              if ("extend" !== a.params.type) {
                var i = t
                  ? fe()(t).hour(p).minute(f).second(0)
                  : fe()().second(0);
                if (
                  t &&
                  !(function (e, t) {
                    var a = fe()(e),
                      n = fe()(t);
                    if (a.year() < n.year()) return !0;
                    if (a.year() === n.year()) {
                      if (a.month() < n.month()) return !0;
                      if (a.month() === n.month()) {
                        if (a.date() < n.date()) return !0;
                        if (a.date() === n.date()) {
                          if (a.hours() < n.hours()) return !0;
                          if (
                            a.hours() === n.hours() &&
                            a.minutes() < n.minutes()
                          )
                            return !0;
                        }
                      }
                    }
                    return !1;
                  })(i, r)
                ) {
                  var c = i.format("DD-MM-YYYY HH:mm:ss");
                  d(c);
                } else {
                  var s = t
                    ? fe()(r)
                        .add(1, "h")
                        .second(0)
                        .format("DD-MM-YYYY HH:mm:ss")
                    : fe()().second(0).format("DD-MM-YYYY HH:mm:ss");
                  d(s);
                }
              } else if (
                "extend" === a.params.type &&
                "end" === a.params.dateTime
              ) {
                var l = fe()(b, "DD-MM-YYYY HH:mm:ss"),
                  u = fe()(t).hour(p).minute(f),
                  m = (function (e, t, a) {
                    var n = fe()().second(0);
                    return a > t || e > t || n > t;
                  })(l, u, r);
                if (t && !m) {
                  var _ = (function (e) {
                    return (
                      23 === e.hour() && 59 === e.minute() && e.second(59),
                      e
                    );
                  })(u).format("DD-MM-YYYY HH:mm:ss");
                  d(_);
                } else {
                  var g = fe()(o).add(1, "h").format("DD-MM-YYYY HH:mm:ss");
                  d(g);
                }
              }
            },
            T = [
              z.t("january"),
              z.t("february"),
              z.t("march"),
              z.t("april"),
              z.t("may"),
              z.t("june"),
              z.t("july"),
              z.t("august"),
              z.t("september"),
              z.t("october"),
              z.t("november"),
              z.t("december"),
            ],
            O = [
              z.t("su"),
              z.t("mo"),
              z.t("tu"),
              z.t("we"),
              z.t("Th"),
              z.t("fr"),
              z.t("sa"),
            ],
            N = {
              localize: {
                month: function (e) {
                  return T[e];
                },
                day: function (e) {
                  return O[e];
                },
              },
              formatLong: {},
            };
          return r.a.createElement(tr, {
            showBackButton: !0,
            titleArea: z.t("select_date_time"),
            titleAreaClick: function () {
              t.push("/parking-actions-form/" + a.params.type);
            },
            bodyArea: r.a.createElement(
              "div",
              { className: "selectDateTime-container" },
              r.a.createElement(
                "div",
                { className: "datePicker-container" },
                r.a.createElement(Co.a, {
                  customInput: r.a.createElement(ko, { label: Lo(a) }),
                  autoFocus: !0,
                  selected: new Date(l),
                  locale: N,
                  onChange: function (e) {
                    var t = fe()(new Date(e)).second(0);
                    n(t);
                  },
                  dateFormat: "dd MMM yyyy",
                  outsideClickIgnoreClass: !0,
                  minDate: Ro(a, m),
                }),
              ),
              r.a.createElement(
                "div",
                { className: "time-buttons-container" },
                r.a.createElement(
                  "div",
                  { className: "datepicker-label" },
                  r.a.createElement("span", null, Mo(a)),
                ),
                r.a.createElement(
                  "div",
                  { className: "time-buttons" },
                  r.a.createElement(
                    "div",
                    { className: "hours-buttons" },
                    r.a.createElement(
                      "button",
                      {
                        className: "parkapp-button gray-button",
                        onClick: function () {
                          o();
                        },
                        "aria-label": z.t("increase_hours"),
                      },
                      "+",
                    ),
                    r.a.createElement("input", {
                      value: p,
                      className: "time-value",
                      onClick: function (e) {
                        e.target.select();
                      },
                      "aria-label": "Hours",
                      onBlur: function () {
                        return h(p);
                      },
                      onChange: function (e) {
                        var t = e.target.value;
                        g(t);
                      },
                    }),
                    r.a.createElement(
                      "button",
                      {
                        className: "parkapp-button gray-button",
                        onClick: function () {
                          i();
                        },
                        "aria-label": z.t("decrease_hours"),
                      },
                      "-",
                    ),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "minutes-buttons" },
                    r.a.createElement(
                      "button",
                      {
                        className: "parkapp-button gray-button",
                        onClick: function () {
                          c();
                        },
                        "aria-label": z.t("increase_minutes"),
                      },
                      "+",
                    ),
                    r.a.createElement("input", {
                      value: f,
                      className: "time-value",
                      onClick: function (e) {
                        e.target.select();
                      },
                      "aria-label": "Minutes",
                      onBlur: function () {
                        return E(f);
                      },
                      onChange: function (e) {
                        var t = e.target.value;
                        v(t);
                      },
                    }),
                    r.a.createElement(
                      "button",
                      {
                        className: "parkapp-button gray-button",
                        onClick: function () {
                          s();
                        },
                        "aria-label": z.t("decrease_minutes"),
                      },
                      "-",
                    ),
                  ),
                ),
              ),
            ),
            actionArea: r.a.createElement(
              "button",
              {
                className: "btn-start submit",
                onClick: function () {
                  ("start" === a.params.dateTime &&
                    (function (e) {
                      var t = e
                        ? fe()(e).hour(p).minute(f).second(0)
                        : fe()().second(0);
                      if (
                        (u(t.format("DD-MM-YYYY HH:mm:ss")),
                        t > fe()(_, "DD-MM-YYYY HH:mm:ss"))
                      ) {
                        var a = fe()(t, "DD-MM-YYYY HH:mm:ss");
                        (a.hours(23).minutes(59),
                          d(a.format("DD-MM-YYYY HH:mm:ss")));
                      }
                    })(l),
                    "end" === a.params.dateTime && A(m, l, _),
                    t.push("/parking-actions-form/" + a.params.type));
                },
                "aria-label": z.t("confirm"),
              },
              z.t("confirm"),
            ),
          });
        }),
        Ho = function (e) {
          var t = e.licensePlate,
            a = e.favorite,
            n = e.onClick;
          return r.a.createElement(
            _r,
            { onClick: n },
            r.a.createElement(
              "button",
              { className: "item-select-license-plate" },
              a && r.a.createElement(Tr, { name: a }),
              r.a.createElement(
                "div",
                { className: "".concat(a ? "" : "license-plate-warper") },
                r.a.createElement(cr, { licensePlate: t }),
              ),
            ),
          );
        },
        xo = function (e) {
          var t = e.mbr_parameters.find(function (e) {
            return "NICKNAME" === e.prr_label;
          });
          return t ? t.prr_value.toLowerCase() : void 0;
        },
        zo = function (e) {
          return function (t, a) {
            t({ type: "ON_FAVORITES_REQUEST_STARTED" });
            var n = a().settings,
              r = n.startingProduct,
              o = n.currentProduct,
              i = n.locale,
              c = o || r;
            k()
              .getFavorites(c, i)
              .then(function (a) {
                if ("OK" === a.status.code.major) {
                  var n = a.data.pdt_members;
                  ((n = n.filter(function (e) {
                    return e.mbr_parameters.length > 0;
                  })).length > 0 &&
                    n.sort(function (e, t) {
                      return xo(e).localeCompare(xo(t));
                    }),
                    t({ type: "ON_FAVORITES_REQUEST_SUCCESS" }),
                    t({
                      type: "ON_FAVORITES_RETRIEVED_SUCCESS",
                      favorites: n,
                    }));
                } else
                  "FAIL" === a.status.code.major &&
                  "SESSION_TIMEOUT" === a.status.code.minor
                    ? (t({ type: "ON_FAVORITES_REQUEST_FAILED" }), t(ha(e)))
                    : t({ type: "ON_FAVORITES_REQUEST_FAILED" });
              })
              .catch(function (e) {
                return t({ type: "ON_FAVORITES_REQUEST_FAILED" });
              });
          };
        },
        Yo = function (e) {
          return {
            type: "ON_FAVORITE_DELETE_SUCCESS",
            currentFavoriteIdentifier: e,
          };
        },
        Go = Object(m.c)({
          componentDidMount: function () {
            var e = this.props;
            (0, e.onFavoritesLoad)(e.history);
          },
        }),
        Vo = Object(s.b)(
          function (e) {
            var t = e.form.search_favorite,
              a = e.favorites.list,
              n = e.selectLicensePlate.licensePlates,
              r = (function (e, t) {
                var a = [];
                return (
                  t.length > 0 &&
                    t.forEach(function (t) {
                      e.find(function (e) {
                        return e.mbr_identifier === t;
                      }) || a.push(t);
                    }),
                  a
                );
              })(a, n);
            return {
              currentSearchValue: t ? t.value : void 0,
              favorites: a,
              listLicensePlate: n,
              recentList: r,
            };
          },
          {
            onInitializeFormField: W,
            onTabButtonPressed: ce,
            onFavoritesLoad: zo,
          },
        ),
        Bo = Object(m.b)(Vo, Ra.a, Go)(function (e) {
          var t = e.type,
            a = e.history,
            n = e.match,
            o = e.onInitializeFormField,
            i = e.currentSearchValue,
            c = e.listLicensePlate,
            s = e.favorites,
            l = e.recentList,
            u = function (e, t) {
              (o("newParkingActions_license_plate", e),
                o("newParkingActions_name_favorite", t),
                a.push("/parking-actions-form/" + n.params.type));
            };
          return r.a.createElement(
            "div",
            { className: "selectLicensePlateItem" },
            s.length > 0 &&
              "favorite" === t &&
              (function () {
                var e,
                  t =
                    ((e = s),
                    i && "" !== i
                      ? e.filter(function (e) {
                          var t = e.mbr_parameters.find(function (e) {
                            return "NICKNAME" === e.prr_label;
                          }).prr_value;
                          return (
                            -1 !==
                              e.mbr_identifier
                                .toLowerCase()
                                .search(i.toLowerCase()) ||
                            -1 !== t.toLowerCase().search(i.toLowerCase())
                          );
                        })
                      : e);
                return (t = t.map(function (e, t) {
                  var a =
                    e.mbr_parameters.length > 0 &&
                    e.mbr_parameters[0].prr_value;
                  return (
                    a &&
                    r.a.createElement(Ho, {
                      key: t,
                      licensePlate: e.mbr_identifier,
                      favorite: a,
                      onClick: function () {
                        u(e.mbr_identifier, a);
                      },
                    })
                  );
                }));
              })(),
            0 === s.length &&
              "favorite" === t &&
              r.a.createElement(
                "div",
                { className: "action-not-found" },
                r.a.createElement(
                  "h2",
                  { style: { textAlign: "center" } },
                  z.t("favorite_not_found"),
                ),
              ),
            c &&
              c.length > 0 &&
              "recent" === t &&
              (function () {
                var e,
                  t =
                    ((e = l),
                    i && "" !== i
                      ? e.filter(function (e) {
                          return -1 !== e.toLowerCase().search(i.toLowerCase());
                        })
                      : e);
                return (t = t.map(function (e, t) {
                  return r.a.createElement(Ho, {
                    key: t,
                    licensePlate: e,
                    onClick: function () {
                      u(e, void 0);
                    },
                  });
                }));
              })(),
            c &&
              0 === c.length &&
              "recent" === t &&
              r.a.createElement(
                "div",
                { className: "action-not-found" },
                r.a.createElement(
                  "h2",
                  { style: { textAlign: "center" } },
                  z.t("recent_not_found"),
                ),
              ),
          );
        }),
        Wo = Object(m.c)({
          componentWillUnmount: function () {
            (0, this.props.onFormFieldClearValue)("search_favorite");
          },
        }),
        Ko = Object(s.b)(
          function (e) {
            var t = e.form.search_favorite;
            return {
              currentSearchLicensePlate: t ? t.value : void 0,
              locale: e.settings.locale,
            };
          },
          { onFormFieldValueChanged: V, onFormFieldClearValue: B },
        ),
        Zo = Object(m.b)(Ko, Ra.a, Wo)(function (e) {
          var t = e.history,
            a = e.match,
            n = e.currentSearchLicensePlate;
          return r.a.createElement(Or, {
            value: n,
            nameField: "search_favorite",
            onClickCancel: function () {
              return t.push("/parking-actions-form/" + a.params.type);
            },
          });
        }),
        Qo = Object(m.c)({
          componentWillUnmount: function () {
            (0, this.props.onFormFieldClearValue)("search_on_license_plate");
          },
        }),
        Jo = Object(s.b)(
          function (e) {
            var t = e.form.search_on_license_plate;
            return {
              currentSearchLicensePlate: t ? t.value : void 0,
              locale: e.settings.locale,
            };
          },
          { onFormFieldValueChanged: V, onFormFieldClearValue: B },
        ),
        qo = Object(m.b)(Jo, Ra.a, Qo)(function (e) {
          var t = e.history,
            a = e.match,
            n = e.currentSearchLicensePlate;
          return r.a.createElement(Or, {
            value: n,
            nameField: "search_on_license_plate",
            onClickCancel: function () {
              return t.push("/parking-actions-form/" + a.params.type);
            },
          });
        }),
        Xo = ["favorite", "recent"],
        $o = Object(m.c)({
          componentDidMount: function () {
            var e = this.props;
            (0, e.getLicensePlate)(e.history);
          },
        }),
        ei = Object(s.b)(
          function (e) {
            return {
              activeTab: e.ui.activeTab,
              progress: e.selectLicensePlate.progress,
              startDateTime: e.parkingActions.startDateTime,
              locale: e.settings.locale,
            };
          },
          {
            onTabButtonPressed: ce,
            getLicensePlate: function (e) {
              return function (e, t) {
                var a = t().settings,
                  n = a.startingProduct,
                  r = a.currentProduct,
                  o = a.locale,
                  i = r || n;
                (e({ type: "GET_LICENSE_PLATE_fETCH_START" }),
                  w()
                    .getParkingHistory(i, o)
                    .then(function (t) {
                      if ("OK" === t.status.code.major) {
                        var a = [];
                        if (t.data) {
                          var n = t.data;
                          if (n.actions.length > 0)
                            (n.actions.map(function (e) {
                              var t = e.atn_parameters;
                              t.length > 0 &&
                                "" !== t[0].prr_value &&
                                a.push(t[0].prr_value);
                            }),
                              (a = a.filter(function (e, t, a) {
                                return a.indexOf(e) === t;
                              })));
                        }
                        e({
                          type: "GET_LICENSE_PLATE_SUCCESS",
                          licensePlate: a,
                        });
                      } else
                        ("FAIL" === t.status.code.major && t.status.code.minor,
                          e({ type: "GET_LICENSE_PLATE_FAILED" }));
                    })
                    .catch(function () {
                      return e({ type: "GET_LICENSE_PLATE_FAILED" });
                    }));
              };
            },
          },
        ),
        ti = Object(m.b)(ei, Ra.a, $o)(function (e) {
          var t = e.activeTab,
            a = e.progress,
            o = e.history,
            i = e.match;
          return r.a.createElement(tr, {
            screenClass: "select-license-plate-screen",
            pageList: !0,
            titleArea: z.t("select_license_plate"),
            showBackButton: !0,
            titleAreaClick: function () {
              o.push("/parking-actions-form/" + i.params.type);
            },
            tabsArea: r.a.createElement(rr, { tabs: Xo }),
            bodyArea: r.a.createElement(
              "div",
              { className: "selectLicensePlateContainer" },
              !a &&
                r.a.createElement(
                  n.Fragment,
                  null,
                  r.a.createElement(Zo, null),
                  0 === t && r.a.createElement(Bo, { type: "favorite" }),
                  1 === t && r.a.createElement(Bo, { type: "recent" }),
                ),
              a && r.a.createElement("div", { className: "loader" }),
            ),
          });
        }),
        ai = a(143),
        ni = function (e) {
          var t = e.location;
          return r.a.createElement(
            n.Fragment,
            null,
            t &&
              r.a.createElement(
                "div",
                { className: "parking-action-location" },
                t,
              ),
          );
        },
        ri = function (e) {
          var t = fe()().format("DD-MM-YYYY"),
            a = fe()().subtract(1, "days").format("DD-MM-YYYY"),
            n = fe()().add(1, "days").format("DD-MM-YYYY"),
            o = fe()(e, "DD-MM-YYYY").format("DD-MM-YYYY"),
            i =
              e.split(" ")[0].split("-")[0] +
              " " +
              z
                .t("month_".concat(e.split(" ")[0].split("-")[1] - 1))
                .replace(".", ""),
            c = fe()().format("YYYY"),
            s = fe()(e, "DD-MM-YYYY").format("YYYY"),
            l = "".concat(
              t === o
                ? z.t("today")
                : a === o
                  ? z.t("yesterday")
                  : n === o
                    ? z.t("tomorrow")
                    : i,
            );
          return (
            c !== s && (l += " " + s),
            r.a.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: "<span>"
                  .concat(
                    fe()(e, "DD-MM-YYYY HH:mm").format("HH:mm"),
                    ",&nbsp;</span><span> ",
                  )
                  .concat(l, "</span>"),
              },
            })
          );
        },
        oi = function (e, t, a) {
          var n = "",
            r = "",
            o = "",
            i = "";
          if (
            (e &&
              "" !== e &&
              ((n = e[t].prr_value ? e[t].prr_value : ""),
              (r = e[a].prr_value ? e[a].prr_value : "")),
            "#" === r)
          ) {
            var c =
              1 === Math.abs(Math.floor(n)) ? z.t("action") : z.t("actions");
            return "".concat(Math.floor(n), " ").concat(c);
          }
          if ("Minuut" === r) {
            var s = n.split(".");
            return (
              (o = Math.trunc(s[0] / 60)),
              (i = s[0] % 60),
              "".concat(o).concat(z.t("hours_abbreviated"), " ").concat(i, "m")
            );
          }
          if ("\u20ac" === r)
            return (
              r +
              " " +
              n
                .split("")
                .map(function (e, t) {
                  return t ===
                    ((n.split(".")[0].length % 3) - 1 === -1
                      ? 2
                      : (n.split(".")[0].length % 3) - 1) &&
                    n.split(".")[0].length > 3
                    ? e + "."
                    : "." === e
                      ? ","
                      : e;
                })
                .join("")
            );
        },
        ii = function (e) {
          var t = e.data,
            a = e.startActionParameters,
            o = e.costAllChained,
            i = e.optionsNoBalance,
            c = e.index,
            s = t[3] ? t[3].prr_value : void 0,
            l = Object(ai.a)(t);
          return (
            (o || 0 === o) && (l[4].prr_value = Number(o).toFixed(2)),
            r.a.createElement(
              _r,
              { tabIndex: (5 + c).toString() },
              r.a.createElement(
                "div",
                { className: "parking-history-wrapper" },
                r.a.createElement(
                  "div",
                  { className: "left-item-container" },
                  t[0].prr_value &&
                    r.a.createElement(cr, { licensePlate: t[0].prr_value }),
                  r.a.createElement(
                    "div",
                    { className: "parking-history-price" },
                    !a &&
                      t[4] &&
                      r.a.createElement(
                        n.Fragment,
                        null,
                        r.a.createElement("div", {
                          className: "balance-icon ".concat(
                            i ? "hide" : "show",
                          ),
                        }),
                        r.a.createElement(
                          "span",
                          null,
                          i ? "" : oi(t, 4, 5),
                          " ",
                        ),
                      ),
                    a &&
                      (o || 0 === o) &&
                      r.a.createElement(
                        n.Fragment,
                        null,
                        r.a.createElement("div", {
                          className: "balance-icon ".concat(
                            i ? "hide" : "show",
                          ),
                        }),
                        r.a.createElement(
                          "span",
                          null,
                          i ? "" : oi(l, 4, 5),
                          " ",
                        ),
                      ),
                  ),
                ),
                r.a.createElement(
                  "div",
                  { className: "right-item-container" },
                  r.a.createElement(
                    "div",
                    { className: "parking-history-time" },
                    !a &&
                      r.a.createElement(
                        "div",
                        { className: "timeStartEnd-container" },
                        r.a.createElement(
                          "div",
                          { className: "timeStartEnd-clocks" },
                          r.a.createElement("div", { className: "dots" }),
                          r.a.createElement("div", { className: "dots" }),
                          r.a.createElement("div", { className: "dots" }),
                          r.a.createElement("div", { className: "dots" }),
                          r.a.createElement("div", { className: "dots" }),
                        ),
                        r.a.createElement(
                          "div",
                          { className: "time-container" },
                          r.a.createElement(
                            "div",
                            { className: "time" },
                            " ",
                            ri(t[1].prr_value),
                          ),
                          r.a.createElement(
                            "div",
                            { className: "time" },
                            "  ",
                            ri(t[2].prr_value),
                          ),
                        ),
                      ),
                    a &&
                      r.a.createElement(
                        "div",
                        { className: "timeStartEnd-container" },
                        r.a.createElement(
                          "div",
                          { className: "timeStartEnd-clocks" },
                          r.a.createElement("div", { className: "dots" }),
                          r.a.createElement("div", { className: "dots" }),
                          r.a.createElement("div", { className: "dots" }),
                          r.a.createElement("div", { className: "dots" }),
                          r.a.createElement("div", { className: "dots" }),
                        ),
                        r.a.createElement(
                          "div",
                          { className: "time-container" },
                          r.a.createElement(
                            "div",
                            { className: "time" },
                            " ",
                            ri(a[1].prr_value),
                          ),
                          r.a.createElement(
                            "div",
                            { className: "time" },
                            "  ",
                            ri(t[2].prr_value),
                          ),
                        ),
                      ),
                  ),
                ),
                r.a.createElement(ni, { location: s }),
              ),
            )
          );
        },
        ci = function (e) {
          var t = e.data,
            a = e.index;
          return r.a.createElement(
            _r,
            { tabIndex: (5 + a).toString() },
            r.a.createElement(
              "div",
              { className: "transaction-history-wrapper" },
              r.a.createElement(
                "div",
                { className: "transaction-history-container" },
                r.a.createElement(
                  "div",
                  { className: "left-item-container" },
                  r.a.createElement(
                    "p",
                    {
                      className: "name ".concat(
                        "Afboeking" === t[0].prr_value ? "red" : "green",
                      ),
                    },
                    t[0].prr_value,
                  ),
                  "" !== t[4].prr_value &&
                    r.a.createElement(
                      "p",
                      { className: "transaction-lp" },
                      t[4].prr_value,
                    ),
                ),
                r.a.createElement(
                  "div",
                  { className: "right-item-container" },
                  r.a.createElement(
                    "p",
                    { className: "date" },
                    (function (e) {
                      var t = fe()().format("DD-MM-YYYY"),
                        a = fe()().subtract(1, "days").format("DD-MM-YYYY"),
                        n = fe()().add(1, "days").format("DD-MM-YYYY"),
                        o = fe()(e, "DD-MM-YYYY").format("DD-MM-YYYY"),
                        i =
                          e.split(" ")[0].split("-")[0] +
                          " " +
                          z
                            .t(
                              "month_".concat(
                                e.split(" ")[0].split("-")[1] - 1,
                              ),
                            )
                            .replace(".", ""),
                        c = fe()().format("YYYY"),
                        s = fe()(e, "DD-MM-YYYY").format("YYYY"),
                        l = "".concat(
                          t === o
                            ? z.t("today")
                            : a === o
                              ? z.t("yesterday")
                              : n === o
                                ? z.t("tomorrow")
                                : i,
                        );
                      return (
                        c !== s && (l += " " + s),
                        r.a.createElement("span", {
                          dangerouslySetInnerHTML: {
                            __html: "<span>"
                              .concat(
                                fe()(e, "DD-MM-YYYY HH:mm").format("HH:mm"),
                                ",&nbsp;</span><span> ",
                              )
                              .concat(l, "</span>"),
                          },
                        })
                      );
                    })(t[3].prr_value),
                  ),
                  r.a.createElement("p", { className: "price" }, oi(t, 1, 2)),
                ),
              ),
            ),
          );
        },
        si = function (e) {
          var t = e.text,
            a = e.onClick,
            n = e.disabled,
            o = void 0 !== n && n,
            i = e.className,
            c = e.showProgress;
          return r.a.createElement(
            "button",
            {
              className: "button submit ".concat(i),
              type: "button",
              disabled: o,
              onClick: a,
            },
            !c && t,
            c && r.a.createElement("div", { className: "button_loader" }),
          );
        },
        li = function (e, t, a) {
          var n = e,
            r = t || 0;
          return (
            a.forEach(function (e) {
              if (e.atn_chained_child_id === n) {
                n = e.atn_id;
                var t = e.atn_parameters[4] ? e.atn_parameters[4].prr_value : 0;
                r = Number(r) + Number(t);
              }
            }),
            { id: n, cost: r }
          );
        },
        ui = function () {
          return { type: "GET_PARKING_HISTORY_STARTED" };
        },
        di = function (e, t, a, n, r) {
          return {
            type: "GET_PARKING_HISTORY_SUCCESS",
            payload: e,
            startIndex: t,
            stopIndex: a,
            maxIndex: n,
            actionChained: r,
          };
        },
        mi = function (e) {
          return { type: "GET_PARKING_HISTORY_FAILED", payload: e };
        },
        _i = function (e, t, a, n) {
          return function (r, o) {
            var i = o().settings.locale,
              c = o().history,
              s = c.parkingHistory,
              l = c.parkingHistoryIndexes.actionChained ? [] : s;
            (r(hi()),
              w()
                .getParkingHistory(e, i, a, n)
                .then(function (e) {
                  if ("OK" === e.status.code.major) {
                    var a = Number(e.data.startindex),
                      n = Number(e.data.stopindex),
                      o = Number(e.data.maxindex);
                    (e.data.actions.forEach(function (e) {
                      l.push(e);
                    }),
                      r(di(l, a, n, o, !1)));
                  } else
                    "FAIL" === e.status.code.major &&
                    "SESSION_TIMEOUT" === e.status.code.minor
                      ? (r(mi(void 0)), r(ha(t)))
                      : r(mi(e.status.message));
                })
                .catch(function (e) {
                  return r(mi(e));
                }));
          };
        },
        pi = function (e, t, a, n) {
          return function (t, r) {
            var o = r().settings.locale,
              i = r().history.transactionHistory;
            (t(hi()),
              w()
                .getTransactionHistory(e, o, a, n)
                .then(function (e) {
                  if ("OK" === e.status.code.major) {
                    var a = Number(e.data.startindex),
                      n = Number(e.data.stopindex),
                      r = Number(e.data.maxindex);
                    (e.data.mutations.forEach(function (e) {
                      i.push(e.mtn_parameters);
                    }),
                      t(gi(i, a, n, r)));
                  } else
                    "FAIL" === e.status.code.major &&
                    "SESSION_TIMEOUT" === e.status.code.minor
                      ? t(vi(void 0))
                      : t(vi(e.status.message));
                })
                .catch(function (e) {
                  return t(vi(e));
                }));
          };
        },
        fi = function () {
          return { type: "GET_TRANSACTION_HISTORY_STARTED" };
        },
        gi = function (e, t, a, n) {
          return {
            type: "GET_TRANSACTION_HISTORY_SUCCESS",
            payload: e,
            startIndex: t,
            stopIndex: a,
            maxIndex: n,
          };
        },
        vi = function (e) {
          return { type: "GET_TRANSACTION_HISTORY_FAILED", payload: e };
        },
        hi = function () {
          return { type: "lOAD_MORE_FETCH" };
        },
        Ei = function () {
          return { type: "PARKING_HISTORY_END_LIST" };
        },
        bi = function () {
          return { type: "TRANSACTION_HISTORY_END_LIST" };
        },
        Ai = a(332),
        Ti = a.n(Ai),
        Oi = ["parking_actions", "transactions"],
        Ni = function () {
          return r.a.createElement(
            "div",
            { className: "load-more-loader-container" },
            r.a.createElement("div", { className: "load-more-loader" }),
          );
        },
        yi = Object(m.c)({
          componentDidMount: function () {
            var e = this.props,
              t = e.getParkingHistory,
              a = e.getTransactionHistory,
              n = e.productId,
              r = e.history,
              o = e.selectedProduct,
              i = e.changeActiveTab;
            (-1 !== ke(o.options) && i(0), t(n, r), a(n, r));
          },
          componentWillUnmount: function () {
            (0, this.props.removeIndexes)();
          },
        }),
        Ii = Object(s.b)(
          function (e) {
            var t = e.settings,
              a = t.startingProduct,
              n = t.currentProduct,
              r = t.locale,
              o = n || a,
              i = (void 0 !== e.data.products ? e.data.products : []).find(
                function (e) {
                  return e.value === o;
                },
              ),
              c = [],
              s = e.history,
              l = s.parkingHistory,
              u = s.transactionHistory,
              d = s.parkingHistoryEndList,
              m = s.transactionHistoryEndList,
              _ = s.parkingHistoryIndexes,
              p = s.transactionHistoryIndexes,
              f = _.maxIndex,
              g = p.maxIndex;
            return (
              c.push(f),
              c.push(g),
              {
                activeTab: e.ui.activeTab,
                productDetails: e.main.productDetails,
                productId: e.settings.currentProduct
                  ? e.settings.currentProduct
                  : e.form.startingProduct.value,
                progress: e.history.progress,
                parkingHistory: l,
                transactionHistory: u,
                error: e.history.error,
                tips: c,
                parkingHistoryIndexes: e.history.parkingHistoryIndexes,
                loadMoreProgress: e.history.loadMoreProgress,
                parkingHistoryEndList: d,
                transactionHistoryEndList: m,
                selectedProduct: i,
                senHistoryProgress: e.history.senHistoryProgress,
                startingProduct: a,
                currentProduct: n,
                locale: r,
              }
            );
          },
          {
            getParkingHistory: function (e, t) {
              return function (a, n) {
                var r = n().settings.locale,
                  o = n().history.parkingHistoryIndexes;
                (a(ui()),
                  w()
                    .getParkingHistory(e, r, o.startIndex, o.stopIndex)
                    .then(function (e) {
                      if ("OK" === e.status.code.major) {
                        var n = Number(e.data.startindex),
                          r = Number(e.data.stopindex),
                          o = Number(e.data.maxindex),
                          i = !1,
                          c = e.data.actions
                            .map(function (e, t, a) {
                              if ("NO" === e.atn_chained) return e;
                              if (
                                "YES" === e.atn_chained &&
                                ((i = !0), !e.atn_chained_child_id)
                              ) {
                                var n,
                                  r = e.atn_parameters[4]
                                    ? e.atn_parameters[4].prr_value
                                    : 0,
                                  o = li(e.atn_id, r, a).id,
                                  c = li(e.atn_id, r, a).cost;
                                return (
                                  o &&
                                    (n = a.find(function (e) {
                                      return e.atn_id === o;
                                    })),
                                  Object(E.a)(
                                    Object(E.a)({}, e),
                                    {},
                                    { parentProduct: n, costAllChained: c },
                                  )
                                );
                              }
                            })
                            .filter(function (e) {
                              return e;
                            });
                        (o < 10 && !i && a(Ei()), a(di(c, n, r, o, i)));
                      } else
                        "FAIL" === e.status.code.major &&
                        "SESSION_TIMEOUT" === e.status.code.minor
                          ? (a(mi(void 0)), a(ha(t)))
                          : (a(mi(e.status.message)),
                            f.toast.error(e.status.message));
                    })
                    .catch(function (e) {
                      (a(mi(e)), f.toast.error(e));
                    }));
              };
            },
            getTransactionHistory: function (e, t) {
              return function (t, a) {
                var n = a().settings.locale,
                  r = a().history.transactionHistoryIndexes;
                (t(fi()),
                  w()
                    .getTransactionHistory(e, n, r.startIndex, r.stopIndex)
                    .then(function (e) {
                      if ("OK" === e.status.code.major) {
                        var a = Number(e.data.startindex),
                          n = Number(e.data.stopindex),
                          r = Number(e.data.maxindex),
                          o = e.data.mutations.map(function (e) {
                            return e.mtn_parameters;
                          });
                        (r < 10 && t(bi()), t(gi(o, a, n, r)));
                      } else
                        "FAIL" === e.status.code.major &&
                        "SESSION_TIMEOUT" === e.status.code.minor
                          ? t(vi(void 0))
                          : (t(vi(e.status.message)),
                            f.toast.error(e.status.message));
                    })
                    .catch(function (e) {
                      (t(vi(e)), f.toast.error(e));
                    }));
              };
            },
            loadMoreParkingHistory: function (e, t) {
              return function (a, n) {
                var r = n().history.parkingHistoryIndexes,
                  o = r.stopIndex + 1,
                  i = r.stopIndex + 10;
                if (r.actionChained) {
                  a(_i(e, t, 1, i));
                } else
                  r.stopIndex < r.maxIndex
                    ? i < r.maxIndex
                      ? a(_i(e, t, o, i))
                      : i >= r.maxIndex && a(_i(e, t, o, r.maxIndex))
                    : (a(Ei()), f.toast.success(z.t("no_more_records_found")));
              };
            },
            loadMoreTransactionHistory: function (e, t) {
              return function (t, a) {
                var n = a().history.transactionHistoryIndexes,
                  r = n.stopIndex,
                  o = n.stopIndex + 9;
                n.stopIndex < n.maxIndex
                  ? o < n.maxIndex
                    ? t(pi(e, 0, r, o))
                    : o >= n.maxIndex && t(pi(e, 0, r, n.maxIndex))
                  : (t(bi()), f.toast.success(z.t("no_more_records_found")));
              };
            },
            removeIndexes: function () {
              return { type: "REMOVE_INDEXES" };
            },
            changeActiveTab: ne,
            sendActionHistoryEmail: function (e) {
              return function (t, a) {
                (t({ type: "SEND_HISTORY_EMAIL_FETCH" }),
                  w()
                    .sendActionHistoryMail()
                    .then(function (a) {
                      "OK" === a.status.code.major
                        ? (t({ type: "SEND_HISTORY_EMAIL_SUCCESS" }),
                          t(de(z.t("please_check_your_email"))))
                        : "FAIL" === a.status.code.major &&
                            "SESSION_TIMEOUT" === a.status.code.minor
                          ? (t({ type: "SEND_HISTORY_EMAIL_FAIL" }), t(ha(e)))
                          : (t({ type: "SEND_HISTORY_EMAIL_FAIL" }),
                            f.toast.error(a.status.message));
                    })
                    .catch(function (e) {
                      (f.toast.error(e),
                        t({ type: "SEND_HISTORY_EMAIL_FAIL" }));
                    }));
              };
            },
            sendMutationHistoryEmail: function (e) {
              return function (t, a) {
                (t({ type: "SEND_HISTORY_EMAIL_FETCH" }),
                  w()
                    .sendMutationHistoryMail()
                    .then(function (a) {
                      "OK" === a.status.code.major
                        ? (t({ type: "SEND_HISTORY_EMAIL_SUCCESS" }),
                          t(de(z.t("please_check_your_email"))))
                        : "FAIL" === a.status.code.major &&
                            "SESSION_TIMEOUT" === a.status.code.minor
                          ? (t({ type: "SEND_HISTORY_EMAIL_FAIL" }), t(ha(e)))
                          : (t({ type: "SEND_HISTORY_EMAIL_FAIL" }),
                            f.toast.error(a.status.message));
                    })
                    .catch(function (e) {
                      (f.toast.error(e),
                        t({ type: "SEND_HISTORY_EMAIL_FAIL" }));
                    }));
              };
            },
            setCurrentProduct: $,
          },
        ),
        Ci = Object(m.b)(Ii, Ra.a, yi)(function (e) {
          var t = e.activeTab,
            a = e.progress,
            o = e.parkingHistory,
            i = e.transactionHistory,
            c = e.error,
            s = e.tips,
            l = e.loadMoreParkingHistory,
            u = e.loadMoreTransactionHistory,
            d = e.setCurrentProduct,
            m = e.productId,
            _ = e.history,
            p = e.loadMoreProgress,
            f = e.parkingHistoryEndList,
            g = e.transactionHistoryEndList,
            v = e.selectedProduct,
            h = e.senHistoryProgress,
            E = e.sendActionHistoryEmail,
            b = e.sendMutationHistoryEmail,
            A = Object(n.useState)(window.innerWidth),
            T = Object(xa.a)(A, 2),
            O = T[0],
            N = T[1];
          Object(n.useEffect)(function () {
            return (
              window.addEventListener("resize", y),
              function () {
                window.removeEventListener("resize", y);
              }
            );
          }, []);
          var y = function () {
              N(window.innerWidth);
            },
            I = function (e) {
              return e.map(function (e, t, a) {
                return r.a.createElement(ii, {
                  key: t,
                  index: t,
                  data: e.atn_parameters,
                  startActionParameters:
                    e.parentProduct && e.parentProduct.atn_parameters,
                  costAllChained: e.costAllChained,
                  optionsNoBalance: -1 !== ke(v.options),
                });
              });
            },
            C = O < 768,
            S = new URLSearchParams(_.location.search),
            w = S.get("product");
          return r.a.createElement(tr, {
            showBackButton: !!w,
            titleAreaClick: function () {
              d(void 0);
              var e = S.get("ctyId");
              _.push("/other-products/".concat(e));
            },
            screenClass:
              "screen-fixed-footer \n                                            ".concat(
                -1 === ke(v.options)
                  ? "history-screen"
                  : "history-screen-no-balance",
              ),
            pageList: !0,
            tabsArea:
              -1 === ke(v.options)
                ? r.a.createElement(rr, {
                    tabsTitle: "history",
                    tabs: Oi,
                    tips: s,
                  })
                : null,
            titleArea: z.t("history"),
            titleAreaCount: -1 === ke(v.options) ? null : s[0],
            bodyArea: a
              ? r.a.createElement("div", { className: "loader" })
              : !c &&
                r.a.createElement(
                  n.Fragment,
                  null,
                  0 === t &&
                    o.length > 0 &&
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement("div", { className: "desktop" }, I(o)),
                      C &&
                        r.a.createElement(
                          Ti.a,
                          {
                            dataLength: o.length,
                            next: function () {
                              return l(m, _);
                            },
                            hasMore: !f,
                            scrollThreshold: 1,
                            scrollableTarget: "site-content-scroll",
                            loader: r.a.createElement(Ni, null),
                          },
                          I(o),
                        ),
                    ),
                  0 === t &&
                    0 === o.length &&
                    r.a.createElement(
                      "div",
                      { className: "action-not-found" },
                      -1 !== dt(v.options) &&
                        r.a.createElement(
                          "h2",
                          { style: { textAlign: "center" } },
                          z.t("history_have_not_parking_actions"),
                        ),
                      -1 === dt(v.options) &&
                        r.a.createElement(
                          "h2",
                          { style: { textAlign: "center" } },
                          z.t("history_have_not_activation"),
                        ),
                    ),
                  1 === t &&
                    i.length > 0 &&
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "div",
                        { className: "desktop" },
                        i.map(function (e, t) {
                          return r.a.createElement(ci, {
                            data: e,
                            key: t,
                            index: t,
                          });
                        }),
                      ),
                      C &&
                        r.a.createElement(
                          Ti.a,
                          {
                            dataLength: i.length,
                            next: function () {
                              return u(m, _);
                            },
                            hasMore: !g,
                            scrollThreshold: 1,
                            scrollableTarget: "site-content-scroll",
                            loader: r.a.createElement(Ni, null),
                          },
                          i.map(function (e, t) {
                            return r.a.createElement(ci, { data: e, key: t });
                          }),
                        ),
                    ),
                  1 === t &&
                    0 === i.length &&
                    r.a.createElement(
                      "div",
                      { className: "action-not-found" },
                      r.a.createElement(
                        "h2",
                        { style: { textAlign: "center" } },
                        z.t("history_have_not_transactions"),
                      ),
                    ),
                ),
            actionArea: r.a.createElement(
              "div",
              { className: "read-more-container" },
              !a &&
                !c &&
                r.a.createElement(
                  n.Fragment,
                  null,
                  r.a.createElement(si, {
                    className: "load-more ".concat(
                      (function () {
                        if (0 === t) {
                          if (o.length > 0 && f) return !0;
                          if (0 === o.length) return !0;
                        } else {
                          if (i.length > 0 && g) return !0;
                          if (0 === i.length) return !0;
                        }
                      })()
                        ? "button-disabled"
                        : "",
                    ),
                    text: z.t("load_more"),
                    disabled: (function () {
                      if (0 === t) {
                        if (0 === o.length) return !0;
                        if (o.length > 0 && f) return !0;
                      } else {
                        if (0 === i.length) return !0;
                        if (i.length > 0 && g) return !0;
                      }
                      return p;
                    })(),
                    showProgress: p,
                    onClick: function () {
                      0 === t ? l(m, _) : 1 === t && u(m, _);
                    },
                  }),
                  r.a.createElement(si, {
                    className: "send-email",
                    text: z.t("send_full_history_to_email"),
                    showProgress: h,
                    onClick: function () {
                      0 === t ? E(_) : 1 === t && b(_);
                    },
                  }),
                ),
            ),
          });
        }),
        Si = a(85),
        wi = a(495),
        ki =
          (a(1004),
          {
            authenticated: !1,
            progress: !1,
            locale: "nl_NL",
            captcha: void 0,
            localeWasChange: !1,
            settingsWasChange: !1,
          }),
        Pi = {
          showMenu: !1,
          activeTab: 0,
          theme: H.getItem("theme") ? H.getItem("theme") : "default",
          setIntervalId: void 0,
          rememberMe: "no",
          showModalMessage: !1,
          showModalAbout2Park: !1,
          visiblePopupSetBalanceWarning: !1,
          productIdForPopupSetBalanceWarning: void 0,
          scrollEnd: !1,
        },
        Di = H.getItem("email"),
        ji = { locale: "nl_NL", name: z.t("my_name"), email: Di, progress: !1 },
        Li = a(144),
        Mi = H.getItem("locale");
      Mi || (Mi = "nl_NL");
      var Ri = {
          locale: { value: Mi, _changed: !0 },
          name: { value: z.t("my_name"), _changed: !0 },
          email: { value: "", _changed: !1 },
        },
        Fi = {
          products: [],
          productsLoaded: !1,
          otherProductsLoaded: !1,
          productIsSwitchLicensePlateActive: void 0,
          activeCount: void 0,
          scheduleCount: void 0,
        },
        Ui = {
          productDetailsActive: [],
          productDetailsScheduled: [],
          temporaryLicensePlates: [],
          productDetailsNotActive: [],
          progress: !1,
          allProductsIsBlocked: !0,
          isUserGeofenceProgress: !1,
          isUserGeofenceLocations: [],
          availableActions: null,
        },
        Hi = {
          startDateTime: void 0,
          endDateTime: fe()()
            .hour(23)
            .minute(59)
            .second(59)
            .format("DD-MM-YYYY HH:mm:ss"),
          process: !1,
          errorMessage: void 0,
          selectedActionId: void 0,
          withoutAlternates: !1,
          amount: void 0,
          currentEndDateTimeActiveActions: void 0,
          parkingActionWasStarted: !1,
        },
        xi = {
          parkingHistory: [],
          parkingHistoryEndList: !1,
          transactionHistory: [],
          transactionHistoryEndList: !1,
          progress: !1,
          error: null,
          parkingHistoryIndexes: {
            startIndex: 0,
            stopIndex: 10,
            maxIndex: 0,
            actionChained: !1,
          },
          transactionHistoryIndexes: {
            startIndex: 1,
            stopIndex: 10,
            maxIndex: 0,
          },
          loadMoreProgress: !0,
          senHistoryProgress: !1,
        },
        zi = {
          progress: !1,
          errorMessage: void 0,
          currentUnitsValue: void 0,
          selectedType: "with_balance",
        },
        Yi = { list: [], progress: !1, currentAuthorizationIdentifier: null },
        Gi = {
          licensePlates: [],
          licensePlatesNotMemberAdmin: [],
          progress: !1,
        },
        Vi = { list: [], progress: !1 },
        Bi = {
          topupList: [],
          progress: !1,
          error: null,
          progressOnButton: !1,
          transactionData: null,
        },
        Wi = { progress: !1 },
        Ki = { status: void 0, progress: !1, message: void 0 },
        Zi = {
          progress: !1,
          showMessage: !1,
          message: void 0,
          data: void 0,
          addProductFail: !1,
          showAddAccount: !1,
        },
        Qi = {
          progress: !1,
          showMessage: !1,
          addGrantFail: !1,
          message: void 0,
          data: void 0,
        },
        Ji = {
          selectedLicensePlate: void 0,
          switchLicensePlateVisited: !1,
          listNotActiveLicensePlates: [],
          activeLicensePlate: void 0,
          progress: !1,
        },
        qi = { progress: !1, locations: [] },
        Xi = { productCode: null, pinCode: null, progress: !1 },
        $i = {
          progress: !1,
          arrayActiveActions: [],
          arrayScheduledActions: [],
          setIntervalId: void 0,
        },
        ec = { list: [], selectedOrganization: null, progress: !1 },
        tc = { productSelected: !1, selectProductIsVisited: !1 },
        ac = { progress: !1, grantInformation: void 0 },
        nc = Object(Si.c)({
          auth: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ki,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "AUTHORIZE_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "AUTHORIZE_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { authenticated: !0, progress: !1, errorMessage: null },
                );
              case "AUTHORIZE_FAILED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    authenticated: !1,
                    progress: !1,
                    errorMessage: t.errorMessage,
                  },
                );
              case "UNAUTHORIZE_USER":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { authenticated: !1 },
                );
              case "CAPTCH_STARTED":
              case "FETCH_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "CAPTCHA_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { captcha: t.captcha, progress: !1 },
                );
              case "CAPTCHA_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "INIT_RESET_PASSWORD__SUCCESS":
              case "INIT_RESET_PASSWORD_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "RESET_PASSWORD_SUCCESS":
              case "RESET_PASSWORD_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "SETTINGS_WAS_CHANGE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { settingsWasChange: t.arg },
                );
              case "ON_CHANGE_LOCALE_TEMPORAL":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { locale: t.locale },
                );
              default:
                return e;
            }
          },
          ui: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Pi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SHOW_MENU_CHANGE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    showMenu: !e.showMenu,
                    showContextMenu: !1,
                    listItemIndex: -1,
                  },
                );
              case "CLOSE_MENU":
                return Object(E.a)(Object(E.a)({}, e), {}, { showMenu: !1 });
              case "ACTIVE_TAB_CHANGE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    activeTab: t.activeTab,
                    showContextMenu: !1,
                    listItemIndex: -1,
                  },
                );
              case "THEME_CHANGE":
                return Object(E.a)(Object(E.a)({}, e), {}, { theme: t.theme });
              case "TEMPORARY_THEME_CHANGE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { themeTemporary: t.theme },
                );
              case "TOGGLE_CONTEXT_MENU":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    showContextMenu:
                      !(e.listItemIndex === t.listItemIndex) ||
                      !e.showContextMenu,
                    listItemIndex:
                      t.listItemIndex === e.listItemIndex
                        ? -1
                        : t.listItemIndex,
                    showContextMenuAtTheTop: t.showContextMenuAtTheTop,
                  },
                );
              case "CLOSE_CONTEXT_MENU":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { showContextMenu: !1, listItemIndex: -1 },
                );
              case "SET_INTERVAL_PARKING_ACTIONS_START":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { setIntervalId: t.setIntervalId },
                );
              case "SET_INTERVAL_PARKING_ACTIONS_STOP":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { setIntervalId: void 0 },
                );
              case "REMEMBER_ME_CHANGE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { rememberMe: t.rememberMeValue },
                );
              case "REMEMBER_ME_INIT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { rememberMe: t.value },
                );
              case "SHOW_MODAL_MESSAGE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    showMenu: !1,
                    modalMessage: t.message,
                    showModalMessage: !0,
                    goToScreen: t.goToScreen,
                  },
                );
              case "HIDE_MODAL_MESSAGE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    modalMessage: void 0,
                    showModalMessage: !1,
                    goToScreen: void 0,
                  },
                );
              case "SHOW_MODAL_DIALOG":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    showMenu: !1,
                    showContextMenu: !1,
                    listItemIndex: -1,
                    showModalDialog: !0,
                  },
                );
              case "HIDE_MODAL_DIALOG":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { showModalDialog: !1 },
                );
              case "SHOW_MODAL_ABOUT2PARK":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { showMenu: !1, showModalAbout2Park: !0 },
                );
              case "HIDE_MODAL_ABOUT2PARK":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { showModalAbout2Park: !1 },
                );
              case "SHOW_POPUP_SET_BALANCE_WARNING":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    visiblePopupSetBalanceWarning: !0,
                    productIdForPopupSetBalanceWarning: t.productId,
                  },
                );
              case "HIDE_POPUP_SET_BALANCE_WARNING":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    visiblePopupSetBalanceWarning: !1,
                    productIdForPopupSetBalanceWarning: void 0,
                  },
                );
              case "SET_SCROLL_END":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { scrollEnd: t.scrollEnd },
                );
              default:
                return e;
            }
          },
          settings: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ji,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SAVE_SETTINGS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    name: t.name,
                    startingProduct: t.startingProduct,
                    currentProduct: void 0,
                  },
                );
              case "ON_STARTING_PRODUCT_CHANGED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { startingProduct: t.productId },
                );
              case "ON_LOCALE_CHANGED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { locale: t.locale },
                );
              case "ON_NAME_CHANGED":
                return Object(E.a)(Object(E.a)({}, e), {}, { name: t.name });
              case "ON_EMAIL_CHANGED":
                return Object(E.a)(Object(E.a)({}, e), {}, { email: t.email });
              case "SET_CURRENT_PRODUCT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { currentProduct: t.payload, progress: !0 },
                );
              case "ON_SELECTED_PRODUCT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { selectedProduct: t.selectedProduct },
                );
              case "ON_CHANGE_WARN_ON_LOW_BALANCE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { warnOnLowBalance: t.value },
                );
              case "ON_CHANGE_THRESHOLD":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { threshold: t.threshold },
                );
              case "UNAUTHORIZE_USER":
                return ji;
              default:
                return e;
            }
          },
          form: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ri,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ON_INITIALIZE_FORM_FIELD":
              case "ON_FORM_FIELD_VALUE_CHANGED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  Object(Li.a)({}, t.fieldName, {
                    value: t.fieldValue,
                    _changed: !0,
                    errorMessage: void 0,
                  }),
                );
              case "ON_FORM_FIELD_CLEAR_VALUE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  Object(Li.a)({}, t.fieldName, void 0),
                );
              case "ON_ERROR_UPDATE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  Object(Li.a)(
                    {},
                    t.fieldName,
                    Object(E.a)(
                      Object(E.a)({}, e[t.fieldName]),
                      {},
                      { errorMessage: t.errorMessage, _changed: !0 },
                    ),
                  ),
                );
              case "TOP_UP_LIST_TRANSACTION_SUCCESS":
                return Object(E.a)({}, e);
              default:
                return e;
            }
          },
          main: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ui,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ON_AVAILABLE_ACTIONS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { availableActions: t.availableActions },
                );
              case "GET_CATEGORY_PRODUCT_DETAILS_ACTIVE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    productDetailsActive: t.productDetailsActive,
                    progress: !1,
                  },
                );
              case "GET_CATEGORY_PRODUCT_DETAILS_SCHEDULED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    productDetailsScheduled: t.productDetailsScheduled,
                    progress: !1,
                  },
                );
              case "GET_TEMPORARY_LICENSE_PLATES":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    temporaryLicensePlates: t.temporaryLicensePlates,
                    progress: !1,
                  },
                );
              case "GET_CATEGORY_PRODUCT_DETAILS_NOT_ACTIVE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    productDetailsNotActive: t.productDetailsNotActive,
                    progress: !1,
                  },
                );
              case "ON_START_ACTION_PROGRESS":
              case "GET_CATEGORY_PRODUCT_DETAILS_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "GET_CATEGORY_PRODUCT_DETAILS_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "START_ACTIVATION_SUCCESS":
              case "START_ACTIVATION_FAIL":
              case "OON_STOP_PARKING_ACTIONS_SUCCESS":
              case "OON_STOP_PARKING_ACTIONS_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "CHANGE_ALL_PRODUCTS_IS_BLOCKED_STATUS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { allProductsIsBlocked: !1 },
                );
              case "CHANGE_ALL_PRODUCTS_IS_BLOCKED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { allProductsIsBlocked: !0 },
                );
              case "IS_USER_WITHIN_GEOFENCE_FETCH":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { isUserGeofenceProgress: !0 },
                );
              case "IS_USER_WITHIN_GEOFENCE_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    isUserGeofenceProgress: !1,
                    isUserGeofenceLocations: t.locations,
                  },
                );
              case "IS_USER_WITHIN_GEOFENCE_FAIL":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { isUserGeofenceProgress: !1, isUserGeofenceLocations: [] },
                );
              default:
                return e;
            }
          },
          parkingActions: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Hi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ON_CHANGE_START_DATE_TIME":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { startDateTime: t.startDateTime },
                );
              case "ON_CHANGE_END_DATE_TIME":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { endDateTime: t.endDateTime },
                );
              case "CREATE_PARKING_ACTIONS_PROCESS":
                return Object(E.a)(Object(E.a)({}, e), {}, { process: !0 });
              case "CREATE_PARKING_ACTIONS_SUCCESS":
              case "CREATE_PARKING_ACTIONS_FAILED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    process: !1,
                    withoutAlternates: !1,
                    parkingActionWasStarted: !1,
                  },
                );
              case "ON_INITIALIZE_START_DATE_TIME":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { startDateTime: Ye(new Date().setSeconds(0)) },
                );
              case "ON_INITIALIZE_DATE_TIME":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    startDateTime: t.startDateTime,
                    endDateTime: t.endDateTime,
                    selectedActionId: t.selectedActionId,
                    currentEndDateTimeActiveActions:
                      t.currentEndDateTimeActiveActions,
                  },
                );
              case "EXTEND_PARKING_ACTIONS_SUCCESS":
              case "EXTEND_PARKING_ACTIONS_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { process: !1 });
              case "CLEAR_START_END_DATE_TIME":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    startDateTime: void 0,
                    endDateTime: fe()()
                      .hour(23)
                      .minute(59)
                      .second(59)
                      .format("DD-MM-YYYY HH:mm:ss"),
                    withoutAlternates: !1,
                    amount: void 0,
                    currentEndDateTimeActiveActions: void 0,
                  },
                );
              case "ON_EDIT_PLANNED_PARKING_ACTION_SUCCESS":
              case "ON_EDIT_PLANNED_PARKING_ACTION_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { process: !1 });
              case "ON_STOPPED_PARKING_ACTION":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    process: !1,
                    withoutAlternates: !0,
                    parkingActionWasStarted: !1,
                  },
                );
              case "GET_AMOUNT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { amount: t.amount, prompt: t.prompt, message: t.message },
                );
              case "ON_BACK":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    withoutAlternates: !1,
                    endDateTime: fe()(t.dateTime, "DD-MM-YYYY HH:mm:ss")
                      .hour(23)
                      .minute(59)
                      .second(59)
                      .format("DD-MM-YYYY HH:mm:ss"),
                    amount: void 0,
                    prompt: void 0,
                    message: void 0,
                    currentEndDateTimeActiveActions: void 0,
                  },
                );
              case "CLEAR_END_DATE_TIME":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { endDateTime: void 0 },
                );
              case "ON_INITIALIZE_END_DATE_TIME":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { endDateTime: t.endDateTime },
                );
              case "PARKING_ACTION_WAS_STARTED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { parkingActionWasStarted: t.parkingActionWasStarted },
                );
              default:
                return e;
            }
          },
          data: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Fi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ON_PRODUCTS_RETRIEVED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { products: t.products, productsLoaded: !0 },
                );
              case "ON_BALANCE_RETRIEVED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    products: e.products.map(function (e, a) {
                      if (e.value !== t.productId) return e;
                      var n = Object(E.a)(
                        Object(E.a)({}, e),
                        {},
                        { balance: Object(E.a)({}, t.balance) },
                      );
                      return Object(E.a)({}, n);
                    }),
                  },
                );
              case "GET_BALANCE_SUCCESS":
              case "GET_BALANCE_FAILED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    products: e.products.map(function (e, a) {
                      if (e.value === t.productId) {
                        var n = Object(E.a)(
                          Object(E.a)({}, e),
                          {},
                          { balance: t.balance },
                        );
                        return Object(E.a)({}, n);
                      }
                      return Object(E.a)({}, e);
                    }),
                  },
                );
              case "MAIN_COMPONENT_LOADING":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { productsLoaded: !1 },
                );
              case "FINISH_FETCH":
              case "OTHER_PRODUCTS_REMOVE_SUCCESS":
              case "OTHER_PRODUCTS_REMOVE_FAIL":
              case "OTHER_PRODUCTS_WILL_MOUNT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { otherProductsLoaded: !0 },
                );
              case "OTHER_PRODUCTS_WILL_UNMOUNT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { otherProductsLoaded: !1 },
                );
              case "REMOVE_OTHER_PRODUCT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    products: e.products.filter(function (e) {
                      return e.value !== t.productId;
                    }),
                  },
                );
              case "PRODUCT_SWITCH_LICENSE_PALE_ACTIVE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    products: e.products.map(function (e, a) {
                      if (e.value !== t.productId) return e;
                      var n = Object(E.a)(
                        Object(E.a)({}, e),
                        {},
                        {
                          productIsSwitchLicensePlateActive:
                            t.licensePlateIsActive,
                        },
                      );
                      return Object(E.a)({}, n);
                    }),
                  },
                );
              case "ADD_COUNT_ACTIVE_AND_SCHEDULE_ACTIONS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    products: e.products.map(function (e, a) {
                      if (e.value !== t.productId) return e;
                      var n = Object(E.a)(
                        Object(E.a)({}, e),
                        {},
                        {
                          activeCount: t.activeCount,
                          scheduleCount: t.scheduleCount,
                          notActiveCount: t.notActiveCount,
                        },
                      );
                      return Object(E.a)({}, n);
                    }),
                  },
                );
              case "UNAUTHORIZE_USER":
                return Fi;
              default:
                return e;
            }
          },
          history: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : xi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_PARKING_HISTORY_STARTED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !0, error: null },
                );
              case "GET_PARKING_HISTORY_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    parkingHistory: t.payload,
                    progress: !1,
                    loadMoreProgress: !1,
                    parkingHistoryIndexes: Object(E.a)(
                      Object(E.a)({}, e.parkingHistoryIndexes),
                      {},
                      {
                        startIndex: t.startIndex,
                        stopIndex: t.stopIndex,
                        maxIndex: t.maxIndex,
                        actionChained: t.actionChained,
                      },
                    ),
                  },
                );
              case "GET_PARKING_HISTORY_FAILED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, error: t.payload, loadMoreProgress: !1 },
                );
              case "GET_TRANSACTION_HISTORY_STARTED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !0, error: null },
                );
              case "GET_TRANSACTION_HISTORY_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    transactionHistory: t.payload,
                    progress: !1,
                    loadMoreProgress: !1,
                    transactionHistoryIndexes: Object(E.a)(
                      Object(E.a)({}, e.transactionHistoryIndexes),
                      {},
                      {
                        startIndex: t.startIndex,
                        stopIndex: t.stopIndex,
                        maxIndex: t.maxIndex,
                      },
                    ),
                  },
                );
              case "GET_TRANSACTION_HISTORY_FAILED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, error: t.payload, loadMoreProgress: !1 },
                );
              case "REMOVE_INDEXES":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    parkingHistoryIndexes: xi.parkingHistoryIndexes,
                    transactionHistoryIndexes: xi.transactionHistoryIndexes,
                    parkingHistoryEndList: !1,
                    transactionHistoryEndList: !1,
                  },
                );
              case "lOAD_MORE_FETCH":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { loadMoreProgress: !0 },
                );
              case "PARKING_HISTORY_END_LIST":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { parkingHistoryEndList: !0 },
                );
              case "TRANSACTION_HISTORY_END_LIST":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { transactionHistoryEndList: !0 },
                );
              case "SEND_HISTORY_EMAIL_FETCH":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { senHistoryProgress: !0 },
                );
              case "SEND_HISTORY_EMAIL_FAIL":
              case "SEND_HISTORY_EMAIL_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { senHistoryProgress: !1 },
                );
              default:
                return e;
            }
          },
          authorizationsForm: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : zi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "CREATE_AUTHORIZATION_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "CREATE_AUTHORIZATION_SUCCESS":
              case "CREATE_AUTHORIZATION_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "ON_SELECT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { selectedType: t.value },
                );
              default:
                return e;
            }
          },
          authorizations: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Yi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ON_AUTHORIZATIONS_RETRIEVED_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { list: t.authorizations },
                );
              case "ON_AUTHORIZATIONS_REQUEST_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "ON_AUTHORIZATIONS_REQUEST_FAILED":
              case "ON_AUTHORIZATIONS_REQUEST_SUCCESS":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "ON_INITIALIZE_CURRENT_AUTHORIZATION":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    currentAuthorizationIdentifier:
                      t.currentAuthorizationIdentifier,
                  },
                );
              case "ON_AUTHORIZATION_DELETE_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    list: Object(ai.a)(
                      e.list.filter(function (e) {
                        return (
                          e.grt_identifier !== t.currentAuthorizationIdentifier
                        );
                      }),
                    ),
                  },
                );
              default:
                return e;
            }
          },
          selectLicensePlate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Gi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_LICENSE_PLATE_fETCH_START":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "GET_LICENSE_PLATE_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { licensePlates: t.licensePlate, progress: !1 },
                );
              case "GET_LICENSE_PLATE_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "GET_LICENSE_PLATE_NOT_MEMBER_ADMIN_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    licensePlatesNotMemberAdmin: t.licensePlatesNotMemberAdmin,
                    progress: !1,
                  },
                );
              default:
                return e;
            }
          },
          favorites: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Vi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ON_FAVORITES_RETRIEVED_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { list: t.favorites },
                );
              case "ON_FAVORITES_REQUEST_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "ON_FAVORITES_REQUEST_FAILED":
              case "ON_FAVORITES_REQUEST_SUCCESS":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "ON_INITIALIZE_CURRENT_FAVORITE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { currentFavoriteIdentifier: t.currentFavoriteIdentifier },
                );
              case "ON_FAVORITE_DELETE_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    list: Object(ai.a)(
                      e.list.filter(function (e) {
                        return e.mbr_identifier !== t.currentFavoriteIdentifier;
                      }),
                    ),
                  },
                );
              default:
                return e;
            }
          },
          topupList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Bi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_TOP_UP_LIST_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "GET_TOP_UP_LIST_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, topupList: t.payload },
                );
              case "GET_TOP_UP_LIST_FAILED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, error: t.payload },
                );
              case "TOP_UP_LIST_TRANSACTION_STARTED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progressOnButton: !0 },
                );
              case "TOP_UP_LIST_TRANSACTION_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progressOnButton: !1, transactionData: t.payload },
                );
              case "TOP_UP_LIST_TRANSACTION_FAILED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progressOnButton: !1 },
                );
              default:
                return e;
            }
          },
          newFavorite: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Wi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "CREATE_FAVORITE_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "CREATE_FAVORITE_SUCCESS":
              case "CREATE_FAVORITE_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              default:
                return e;
            }
          },
          paymentResult: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ki,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "PAYMENT_STATUS_REQUEST":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "PAYMENT_STATUS_SUCCESS":
              case "PAYMENT_STATUS_FAIL":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, status: t.status },
                );
              case "PAYMENT_STATUS_CLEAR":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, status: void 0, message: void 0 },
                );
              case "PAYMENT_STATUS_ERROR":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, message: t.message },
                );
              default:
                return e;
            }
          },
          registrationProduct: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Zi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "PRODUCT_INFORMATION_REQUEST":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !0, addProductFail: !1 },
                );
              case "PRODUCT_INFORMATION_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, data: t.productInformation },
                );
              case "PRODUCT_INFORMATION_FAIL":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "SHOW_MESSAGE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { showMessage: !0, message: t.message },
                );
              case "MODE_MESSAGE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { showMessage: !1, message: void 0, addProductFail: !1 },
                );
              case "ADD_PRODUCT_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, addProductFail: !1 },
                );
              case "ADD_PRODUCT_FAIL":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, addProductFail: !0 },
                );
              case "GO_TO_CREATE_ACCOUNT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { showAddAccount: !0 },
                );
              default:
                return e;
            }
          },
          registerGrant: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Qi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GRANT_INFORMATION_REQUEST":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !0, addGrantFail: !1 },
                );
              case "GRANT_INFORMATION_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, data: t.grantInformation },
                );
              case "GRANT_INFORMATION_FAIL":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "SHOW_MESSAGE_GRANT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { showMessage: !0, message: t.message },
                );
              case "MODE_MESSAGE_GRANT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { showMessage: !1, message: void 0, addGrantFail: !1 },
                );
              case "ADD_GRANT_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, addGrantFail: !1 },
                );
              case "ADD_GRANT_FAIL":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, addGrantFail: !0 },
                );
              case "GO_TO_CREATE_ACCOUNT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { showAddAccount: !0 },
                );
              default:
                return e;
            }
          },
          switchLicensePlate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ji,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SELECT_LICENSE_PLATE":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { selectedLicensePlate: t.licensePlate },
                );
              case "SELECT_LICENSE_PLATE_CLEAR":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { selectedLicensePlate: void 0 },
                );
              case "SWITCH_LICENSE_PLATE_VISITED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { switchLicensePlateVisited: !0 },
                );
              case "SWITCH_LICENSE_PLATE_VISITED_CLEAR":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { switchLicensePlateVisited: !1 },
                );
              case "GET_NOT_ACTIVE_LICENSE_PLATE_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    listNotActiveLicensePlates: t.arrayLicensePlates,
                    progress: !1,
                  },
                );
              case "GET_NOT_OR_ACTIVE_LICENSE_PLATE_FAIL":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "GET_NOT_OR_ACTIVE_LICENSE_PLATE_FETCHING":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "GET_ACTIVE_LICENSE_PLATE_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, activeLicensePlate: t.licensePlate },
                );
              case "ACTIVATE_LICENSE_PLATE_SUCCESS":
                return Object(E.a)({}, e);
              case "ACTIVATE_LICENSE_PLATE_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              default:
                return e;
            }
          },
          selectLocation: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : qi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "GET_LOCATION_FETCH_START":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "GET_LOCATION_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, locations: t.location },
                );
              case "GET_LOCATION_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              default:
                return e;
            }
          },
          addProduct: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Xi,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ADD_PRODUCT":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { product: t.product },
                );
              case "ON_ADD_PRODUCT_REQUEST_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "ON_ADD_PRODUCT_REQUEST_SUCCESS":
              case "ON_ADD_PRODUCT_REQUEST_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              default:
                return e;
            }
          },
          allActions: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : $i,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ON_ALL_ACTIONS_REQUEST_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "ON_ALL_ACTIONS_REQUEST_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  {
                    arrayActiveActions: t.arrayActiveActions,
                    arrayScheduledActions: t.arrayScheduledActions,
                    progress: !1,
                  },
                );
              case "ON_ALL_ACTIONS_REQUEST_FAIL":
              case "ALL_ACTIONS_CLEAR":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "SET_INTERVAL_ID_ALL_PARKING_ACTIONS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { setIntervalId: t.setIntervalId },
                );
              case "SET_INTERVAL_ID_ALL_PARKING_ACTIONS_STOP":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { setIntervalId: void 0 },
                );
              default:
                return e;
            }
          },
          organizations: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ec,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ON_ORGANIZATION_SELECTED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { product: t.product },
                );
              case "GET_ORGANIZATION_REQUEST_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "GET_ORGANIZATION_REQUEST_SUCCESS":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { progress: !1, list: t.organizations },
                );
              case "GET_ORGANIZATION_REQUEST_FAILED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              default:
                return e;
            }
          },
          startingProduct: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : tc,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "PRODUCT_SELECTED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { productSelected: t.productSelected },
                );
              case "SELECT_PRODUCT_IS_VISITED":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { selectProductIsVisited: t.visited },
                );
              default:
                return e;
            }
          },
          createAccount: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ac,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "REQUEST_STARTED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !0 });
              case "REQUEST_FINISHED":
                return Object(E.a)(Object(E.a)({}, e), {}, { progress: !1 });
              case "GET_GRANT_INFORMATION":
                return Object(E.a)(
                  Object(E.a)({}, e),
                  {},
                  { grantInformation: t.grant },
                );
              default:
                return e;
            }
          },
        });
      var rc = Object(s.b)(null, null),
        oc = Object(m.b)(rc)(function (e) {
          var t = e.name,
            a = e.title,
            n = e.date;
          return r.a.createElement(
            "div",
            { className: "confirmation-container other-products-confirmation" },
            r.a.createElement(
              "div",
              { className: "parking-info" },
              r.a.createElement(
                "div",
                { className: "parkapp-item" },
                r.a.createElement("p", null, t),
                r.a.createElement("p", null, a),
                n && r.a.createElement("p", null, z.t("valid"), " ", n),
              ),
            ),
            r.a.createElement(
              "p",
              { className: "confirmation-message" },
              z.t("withdraw_other_product_confirmation"),
            ),
          );
        }),
        ic = function (e) {
          var t = e.licensePlate;
          return r.a.createElement(
            "span",
            { className: "authorization-license-plate-container" },
            r.a.createElement(
              "span",
              { className: "license-plate" },
              " ",
              t,
              " ",
            ),
          );
        },
        cc = function (e) {
          return {
            type: "ON_AUTHORIZATION_DELETE_SUCCESS",
            currentAuthorizationIdentifier: e,
          };
        },
        sc = function (e) {
          if (e && "" !== e) {
            var t = e.split("@"),
              a = t[0],
              n = t[1],
              r = a.substring(0, 3),
              o = n ? n.substring(3, n.length) : void 0;
            return o ? "".concat(r, "***@***").concat(o) : "".concat(r, "***");
          }
          return "";
        },
        lc = Object(s.b)(null, {
          showModalDialog: me,
          hideModalDialog: _e,
          showPopupSetBalanceWarning: function (e) {
            return { type: "SHOW_POPUP_SET_BALANCE_WARNING", productId: e };
          },
          closeContextMenu: ae,
        }),
        uc = Object(m.b)(lc, cn.a)(function (e) {
          var t = e.product,
            a = e.onClick,
            o = (e.city, e.autofocus),
            i = (e.logoFolder, e.index),
            c = e.showModalDialog,
            s = e.hideModalDialog,
            l = e.removeOtherProducts,
            u = e.history,
            d = e.match,
            m = e.showPopupSetBalanceWarning,
            _ = e.closeContextMenu,
            p = e.setCurrentProduct,
            f = e.ctyId,
            g = "";
          t.balance &&
            t.balance.ble_parameters &&
            (g = Tn(t.balance.ble_parameters));
          var v = -1 === ke(t.options),
            h = Un(t.byGrant, t.validFrom, t.validTo),
            E = Object(n.useContext)(Da),
            b = function () {
              ((E.content = r.a.createElement(oc, {
                name: t.name,
                title: t.title,
                date: h,
              })),
                (E.buttons = (function (e) {
                  var t = e.yesClick,
                    a = e.noClick;
                  return [
                    { text: z.t("yes"), onClick: t, autoFocus: !0 },
                    { text: z.t("no"), onClick: a },
                  ];
                })({
                  yesClick: function () {
                    (s(), l(t.value, u, d));
                  },
                  noClick: function () {
                    s();
                  },
                })),
                c());
            },
            A = function () {
              (m(t.value), window.innerWidth < 768 && _());
            },
            T = [
              {
                title: r.a.createElement(
                  "button",
                  {
                    className: "treshold-context-menu-button",
                    "aria-label": z.t("set_balance_alarm"),
                    onKeyPress: function (e) {
                      "Enter" === e.key && A();
                    },
                  },
                  r.a.createElement(
                    "span",
                    null,
                    " ",
                    z.t("set_balance_alarm"),
                    " ",
                  ),
                ),
                onClick: A,
                params: {},
                code: "set_balance_alarm",
              },
              {
                title: r.a.createElement(
                  "button",
                  {
                    className: "select-context-menu-button",
                    onKeyPress: function (e) {
                      "Enter" === e.key && a(t.value);
                    },
                    "aria-label": z.t("select"),
                  },
                  z.t("select"),
                ),
                onClick: function () {
                  return a(t.value);
                },
                params: {},
                code: "select",
              },
              {
                title: r.a.createElement(
                  "button",
                  {
                    className: "delete-context-menu-button",
                    "aria-label": z.t("delete"),
                    onKeyPress: function (e) {
                      "Enter" === e.key && b();
                    },
                  },
                  z.t("delete"),
                ),
                onClick: b,
                params: {},
                code: "delete",
              },
            ],
            O = Et(t);
          (O &&
            (T = T.filter(function (e) {
              return "select" !== e.code;
            })).unshift({
              title: r.a.createElement(
                "button",
                {
                  className: "history-context-menu-button",
                  "aria-label": z.t("history"),
                  onKeyPress: function () {},
                },
                r.a.createElement("span", null, " ", z.t("history"), " "),
              ),
              onClick: function () {
                (p(t.value),
                  u.push(
                    "/history?product=".concat(t.value, "&ctyId=").concat(f),
                  ));
              },
              params: {},
              code: "history",
            }),
            (function (e, t, a, n) {
              return (
                e ||
                !t ||
                (function (e) {
                  if (!e) return !0;
                  if (e && e.ble_parameters.length > 0) {
                    var t = e.ble_parameters.find(function (e) {
                      return "CURRENCY_CODE" === e.prr_label;
                    });
                    if (t) if ("TIMES" === t.prr_value) return !0;
                  }
                  return !1;
                })(a) ||
                n
              );
            })(O, v, t.balance, t.byGrant) &&
              (T = T.filter(function (e) {
                return "set_balance_alarm" !== e.code;
              })));
          return r.a.createElement(Ar, {
            actions: T,
            index: i,
            isBlocked: O,
            template: r.a.createElement(
              "div",
              {
                className: "other-product-item",
                autoFocus: o && o,
                onClick: function () {
                  window.innerWidth < 768 && a(t.value);
                },
              },
              r.a.createElement(
                "div",
                { className: "other-products-wrapper" },
                r.a.createElement(
                  "div",
                  { className: "other-products-content" },
                  r.a.createElement("p", null, t.name),
                  r.a.createElement("p", null, t.title),
                  h && r.a.createElement("p", null, z.t("valid"), " ", h),
                  Ln(t) &&
                    r.a.createElement(
                      "p",
                      { className: "product-is-blocked" },
                      z.t("blocked"),
                    ),
                  !Ln(t) &&
                    ht(t) &&
                    r.a.createElement(
                      "p",
                      { className: "product-is-blocked" },
                      z.t("expired"),
                    ),
                  Mn(t) &&
                    r.a.createElement(
                      "p",
                      { className: "product-is-blocked" },
                      z.t("revoked"),
                    ),
                  t.balance &&
                    v &&
                    r.a.createElement(
                      "p",
                      { className: "balance" },
                      Hn(t.balance.ble_parameters),
                      r.a.createElement("span", null, " ", z.t("saldo"), " "),
                      r.a.createElement(
                        "span",
                        {
                          className: "".concat(
                            ht(t) || Ln(t) ? "crossed-out" : "",
                          ),
                        },
                        g,
                        " ",
                      ),
                    ),
                  t.byGrant &&
                    r.a.createElement(
                      "p",
                      { className: "grantor" },
                      r.a.createElement(
                        "span",
                        null,
                        z.t("authorization_by"),
                        " ",
                      ),
                      r.a.createElement(
                        "span",
                        null,
                        sc(t.byGrant.grantor),
                        " ",
                      ),
                      "false" === t.byGrant.is_blocked &&
                        "" !== t.byGrant.member_ident &&
                        r.a.createElement(
                          "span",
                          null,
                          " ",
                          z.t("for"),
                          " ",
                          r.a.createElement(ic, {
                            licensePlate: t.byGrant.member_ident,
                          }),
                        ),
                    ),
                  Rn(t) &&
                    r.a.createElement(
                      "p",
                      { className: "no-active-license-plate" },
                      z.t("no_license_plate_info"),
                    ),
                  (t.activeCount > 0 ||
                    t.scheduleCount > 0 ||
                    t.notActiveCount > 0) &&
                    Fn(
                      t.activeCount,
                      t.scheduleCount,
                      t.notActiveCount,
                      t.options,
                    ),
                ),
              ),
            ),
          });
        }),
        dc = function () {
          return { type: "SELECT_LICENSE_PLATE_CLEAR" };
        },
        mc = function (e) {
          return function (t, a) {
            var n,
              r = a().settings,
              o = r.startingProduct,
              i = r.currentProduct,
              c = r.locale,
              s = i || o,
              l = [];
            (t({ type: "GET_NOT_OR_ACTIVE_LICENSE_PLATE_FETCHING" }),
              y()
                .getCategoryProductDetails(s, c)
                .then(function (a) {
                  if ("OK" === a.status.code.major) {
                    var r = a.data.pdt_members;
                    (r.length > 0 &&
                      r.map(function (e) {
                        var t = e.mbr_id,
                          a = e.mbr_identifier,
                          r = e.mbr_active,
                          o = e.mbr_actions,
                          i = { mbr_id: t, mbr_identifier: a };
                        if ("NO" === r) l.push(i);
                        else {
                          var c = (function (e) {
                            if (e.length > 0) {
                              var t = e[0].atn_parameters;
                              return (
                                (t
                                  ? t.find(function (e) {
                                      return "TIMESTART" === e.prr_label;
                                    })
                                  : void 0
                                ).prr_value || void 0
                              );
                            }
                          })(o);
                          ((i.time_start = c), (n = i));
                        }
                      }),
                      t({
                        type: "GET_ACTIVE_LICENSE_PLATE_SUCCESS",
                        licensePlate: n,
                      }),
                      t({
                        type: "GET_NOT_ACTIVE_LICENSE_PLATE_SUCCESS",
                        arrayLicensePlates: l,
                      }));
                  } else
                    "FAIL" === a.status.code.major &&
                    "SESSION_TIMEOUT" === a.status.code.minor
                      ? (t({ type: "GET_NOT_OR_ACTIVE_LICENSE_PLATE_FAIL" }),
                        t(ha(e)))
                      : t({ type: "GET_NOT_OR_ACTIVE_LICENSE_PLATE_FAIL" });
                })
                .catch(function () {
                  return t({ type: "GET_NOT_OR_ACTIVE_LICENSE_PLATE_FAIL" });
                }));
          };
        },
        _c = function () {
          return { type: "ACTIVATE_LICENSE_PLATE_SUCCESS" };
        },
        pc = function () {
          return { type: "ACTIVATE_LICENSE_PLATE_FAILED" };
        },
        fc = Object(m.c)({
          componentDidMount: function () {
            var e = this.props,
              t = e.history,
              a = e.products,
              n = e.match;
            (0, e.onOtherProductsScreenOpen)(a, t, n);
          },
          componentWillUnmount: function () {
            this.props.otherProductsWillUnMount();
          },
        }),
        gc = Object(s.b)(
          function (e) {
            var t = void 0 !== e.data.products ? e.data.products : [],
              a = e.data.otherProductsLoaded,
              n = e.organizations.list;
            return {
              otherProducts: t,
              otherProductsLoaded: a,
              products: t,
              selectedProduct: e.settings.selectedProduct,
              organizations: n,
              locale: e.settings.locale,
            };
          },
          {
            onOtherProductsScreenOpen: ft,
            setCurrentProduct: $,
            otherProductsWillUnMount: Te,
            getCategoryProductDetailsFetching: ra,
            removeOtherProducts: function (e, t, a) {
              return function (n, r) {
                var o = r().settings.locale,
                  i = a.params.ctyId;
                (n({ type: "OTHER_PRODUCTS_WILL_UNMOUNT" }),
                  y()
                    .removeProductAndGrant(o, e)
                    .then(function (e) {
                      "OK" === e.status.code.major
                        ? (n(Kt(t, i)),
                          n({ type: "OTHER_PRODUCTS_REMOVE_SUCCESS" }),
                          f.toast.success(
                            z.t("other_products_remove_success_message"),
                          ))
                        : "FAIL" === e.status.code.major &&
                            "SESSION_TIMEOUT" === e.status.code.minor
                          ? n(ha(t))
                          : (n({ type: "OTHER_PRODUCTS_REMOVE_FAIL" }),
                            f.toast.error(e.status.message));
                    })
                    .catch(function (e) {
                      (n({ type: "OTHER_PRODUCTS_REMOVE_FAIL" }),
                        f.toast.error(e));
                    }));
              };
            },
            closeContextMenu: ae,
            onSwitchLicensePlateVisited: function () {
              return { type: "SWITCH_LICENSE_PLATE_VISITED" };
            },
            onSaveProduct: ee,
            onFormFieldValueChanged: V,
          },
        ),
        vc = Object(m.b)(gc, Ra.a, fc)(function (e) {
          var t = e.selectProduct,
            a = e.history,
            n = e.setCurrentProduct,
            o = e.otherProducts,
            i = e.otherProductsLoaded,
            c = e.getCategoryProductDetailsFetching,
            s = e.removeOtherProducts,
            l = e.closeContextMenu,
            u = e.onSwitchLicensePlateVisited,
            d = e.onSaveProduct,
            m = e.selectedProduct,
            _ = e.onFormFieldValueChanged,
            p = e.organizations,
            f = e.match.params.ctyId,
            g = o.filter(function (e) {
              return e.cityId === f;
            }),
            v = p.find(function (e) {
              return e.cty_id === f;
            }),
            h = v ? v.cty_external_content.toLowerCase() : "";
          return r.a.createElement(tr, {
            screenClass: "other-products-screen",
            pageList: !0,
            showBackButton: p.length > 1,
            showProductInformation: !1,
            nonContextCityFolderName: h,
            titleAreaClick: function () {
              return a.push("/organizations");
            },
            titleArea: z.t("other_products"),
            titleAreaCount: g.length,
            bodyArea: i
              ? 0 !== g.length
                ? g.map(function (e, o) {
                    var i = 0 === o;
                    return r.a.createElement(uc, {
                      key: o,
                      index: o,
                      product: e,
                      city: e.city,
                      logoFolder: e.logoFolder,
                      autofocus: i,
                      onClick: function () {
                        return (function (e) {
                          Et(e) ||
                            (m ? n(e.value) : d(e.value),
                            c(),
                            l(),
                            e.productIsSwitch
                              ? (m || _("startingProduct", e.value),
                                u(),
                                a.push("/switch-license-plate"))
                              : a.push("/"));
                        })(e);
                      },
                      selectProduct: t,
                      removeOtherProducts: s,
                      setCurrentProduct: n,
                      ctyId: f,
                    });
                  })
                : r.a.createElement(
                    "div",
                    { className: "action-not-found" },
                    r.a.createElement(
                      "h2",
                      { style: { textAlign: "center" } },
                      z.t("no_products_to_choose_from"),
                    ),
                  )
              : r.a.createElement("div", { className: "loader" }),
          });
        }),
        hc = Object(s.b)(null, null),
        Ec = Object(m.b)(hc)(function (e) {
          var t = e.authorizationAmount,
            a = e.licensePlate,
            n = e.accepted,
            o = e.anonymous,
            i = e.displayEmail,
            c = e.authorizationKey;
          return r.a.createElement(
            "div",
            { className: "confirmation-container" },
            r.a.createElement(
              "div",
              { className: "parking-info" },
              r.a.createElement(
                "div",
                { className: "authorization-item parkapp-item" },
                r.a.createElement(
                  "div",
                  { className: "authorization-email-amount-container" },
                  !o &&
                    "null" !== i &&
                    r.a.createElement(
                      "div",
                      { className: "authorization-email" },
                      r.a.createElement("span", null, " ", i),
                    ),
                  o &&
                    "null" !== i &&
                    r.a.createElement(
                      "div",
                      { className: "authorization-name" },
                      r.a.createElement("span", null, " ", i),
                    ),
                  t && t,
                ),
                r.a.createElement(
                  "div",
                  null,
                  a && r.a.createElement(cr, { licensePlate: a }),
                ),
                o &&
                  "N" === n &&
                  r.a.createElement(
                    "div",
                    { className: "authorization-key" },
                    r.a.createElement("span", null, " ", c),
                  ),
                r.a.createElement(
                  "div",
                  { className: "authorization-info" },
                  "N" === n &&
                    r.a.createElement(
                      "span",
                      { className: "accepted" },
                      z.t("not_accepted"),
                    ),
                ),
              ),
            ),
            r.a.createElement(
              "p",
              { className: "confirmation-message" },
              z.t("withdraw_authorization_confirmation"),
            ),
          );
        }),
        bc = function (e) {
          var t = e.split("."),
            a = Math.trunc(t[0] / 60),
            n = t[0] % 60;
          return ""
            .concat(a)
            .concat(z.t("hours_abbreviated"), " ")
            .concat(n, "m");
        },
        Ac = "",
        Tc = Object(s.b)(
          function (e) {
            return { locale: e.settings.locale };
          },
          {
            onInitializeCurrentAuthorization: function (e) {
              return {
                type: "ON_INITIALIZE_CURRENT_AUTHORIZATION",
                currentAuthorizationIdentifier: e,
              };
            },
            showModalDialog: me,
            hideModalDialog: _e,
            onAuthorizationDelete: function (e) {
              return function (t, a) {
                t({ type: "ON_AUTHORIZATIONS_REQUEST_STARTED" });
                var n = a().authorizations.currentAuthorizationIdentifier,
                  r = a().settings,
                  o = r.startingProduct,
                  i = r.currentProduct,
                  c = r.locale,
                  s = i || o,
                  l = a().authorizations.list.find(function (e) {
                    return e.grt_identifier === n;
                  }).grt_ident_type;
                S()
                  .deleteAuthorization(n, l, s, c)
                  .then(function (a) {
                    "OK" === a.status.code.major
                      ? (t({ type: "ON_AUTHORIZATIONS_REQUEST_SUCCESS" }),
                        t(cc(n)),
                        I()
                          .getBalance(s, c)
                          .then(function (e) {
                            if ("OK" === e.status.code.major) {
                              var a =
                                e.data.balance &&
                                e.data.balance.ble_parameters.length > 0
                                  ? e.data.balance
                                  : void 0;
                              t(be(s, a));
                            }
                          }),
                        f.toast.success(z.t("withdraw_authorization_success")))
                      : "FAIL" === a.status.code.major &&
                          "SESSION_TIMEOUT" === a.status.code.minor
                        ? t(ha(e))
                        : (t({ type: "ON_AUTHORIZATIONS_REQUEST_FAILED" }),
                          f.toast.error(z.t("withdraw_authorization_failed")));
                  });
              };
            },
          },
        ),
        Oc = Object(m.b)(Tc, Ra.a)(function (e) {
          var t = e.licensePlate,
            a = e.amount,
            o = e.identifier,
            i = e.onInitializeCurrentAuthorization,
            c = e.currentBalanceLogo,
            s = e.index,
            l = e.showModalDialog,
            u = e.hideModalDialog,
            d = e.onAuthorizationDelete,
            m = e.grantee,
            _ = e.accepted,
            p = e.grantType,
            f = e.authorizationKey,
            g = e.searchAuthFieldValue,
            v = "ANONYMOUS" === p,
            h = v || "null" === m ? m : sc(m),
            E = a
              ? (function (e, t) {
                  if ("EURO" === e)
                    return (
                      (Ac = t.replace(".", ",")),
                      r.a.createElement(
                        "div",
                        { className: "authorization-amount" },
                        r.a.createElement(
                          "span",
                          { className: "euro" },
                          "\u20ac",
                        ),
                        r.a.createElement(
                          "span",
                          null,
                          " ",
                          t.replace(".", ","),
                        ),
                      )
                    );
                  if ("TIMES" === e) {
                    var a = 1 === t ? z.t("action") : z.t("actions");
                    return (
                      (Ac = t + " " + a),
                      r.a.createElement(
                        "div",
                        { className: "authorization-amount" },
                        r.a.createElement("span", null, " ", t, " ", a),
                      )
                    );
                  }
                  return (
                    (Ac = bc(t)),
                    r.a.createElement(
                      "div",
                      { className: "authorization-amount-container" },
                      r.a.createElement(
                        "div",
                        { className: "authorizationAmount" },
                        r.a.createElement("span", null, " ", bc(t), " "),
                      ),
                    )
                  );
                })(c, a)
              : void 0,
            b = Object(n.useContext)(Da),
            A = [
              {
                title: r.a.createElement(
                  "button",
                  {
                    className: "delete-context-menu-button",
                    "aria-label": z.t("withdraw"),
                  },
                  z.t("withdraw"),
                ),
                onClick: function () {
                  (i(o),
                    (b.content = r.a.createElement(Ec, {
                      displayEmail: h,
                      authorizationAmount: E,
                      licensePlate: t,
                      accepted: _,
                      anonymous: v,
                      authorizationKey: f,
                    })),
                    (b.buttons = (function (e) {
                      var t = e.yesClick,
                        a = e.noClick;
                      return [
                        {
                          text: z.t("withdraw_authorization_yes"),
                          onClick: t,
                          autoFocus: !0,
                        },
                        { text: z.t("withdraw_authorization_no"), onClick: a },
                      ];
                    })({
                      yesClick: function () {
                        (u(), d());
                      },
                      noClick: function () {
                        u();
                      },
                    })),
                    l());
                },
                params: {},
              },
            ],
            T = !0;
          return (
            g &&
              ((h && -1 !== h.toUpperCase().indexOf(g)) ||
                (Ac && -1 !== Ac.toString().toUpperCase().indexOf(g)) ||
                (t && -1 !== t.toUpperCase().indexOf(g)) ||
                ("N" === _ &&
                  z.t("not_accepted") &&
                  -1 !== z.t("not_accepted").toUpperCase().indexOf(g)) ||
                (T = !1)),
            r.a.createElement(
              r.a.Fragment,
              null,
              !0 === T &&
                r.a.createElement(Ar, {
                  index: s,
                  actions: A,
                  template: r.a.createElement(
                    "div",
                    { className: "authorization-item" },
                    r.a.createElement(
                      "div",
                      { className: "authorization-email-amount-container" },
                      !v &&
                        "null" !== h &&
                        r.a.createElement(
                          "div",
                          { className: "authorization-email" },
                          r.a.createElement("span", null, " ", h),
                        ),
                      v &&
                        "null" !== h &&
                        r.a.createElement(
                          "div",
                          { className: "authorization-name" },
                          r.a.createElement("span", null, " ", h),
                        ),
                      E && E,
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      t && r.a.createElement(cr, { licensePlate: t }),
                    ),
                    v &&
                      "N" === _ &&
                      r.a.createElement(
                        "div",
                        { className: "authorization-key" },
                        r.a.createElement("span", null, " ", f),
                      ),
                    r.a.createElement(
                      "div",
                      { className: "authorization-info" },
                      "N" === _ &&
                        r.a.createElement(
                          "span",
                          { className: "accepted" },
                          z.t("not_accepted"),
                        ),
                    ),
                  ),
                }),
            )
          );
        }),
        Nc = Object(s.b)(
          function (e) {
            var t = e.authorizations.list,
              a = e.form.searchAuthField,
              n = a ? a.value : void 0;
            return {
              authorizations: t || [],
              progress: e.authorizations.progress,
              searchAuthFieldValue: n,
              locale: e.settings.locale,
            };
          },
          { onFormFieldValueChanged: V },
        ),
        yc = Object(m.b)(Nc, Ra.a)(function (e) {
          var t = e.authorizations,
            a = e.progress,
            o = e.currentBalanceLogo,
            i = e.productOptions,
            c = e.searchAuthFieldValue,
            s = e.onFormFieldValueChanged,
            l = ke(i);
          return r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(Or, {
              value: c,
              nameField: "searchAuthField",
              onClickCancel: function () {
                s("searchAuthField", "");
                var e = window.document.querySelector("#searchAuthField");
                e && e.focus && e.focus();
              },
            }),
            !a &&
              t.length > 0 &&
              t.map(function (e, t) {
                var a = e.grt_parameters.find(function (e) {
                    return "GRT_MBR_IDENT" === e.prr_label;
                  }),
                  n = a ? a.prr_value : "",
                  i = e.grt_grantees[0].grantee,
                  s = e.grt_grantees[0].grant_type,
                  u = e.grt_grantees[0].accepted,
                  d = e.grt_grantees[0].key,
                  m =
                    -1 === l
                      ? e.grt_parameters.find(function (e) {
                          return "MAX_AMOUNT" === e.prr_label;
                        })
                      : void 0,
                  _ = m ? m.prr_value : void 0;
                return r.a.createElement(Oc, {
                  key: t,
                  index: t,
                  licensePlate: n,
                  amount: _,
                  identifier: e.grt_identifier,
                  currentBalanceLogo: o,
                  grantee: i,
                  grantType: s,
                  accepted: u,
                  searchAuthFieldValue: c,
                  authorizationKey: d,
                });
              }),
            !a &&
              0 === t.length &&
              r.a.createElement(
                "div",
                { className: "action-not-found" },
                r.a.createElement(
                  "h2",
                  { style: { textAlign: "center" } },
                  z.t("have_not_authorized"),
                ),
              ),
            a && r.a.createElement("div", { className: "loader" }),
          );
        }),
        Ic = Object(s.b)(
          function (e) {
            var t = e.settings,
              a = t.startingProduct,
              n = t.currentProduct,
              r = t.locale,
              o = e.ui.scrollEnd,
              i = n || a,
              c = e.data.products.find(function (e) {
                return e.value === i;
              }),
              s = e.authorizations.list.length;
            return {
              showAuthorizations: c.showAuthorizations,
              authorizationsCount: s,
              selectedProduct: c,
              locale: r,
              scrollEnd: o,
            };
          },
          {
            onAuthorizationsLoad: function (e) {
              return function (t, a) {
                t({ type: "ON_AUTHORIZATIONS_REQUEST_STARTED" });
                var n = a().settings,
                  r = n.startingProduct,
                  o = n.currentProduct,
                  i = o || r,
                  c = a().settings.locale;
                S()
                  .getAuthorizations(i, c)
                  .then(function (a) {
                    if ("OK" === a.status.code.major) {
                      t({ type: "ON_AUTHORIZATIONS_REQUEST_SUCCESS" });
                      var n = a.data.pdt_grants,
                        r = a.data.pdt_members;
                      (r &&
                        r.forEach(function (e) {
                          e.mbr_grants &&
                            e.mbr_grants.length > 0 &&
                            e.mbr_grants.forEach(function (e) {
                              n.push(e);
                            });
                        }),
                        t(
                          (function (e) {
                            return {
                              type: "ON_AUTHORIZATIONS_RETRIEVED_SUCCESS",
                              authorizations: e,
                            };
                          })(n),
                        ));
                    } else
                      "FAIL" === a.status.code.major &&
                      "SESSION_TIMEOUT" === a.status.code.minor
                        ? t(ha(e))
                        : t({ type: "ON_AUTHORIZATIONS_REQUEST_FAILED" });
                  });
              };
            },
            onFormFieldClearValue: B,
            hideModalDialog: _e,
            showModalDialog: me,
          },
        ),
        Cc = Object(m.b)(Ic, Ra.a)(function (e) {
          var t = e.history,
            a = e.onAuthorizationsLoad,
            o = e.onFormFieldClearValue,
            i = e.selectedProduct,
            c = e.showAuthorizations,
            s = e.authorizationsCount,
            l = e.scrollEnd;
          return (
            Object(n.useEffect)(
              function () {
                a(t);
              },
              [a, t],
            ),
            r.a.createElement(
              n.Fragment,
              null,
              c &&
                r.a.createElement(tr, {
                  screenClass: "screen-fixed-footer authorizations-container",
                  pageList: !0,
                  titleArea: z.t("authorizations"),
                  titleAreaCount: s,
                  bodyArea: r.a.createElement(yc, {
                    currentBalanceLogo:
                      i.balance && i.balance.ble_parameters[1].prr_value,
                    productOptions: i.options,
                  }),
                  actionArea:
                    !l &&
                    r.a.createElement(
                      "div",
                      { className: "add-new-button" },
                      r.a.createElement(
                        "button",
                        {
                          onClick: function () {
                            (o("newAuthorization_email"),
                              o("newAuthorization_licensePlate"),
                              o("newAuthorization_units"),
                              o("newAuthorization_name"),
                              o("authorizationType"),
                              t.push("authorizations-form/create"));
                          },
                          autoFocus: !0,
                          "aria-label": z.t("new_authorization"),
                        },
                        r.a.createElement("span", { className: "cross" }, "+"),
                        r.a.createElement(
                          "span",
                          null,
                          z.t("new_authorization"),
                        ),
                      ),
                    ),
                }),
              !c &&
                r.a.createElement(u.a, {
                  toRedirect: !0,
                  to: { pathname: "/" },
                }),
            )
          );
        }),
        Sc = function (e) {
          e.history;
          var t = e.favoriteName,
            a = e.licensePlate;
          return r.a.createElement(
            "div",
            { className: "confirmation-container" },
            r.a.createElement(
              "div",
              { className: "parking-info" },
              r.a.createElement(
                "div",
                { className: "parkapp-item" },
                r.a.createElement(
                  "div",
                  { className: "parkingActionContainer" },
                  r.a.createElement(
                    "div",
                    { className: "left-item" },
                    r.a.createElement(Tr, { name: t }),
                    r.a.createElement(cr, {
                      licensePlate: a,
                      licensePlateClass: "active",
                    }),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              "p",
              { className: "confirmation-message" },
              z.t("withdraw_favorite_confirmation"),
            ),
          );
        },
        wc = Object(s.b)(
          function (e) {
            return { locale: e.settings.locale };
          },
          {
            onInitializeCurrentFavorite: function (e) {
              return {
                type: "ON_INITIALIZE_CURRENT_FAVORITE",
                currentFavoriteIdentifier: e,
              };
            },
            hideModalDialog: _e,
            showModalDialog: me,
            onFavoriteDelete: function (e) {
              return function (t, a) {
                t({ type: "ON_FAVORITES_REQUEST_STARTED" });
                var n = a().favorites.currentFavoriteIdentifier,
                  r = a().settings,
                  o = r.startingProduct,
                  i = r.currentProduct,
                  c = r.locale,
                  s = i || o,
                  l = a().favorites.list.find(function (e) {
                    return e.mbr_identifier === n;
                  }),
                  u = {
                    favorite: {
                      fav_parameters: [
                        {
                          prr_label: "NICKNAME",
                          prr_value:
                            l.mbr_parameters.length > 0
                              ? l.mbr_parameters.find(function (e) {
                                  return "NICKNAME" === e.prr_label;
                                }).prr_value
                              : "",
                        },
                      ],
                      action: "remove",
                      mbr_ident: n,
                    },
                  },
                  d = JSON.stringify(u);
                k()
                  .handleFavorite(d, c, s)
                  .then(function (a) {
                    "OK" === a.status.code.major
                      ? (t({ type: "ON_FAVORITES_REQUEST_SUCCESS" }),
                        t(Yo(n)),
                        f.toast.success(z.t("withdraw_favorite_success")))
                      : "FAIL" === a.status.code.major &&
                          "SESSION_TIMEOUT" === a.status.code.minor
                        ? (t({ type: "ON_FAVORITES_REQUEST_FAILED" }), t(ha(e)))
                        : (t({ type: "ON_FAVORITES_REQUEST_FAILED" }),
                          f.toast.error(z.t("withdraw_favorite_failed")));
                  })
                  .catch(function (e) {
                    return t({ type: "ON_FAVORITES_REQUEST_FAILED" });
                  });
              };
            },
            onInitializeFormField: W,
            closeContextMenu: ae,
          },
        ),
        kc = Object(m.b)(wc, Ra.a)(function (e) {
          var t = e.licensePlate,
            a = e.name,
            o = e.index,
            i = e.history,
            c = e.identifier,
            s = e.onInitializeCurrentFavorite,
            l = e.hideModalDialog,
            u = e.showModalDialog,
            d = e.onFavoriteDelete,
            m = e.onInitializeFormField,
            _ = e.closeContextMenu,
            p = Object(n.useContext)(Da),
            f = function () {
              (s(c),
                (p.content = r.a.createElement(Sc, {
                  licensePlate: t,
                  favoriteName: a,
                })),
                (p.buttons = (function (e) {
                  var t = e.yesClick,
                    a = e.noClick;
                  return [
                    { text: z.t("yes_delete_it"), onClick: t, autoFocus: !0 },
                    { text: z.t("no_keep_it"), onClick: a },
                  ];
                })({
                  yesClick: function () {
                    (l(), d(i));
                  },
                  noClick: function () {
                    l();
                  },
                })),
                u());
            },
            g = [
              {
                title: r.a.createElement(
                  "button",
                  {
                    className: "delete-context-menu-button",
                    "aria-label": z.t("delete"),
                  },
                  z.t("delete"),
                ),
                onClick: function () {
                  return f();
                },
                params: {},
              },
              {
                title: r.a.createElement(
                  "button",
                  {
                    className: "change-context-menu-button",
                    "aria-label": z.t("change"),
                  },
                  r.a.createElement("span", null, z.t("change")),
                ),
                onClick: function () {
                  return (
                    s(c),
                    m("newFavorite_licensePlate", t),
                    m("newFavorite_name", a),
                    i.push("/change-favorite"),
                    void _()
                  );
                },
                params: {},
              },
              {
                title: r.a.createElement(
                  "button",
                  {
                    className: "start-parking-context-menu-button",
                    "aria-label": z.t("add_new_parking_action"),
                  },
                  r.a.createElement(
                    "span",
                    null,
                    z.t("add_new_parking_action"),
                  ),
                ),
                onClick: function () {
                  return (
                    m("newParkingActions_license_plate", t),
                    m("newParkingActions_name_favorite", a),
                    i.push("/parking-actions-form/create"),
                    void _()
                  );
                },
                params: {},
              },
            ];
          return r.a.createElement(Ar, {
            index: o,
            actions: g,
            template: r.a.createElement(
              "div",
              { className: "favorite-item" },
              r.a.createElement(Tr, { name: a }),
              r.a.createElement(cr, { licensePlate: t }),
            ),
          });
        }),
        Pc = Object(m.c)({}),
        Dc = Object(s.b)(function (e) {
          var t = e.favorites.list;
          return {
            favorites: t || [],
            progress: e.favorites.progress,
            locale: e.settings.locale,
          };
        }, {}),
        jc = Object(m.b)(Dc, Pc, Ra.a)(function (e) {
          var t = e.favorites,
            a = e.progress;
          return r.a.createElement(
            n.Fragment,
            null,
            !a &&
              t.length > 0 &&
              t.map(function (e, t) {
                var a = e.mbr_identifier,
                  n =
                    e.mbr_parameters.length > 0
                      ? e.mbr_parameters.find(function (e) {
                          return "NICKNAME" === e.prr_label;
                        }).prr_value
                      : "";
                return r.a.createElement(kc, {
                  key: t,
                  index: t,
                  licensePlate: a,
                  name: n,
                  identifier: e.mbr_identifier,
                });
              }),
            !a &&
              0 === t.length &&
              r.a.createElement(
                "div",
                { className: "action-not-found" },
                r.a.createElement(
                  "h2",
                  { style: { textAlign: "center" }, "aria-level": "1" },
                  z.t("have_not_favorites"),
                ),
              ),
            a && r.a.createElement("div", { className: "loader" }),
          );
        }),
        Lc = Object(s.b)(
          function (e) {
            var t = e.ui,
              a = t.showContextMenu,
              n = t.scrollEnd;
            return {
              favoritesCount: e.favorites.list.length,
              showContextMenu: a,
              scrollEnd: n,
              locale: e.settings.locale,
            };
          },
          { onFavoritesLoad: zo, hideModalDialog: _e, showModalDialog: me },
        ),
        Mc = Object(m.b)(Lc, Ra.a)(function (e) {
          var t = e.history,
            a = e.onFavoritesLoad,
            o = e.favoritesCount,
            i = e.showContextMenu,
            c = e.scrollEnd;
          return (
            Object(n.useEffect)(
              function () {
                a(t);
              },
              [t, a],
            ),
            r.a.createElement(tr, {
              screenClass: "favoriteContainer screen-fixed-footer",
              pageList: !0,
              titleArea: z.t("favorites"),
              titleAreaCount: o,
              bodyArea: r.a.createElement(jc, null),
              actionArea:
                !i &&
                !c &&
                r.a.createElement(
                  "div",
                  { className: "add-new-button" },
                  r.a.createElement(
                    "button",
                    {
                      autoFocus: !0,
                      onClick: function () {
                        return t.push("create-favorite");
                      },
                      "aria-label": z.t("new_favorite"),
                    },
                    r.a.createElement("span", { className: "cross" }, "+"),
                    r.a.createElement("span", null, z.t("new_favorite")),
                  ),
                ),
            })
          );
        }),
        Rc = Object(s.b)(
          function (e) {
            var t = e.form,
              a = t.newAuthorization_email,
              n = t.newAuthorization_licensePlate,
              r = t.newAuthorization_units,
              o = t.newAuthorization_name,
              i = t.authorizationType,
              c = e.settings,
              s = c.startingProduct,
              l = c.currentProduct,
              u = c.locale,
              d = c.email,
              m = e.data.products,
              _ = a && a.value,
              p = n && n.value,
              f = r && r.value,
              g = o && o.value,
              v = l || s,
              h = m.find(function (e) {
                return e.value === v;
              }),
              E =
                h && h.balance
                  ? h.balance.ble_parameters.find(function (e) {
                      return "AMOUNT" === e.prr_label;
                    }).prr_value
                  : "",
              b = h.productGrantParameters.find(function (e) {
                return "GRT_MBR_IDENT" === e.prr_label;
              }),
              A = b ? b.prr_options : void 0,
              T = h.productGrantParameters.find(function (e) {
                return "GRT_EMAIL" === e.prr_label;
              }),
              O = h.productGrantParameters.find(function (e) {
                return "MAX_AMOUNT" === e.prr_label;
              }),
              N = O ? O.prr_options : void 0,
              y = i ? i.value : "email";
            return {
              progress: e.authorizationsForm.progress,
              licensePlate: p,
              units: f,
              authorizationEmail: _,
              balance: E,
              userEmail: d,
              productOptions: h.options,
              grantLicensePlate: A,
              grantEmail: T,
              grantMaxAmount: N,
              locale: u,
              authorizationTypeValue: y,
              newAuthorizationName: g,
            };
          },
          {
            onCreateAuthorizationClick: function (e) {
              return function (t, a) {
                var n = a().settings,
                  r = n.startingProduct,
                  o = n.currentProduct,
                  i = n.locale,
                  c = a().authorizationsForm.selectedType,
                  s = o || r,
                  l = a().data.products,
                  u = l.find(function (e) {
                    return e.value === s;
                  }),
                  d = u.validFrom,
                  m = u.productGrantParameters,
                  _ = l.find(function (e) {
                    return e.value === s;
                  }).validTo,
                  p = l.find(function (e) {
                    return e.value === s;
                  }).options,
                  g = a().form,
                  v = g.newAuthorization_email,
                  h = g.newAuthorization_licensePlate,
                  E = g.newAuthorization_units,
                  b = g.newAuthorization_name,
                  A = g.authorizationType,
                  T = v ? v.value : "",
                  O = h ? h.value : "",
                  N = E ? E.value : void 0,
                  y = b ? b.value : "",
                  C = A ? A.value : "email",
                  w = m.find(function (e) {
                    return "MAX_AMOUNT" === e.prr_label;
                  }),
                  k = w ? w.prr_options : void 0,
                  P = ke(p),
                  D = { grant: { grt_parameters: [] } };
                if (-1 !== we(p) && "key" === C) {
                  var j = { prr_label: "GRT_NAME", prr_value: y };
                  D.grant.grt_parameters.push(j);
                } else {
                  var L = { prr_label: "GRT_EMAIL", prr_value: T };
                  D.grant.grt_parameters.push(L);
                }
                if ("" !== O) {
                  var M = { prr_label: "GRT_MBR_IDENT", prr_value: O };
                  D.grant.grt_parameters.push(M);
                }
                if (-1 === P && k && "INTERNAL" !== k) {
                  var R = { prr_label: "MAX_AMOUNT", prr_value: N };
                  N && D.grant.grt_parameters.push(R);
                }
                var F = { prr_label: "VALID_FROM", prr_value: d },
                  U = { prr_label: "VALID_UNTIL", prr_value: _ };
                if (
                  (D.grant.grt_parameters.push(F),
                  D.grant.grt_parameters.push(U),
                  "only_once" === c)
                ) {
                  D.grant.grt_parameters.push({
                    prr_label: "MAX_USE",
                    prr_value: 1,
                  });
                }
                var H = JSON.stringify(D);
                (t({ type: "CREATE_AUTHORIZATION_STARTED" }),
                  S()
                    .createAuthorization(H, s, i)
                    .then(function (a) {
                      "OK" === a.status.code.major
                        ? (t({ type: "CREATE_AUTHORIZATION_SUCCESS" }),
                          I()
                            .getBalance(s, i)
                            .then(function (e) {
                              if ("OK" === e.status.code.major) {
                                var a =
                                  e.data.balance &&
                                  e.data.balance.ble_parameters.length > 0
                                    ? e.data.balance
                                    : void 0;
                                t(be(s, a));
                              }
                            }),
                          t(B("newAuthorization_email")),
                          t(B("newAuthorization_licensePlate")),
                          t(B("newAuthorization_units")),
                          t(B("newAuthorization_name")),
                          t(B("authorizationType")),
                          e.push("/authorizations"))
                        : "FAIL" === a.status.code.major &&
                            "SESSION_TIMEOUT" === a.status.code.minor
                          ? (t({ type: "CREATE_AUTHORIZATION_FAILED" }),
                            t(ha(e)))
                          : (t({ type: "CREATE_AUTHORIZATION_FAILED" }),
                            f.toast.error(a.status.message));
                    })
                    .catch(function (e) {
                      t({ type: "CREATE_AUTHORIZATION_FAILED" });
                    }));
              };
            },
            onErrorUpdate: K,
          },
        ),
        Fc = Object(m.b)(Rc, Ra.a)(function (e) {
          var t = e.onCreateAuthorizationClick,
            a = e.history,
            o = e.progress,
            i = e.authorizationEmail,
            c = e.licensePlate,
            s = e.units,
            l = e.balance,
            u = e.onErrorUpdate,
            d = e.userEmail,
            m = e.grantLicensePlate,
            _ = e.grantEmail,
            p = e.grantMaxAmount,
            f = e.productOptions,
            g = e.authorizationTypeValue,
            v = e.newAuthorizationName,
            h = ke(f),
            E = we(f);
          return r.a.createElement(
            n.Fragment,
            null,
            !o &&
              r.a.createElement(
                "button",
                {
                  className: "button submit",
                  onClick: function () {
                    (function (e, t, a, n, r, o, i, c) {
                      var s = !1,
                        l = Ce(e, d, o),
                        m = Se(c);
                      return (
                        -1 !== E
                          ? "email" === g && l
                            ? (u("newAuthorization_email", l), (s = !0))
                            : "key" === g &&
                              m &&
                              (u("newAuthorization_name", m), (s = !0))
                          : l && (u("newAuthorization_email", l), (s = !0)),
                        r &&
                          "REQUIRED" === r &&
                          ((t && "" !== t) ||
                            (u(
                              "newAuthorization_licensePlate",
                              "value_empty_message",
                            ),
                            (s = !0))),
                        -1 === h &&
                          i &&
                          "REQUIRED" === i &&
                          (a && "" !== a
                            ? a > parseFloat(n)
                              ? (u(
                                  "newAuthorization_units",
                                  "units_too_large_message",
                                ),
                                (s = !0))
                              : a <= 0 &&
                                (u(
                                  "newAuthorization_units",
                                  "value_more_then_0",
                                ),
                                (s = !0))
                            : (u(
                                "newAuthorization_units",
                                "value_empty_message",
                              ),
                              (s = !0))),
                        s
                      );
                    })(i, c, s, l, m, _, p, v) || t(a);
                  },
                  "aria-label": z.t("authorization_save"),
                },
                z.t("authorization_save"),
              ),
            o && r.a.createElement("div", { className: "loader small" }),
          );
        }),
        Uc = a(334),
        Hc = Object(m.c)({
          componentDidMount: function () {
            this.props.onInitializeFormField("newAuthorization_units", 1);
          },
        }),
        xc = Object(s.b)(
          function (e) {
            return { locale: e.settings.locale };
          },
          { onInitializeFormField: W },
        ),
        zc =
          (Object(m.b)(xc, Hc)(function (e) {
            var t = e.maxValue,
              a = e.onInitializeFormField,
              n = new Array(t).fill(void 0).map(function (e, t) {
                return t + 1;
              });
            return r.a.createElement(
              "div",
              null,
              r.a.createElement("span", null, z.t("units")),
              r.a.createElement(
                Uc.a,
                {
                  defaultSelectedValue: 0,
                  onValueChange: function (e) {
                    return a("newAuthorization_units", e + 1);
                  },
                },
                n.map(function (e, t) {
                  return r.a.createElement(Uc.a.Item, { value: t, key: t }, e);
                }),
              ),
            );
          }),
          Object(s.b)(
            function (e) {
              return {
                selectedType: e.authorizationsForm.selectedType,
                locale: e.settings.locale,
              };
            },
            {
              onSelect: function (e) {
                return { type: "ON_SELECT", value: e };
              },
            },
          )),
        Yc =
          (Object(m.b)(zc)(function (e) {
            var t = e.selectedType,
              a = e.onSelect;
            return r.a.createElement(
              "div",
              { className: "input-container license-plate-container-white" },
              r.a.createElement(
                "div",
                { className: "input-clear-container" },
                r.a.createElement(
                  "select",
                  {
                    value: t,
                    onChange: function (e) {
                      var t = e.target.value;
                      a(t);
                    },
                  },
                  r.a.createElement(
                    "option",
                    { value: "with_balance" },
                    z.t("with_balance"),
                  ),
                  r.a.createElement(
                    "option",
                    { value: "only_once" },
                    z.t("only_once"),
                  ),
                ),
              ),
            );
          }),
          function (e) {
            if (e) {
              var t = Number(e);
              return t > 60
                ? { hours: Math.trunc(t / 60), minutes: Math.floor(t % 60) }
                : { hours: 0, minutes: t };
            }
            return { hours: 0, minutes: 0 };
          }),
        Gc = Object(m.c)({
          componentDidMount: function () {
            var e = this.props,
              t = e.onFormFieldValueChanged,
              a = e.hours,
              n = e.minutes;
            t("newAuthorization_units", De(a, n));
          },
        }),
        Vc = {
          onHoursIncrease: function (e, t) {
            var a = e.hours,
              n = e.minutes,
              r = t.onFormFieldValueChanged,
              o = t.balance;
            return function () {
              var e = Number(a),
                t = Number(n),
                i = Yc(o).hours,
                c = Yc(o).minutes;
              if (e === i - 1 && t > c)
                return (
                  r("newAuthorization_units", De(e, n)),
                  { hours: e < 10 ? "0".concat(e) : e }
                );
              if (e === i)
                return (
                  r("newAuthorization_units", De("00", n)),
                  { hours: "00" }
                );
              var s = ++e;
              return (
                r("newAuthorization_units", De(s, n)),
                { hours: s < 10 ? "0".concat(s) : s }
              );
            };
          },
          onHoursDecrease: function (e, t) {
            var a = e.hours,
              n = e.minutes,
              r = t.onFormFieldValueChanged,
              o = t.balance;
            return function () {
              var e = Number(a),
                t = Number(n),
                i = Yc(o).hours;
              if (t > Yc(o).minutes) {
                if (0 === e) {
                  var c = --i;
                  return (
                    r("newAuthorization_units", De(c, n)),
                    { hours: c < 10 ? "0".concat(c) : c }
                  );
                }
                var s = --e;
                return (
                  r("newAuthorization_units", De(s, n)),
                  { hours: s < 10 ? "0".concat(s) : s }
                );
              }
              if (0 === e)
                return (
                  r("newAuthorization_units", De(i, n)),
                  { hours: i < 10 ? "0".concat(i) : i }
                );
              var l = --e;
              return (
                r("newAuthorization_units", De(l, n)),
                { hours: l < 10 ? "0".concat(l) : l }
              );
            };
          },
          onMinutesIncrease: function (e, t) {
            var a = e.hours,
              n = e.minutes,
              r = t.onFormFieldValueChanged,
              o = t.balance;
            return function () {
              var e = Number(n),
                t = Number(a),
                i = Yc(o).hours,
                c = Yc(o).minutes;
              if (t === i && e === c)
                return (
                  r("newAuthorization_units", De(a, "00")),
                  { minutes: "00" }
                );
              if (59 === e)
                return (
                  r("newAuthorization_units", De(a, "00")),
                  { minutes: "00" }
                );
              var s = ++e;
              return (
                r("newAuthorization_units", De(a, s)),
                { minutes: s < 10 ? "0".concat(s) : s }
              );
            };
          },
          onMinutesDecrease: function (e, t) {
            var a = e.hours,
              n = e.minutes,
              r = t.onFormFieldValueChanged,
              o = t.balance;
            return function () {
              var e = Number(n),
                t = Number(a),
                i = Yc(o).hours,
                c = Yc(o).minutes;
              if (t === i) {
                if (0 === e)
                  return (
                    r("newAuthorization_units", De(a, c)),
                    { minutes: c < 10 ? "0".concat(c) : c }
                  );
                var s = --e;
                return (
                  r("newAuthorization_units", De(a, s)),
                  { minutes: s < 10 ? "0".concat(s) : s }
                );
              }
              if (0 === e)
                return (
                  r("newAuthorization_units", De(a, 59)),
                  { minutes: 59 }
                );
              var l = --e;
              return (
                r("newAuthorization_units", De(a, l)),
                { minutes: l < 10 ? "0".concat(l) : l }
              );
            };
          },
          onHoursChange: function (e, t) {
            var a = e.minutes,
              n = t.onFormFieldValueChanged,
              r = t.balance;
            return function (e) {
              if (e <= Yc(r).hours && e > -1)
                return (n("newAuthorization_units", De(e, a)), { hours: e });
            };
          },
          onMinutesChange: function (e, t) {
            var a = e.hours,
              n = t.onFormFieldValueChanged,
              r = t.balance;
            return function (e) {
              var t = Number(a),
                o = Yc(r).hours,
                i = Yc(r).minutes;
              if (e.length < 3)
                if (t === o) {
                  if (e <= i && e > -1)
                    return (
                      n("newAuthorization_units", De(a, e)),
                      { minutes: e }
                    );
                } else {
                  if ("" === e)
                    return (n("newAuthorization_units", "00"), { minutes: e });
                  if (e < 60 && e > -1)
                    return (
                      n("newAuthorization_units", De(a, e)),
                      { minutes: e }
                    );
                }
            };
          },
          onBlurHours: function (e, t) {
            var a = e.minutes,
              n = t.onFormFieldValueChanged,
              r = t.balance;
            return function (e) {
              var t = Yc(r).hours;
              return e || 0 === e
                ? e && e < 10
                  ? (n("newAuthorization_units", De(e, a)),
                    { hours: "0".concat(Number(e)) })
                  : void 0
                : (n("newAuthorization_units", De(fe()().format("HH"), a)),
                  { hours: t < 10 ? "0".concat(t) : t });
            };
          },
          onBlurMinutes: function (e, t) {
            var a = e.hours,
              n = t.onFormFieldValueChanged,
              r = t.balance;
            return function (e) {
              var t = Yc(r).minutes;
              return e || 0 === e
                ? e && e < 10
                  ? (n("newAuthorization_units", De(a, e)),
                    { minutes: "0".concat(Number(e)) })
                  : void 0
                : (n("newAuthorization_units", De(a, fe()().format("mm"))),
                  { minutes: t < 10 ? "0".concat(t) : Math.floor(t) });
            };
          },
        },
        Bc = Object(s.b)(
          function (e) {
            return { locale: e.settings.locale };
          },
          { onFormFieldValueChanged: V },
        ),
        Wc = Object(m.b)(
          Bc,
          Object(m.e)(function (e) {
            e.balance;
            var t = 0,
              a = 0;
            return {
              hours: (t = t < 10 ? "0".concat(t) : t),
              minutes: (a = a < 10 ? "0".concat(a) : a),
            };
          }, Vc),
          Gc,
        )(function (e) {
          e.onFormFieldValueChanged;
          var t = e.hours,
            a = e.minutes,
            n = e.onHoursIncrease,
            o = e.onHoursDecrease,
            i = e.onMinutesIncrease,
            c = e.onMinutesDecrease,
            s = e.onBlurMinutes,
            l = e.onBlurHours,
            u = e.onMinutesChange,
            d = e.onHoursChange;
          e.balance;
          return r.a.createElement(
            "div",
            { className: "selectDateTime-container" },
            r.a.createElement(
              "div",
              { className: "time-buttons-container" },
              r.a.createElement(
                "div",
                { className: "time-buttons" },
                r.a.createElement(
                  "div",
                  { className: "hours-buttons" },
                  r.a.createElement("label", null, z.t("hours")),
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className: "parkapp-button gray-button",
                      onClick: function () {
                        n();
                      },
                      "aria-label": z.t("increase_hours"),
                    },
                    "+",
                  ),
                  r.a.createElement("input", {
                    value: t,
                    className: "time-value",
                    "aria-labelledby": "label-hours",
                    "aria-required": !1,
                    "aria-label": z.t("hours"),
                    onClick: function (e) {
                      e.target.select();
                    },
                    onBlur: function () {
                      return l(t);
                    },
                    onChange: function (e) {
                      var t = e.target.value;
                      d(t);
                    },
                  }),
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className: "parkapp-button gray-button",
                      onClick: function () {
                        o();
                      },
                      "aria-label": z.t("decrease_hours"),
                    },
                    "-",
                  ),
                ),
                r.a.createElement(
                  "div",
                  { className: "minutes-buttons" },
                  r.a.createElement("label", null, z.t("minutes")),
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className: "parkapp-button gray-button",
                      onClick: function () {
                        i();
                      },
                      "aria-label": z.t("increase_minutes"),
                    },
                    "+",
                  ),
                  r.a.createElement("input", {
                    value: a,
                    className: "time-value",
                    onClick: function (e) {
                      e.target.select();
                    },
                    onBlur: function () {
                      return s(a);
                    },
                    onChange: function (e) {
                      var t = e.target.value;
                      u(t);
                    },
                    "aria-labelledby": "label-minutes",
                    "aria-required": !1,
                    "aria-label": z.t("minutes"),
                  }),
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className: "parkapp-button gray-button",
                      onClick: function () {
                        c();
                      },
                      "aria-label": z.t("decrease_minutes"),
                    },
                    "-",
                  ),
                ),
              ),
            ),
          );
        }),
        Kc = Object(s.b)(function (e) {
          var t = e.form.authorizationType,
            a = e.settings.locale;
          return { authorizationTypeValue: t ? t.value : "email", locale: a };
        }, null),
        Zc = Object(m.b)(Kc)(function (e) {
          var t = e.authorizationTypeValue,
            a = [
              { value: "email", title: z.t("through_email") },
              { value: "key", title: z.t("through_authorization_key") },
            ];
          return r.a.createElement(
            "div",
            { className: "authorization-type-container" },
            r.a.createElement("label", null, z.t("authorization_type")),
            r.a.createElement(eo, {
              name: "authorizationType",
              list: a,
              value: t,
              defaultValue: t,
            }),
          );
        }),
        Qc = Object(s.b)(
          function (e) {
            var t = e.settings,
              a = t.startingProduct,
              n = t.currentProduct,
              r = t.locale,
              o = t.email,
              i = e.form,
              c = i.newAuthorization_email,
              s = i.newAuthorization_licensePlate,
              l = i.newAuthorization_units,
              u = i.authorizationType,
              d = i.newAuthorization_name,
              m = e.data.products,
              _ = c && c.value,
              p = s && s.value,
              f = l && l.value,
              g = d && d.value,
              v = n || a,
              h = m.find(function (e) {
                return e.value === v;
              }),
              E =
                h && h.balance
                  ? h.balance.ble_parameters.find(function (e) {
                      return "AMOUNT" === e.prr_label;
                    }).prr_value
                  : "",
              b =
                h && h.balance
                  ? h.balance.ble_parameters.find(function (e) {
                      return "CURRENCY_CODE" === e.prr_label;
                    }).prr_value
                  : "",
              A = h.productGrantParameters.find(function (e) {
                return "GRT_MBR_IDENT" === e.prr_label;
              }),
              T = A ? A.prr_options : void 0,
              O = h.productGrantParameters.find(function (e) {
                return "GRT_EMAIL" === e.prr_label;
              }),
              N = h.productGrantParameters.find(function (e) {
                return "MAX_AMOUNT" === e.prr_label;
              }),
              y = N ? N.prr_options : void 0,
              I = u ? u.value : "email";
            return {
              showAuthorizations: h.showAuthorizations,
              currentLicensePlate: p,
              authorizationEmail: _,
              currentUnits: f,
              balance: E,
              email: o,
              selectedType: e.authorizationsForm.selectedType,
              productOptions: h.options,
              code: b,
              grantLicensePlate: T,
              grantEmail: O,
              grantMaxAmount: y,
              locale: r,
              authorizationTypeValue: I,
              newAuthorizationName: g,
            };
          },
          { onFormFieldClearValue: B, onInitializeFormField: W },
        ),
        Jc = Object(m.b)(Qc, Ra.a)(function (e) {
          var t = e.history,
            a = e.match,
            o = e.currentLicensePlate,
            i = e.showAuthorizations,
            c = e.authorizationEmail,
            s = e.onFormFieldClearValue,
            l = e.balance,
            d = e.currentUnits,
            m = e.email,
            _ = e.grantLicensePlate,
            p = e.grantEmail,
            f = e.grantMaxAmount,
            g = (e.selectedType, e.code),
            v = e.productOptions,
            h = e.authorizationTypeValue,
            E = e.newAuthorizationName,
            b = e.onInitializeFormField;
          Object(n.useEffect)(
            function () {
              f && "OPTIONAL" !== f && b("newAuthorization_units", "5");
            },
            [f, b],
          );
          var A =
              "create" === a.params.type
                ? z.t("new_authorization")
                : z.t("edit_authorization"),
            T = (function (e) {
              return "EURO" === e
                ? z.t("EURO_label")
                : "TIMES" === e
                  ? z.t("TIMES_label")
                  : z.t("MINUTE_label");
            })(g),
            O = ke(v),
            N = we(v);
          return r.a.createElement(
            n.Fragment,
            null,
            i &&
              r.a.createElement(tr, {
                showBackButton: !0,
                titleArea: A,
                titleAreaClick: function () {
                  (s("newAuthorization_email"),
                    s("newAuthorization_licensePlate"),
                    s("newAuthorization_units"),
                    s("newAuthorization_name"),
                    s("authorizationType"),
                    t.push("/authorizations"));
                },
                titleAreaBackPath: "/authorizations",
                bodyArea: r.a.createElement(
                  "div",
                  { className: "parkapp-form authorizations-form" },
                  -1 !== N && r.a.createElement(Zc, null),
                  Oe(a, p, N, h) &&
                    r.a.createElement(Ia, {
                      name: "newAuthorization_email",
                      value: c,
                      label: p.prr_prompt,
                      validator: function (e) {
                        return Ce(e, m, p);
                      },
                      autofocus: !0,
                      areaLabel: z.t("email"),
                      enterWithoutSpaces: !0,
                    }),
                  Ne(N, h) &&
                    r.a.createElement(Ia, {
                      name: "newAuthorization_name",
                      label: z.t("name"),
                      autofocus: !0,
                      value: E,
                      validator: function (e) {
                        return Se(e);
                      },
                      areaLabel: z.t("name"),
                    }),
                  Ie(_) &&
                    r.a.createElement(Ia, {
                      name: "newAuthorization_licensePlate",
                      value: o,
                      label: z.t("license_plate"),
                      maxlength: 10,
                      licensePlate: !0,
                      validator: function (e) {
                        return (function (e, t) {
                          if (t && "REQUIRED" === t && (!e || "" === e))
                            return "value_empty_message";
                        })(e, _);
                      },
                      areaLabel: z.t("license_plate"),
                    }),
                  "MINUTE" !== g &&
                    ye(a, O, f) &&
                    r.a.createElement(Ia, {
                      name: "newAuthorization_units",
                      value: d,
                      label: T,
                      units: !0,
                      validator: function (e) {
                        return (function (e, t, a) {
                          if ("REQUIRED" === a) {
                            if (!e || "" === e) return "value_empty_message";
                            if (e > parseFloat(t))
                              return "units_too_large_message";
                            if (e <= 0) return "value_more_then_0";
                          }
                        })(e, l, f);
                      },
                      areaLabel: T,
                    }),
                  "MINUTE" === g &&
                    ye(a, O, f) &&
                    r.a.createElement(Wc, { balance: l }),
                ),
                actionArea: r.a.createElement(Fc, null),
              }),
            !i &&
              r.a.createElement(u.a, { toRedirect: !0, to: { pathname: "/" } }),
          );
        }),
        qc = Object(m.c)({
          componentDidMount: function () {
            var e = this.props,
              t = e.startingProduct,
              a = e.currentProduct;
            (0, e.getTopupListUpgrade)(a || t, e.history);
          },
        }),
        Xc = Object(s.b)(
          function (e) {
            return {
              startingProduct: e.settings.startingProduct,
              currentProduct: e.settings.currentProduct,
              progress: e.topupList.progress,
              topupList: e.topupList.topupList,
              error: e.topupList.error,
              products: void 0 !== e.data.products ? e.data.products : [],
              progressOnButton: e.topupList.progressOnButton,
              topupPicker:
                void 0 !== e.form.topupPicker ? e.form.topupPicker.value : 0,
              currentIndexValue: e.form.currentIndex
                ? e.form.currentIndex.value
                : 0,
              locale: e.settings.locale,
            };
          },
          {
            getTopupListUpgrade: je,
            getStartTransactionTopup: function (e, t, a, n, r) {
              return function (n, o) {
                var i = o().settings.currentProduct,
                  c = o().settings.startingProduct;
                n(Fe());
                var s = o().settings.locale;
                P()
                  .getStartTransactionTopup(e, s, t, a)
                  .then(function (e) {
                    if ("OK" === e.status.code.major) {
                      var t = e.data,
                        a = t.forwarding_url,
                        o = t.forwarding_method,
                        s = t.parameters;
                      (i
                        ? H.setItem("topupCurrentProduct", i)
                        : c && H.setItem("topupCurrentProduct", c),
                        n(xe(a, o, s, r)),
                        n(Ue(e)));
                    } else
                      "FAIL" === e.status.code.major &&
                      "SESSION_TIMEOUT" === e.status.code.minor
                        ? (n(He(e.status.message)), n(ha(r)))
                        : (n(He(e.status.message)),
                          f.toast.error(e.status.message));
                  })
                  .catch(function (e) {
                    n(ha(r));
                  });
              };
            },
            onInitializeFormField: W,
          },
        ),
        $c = Object(m.b)(Xc, Ra.a, qc)(function (e) {
          var t = e.history,
            a = (e.getTopupListUpgrade, e.getStartTransactionTopup),
            o = e.startingProduct,
            i = e.currentProduct,
            c = e.progress,
            s = e.topupList,
            l = (e.error, e.products),
            u = e.progressOnButton,
            d = e.topupPicker,
            m = e.currentIndexValue;
          return r.a.createElement(tr, {
            titleArea: z.t("top_up"),
            bodyArea: c
              ? r.a.createElement("div", { className: "loader" })
              : r.a.createElement(
                  "div",
                  { className: "topup-container" },
                  r.a.createElement(
                    "div",
                    { className: "topup-header" },
                    0 !== s.length &&
                      r.a.createElement("span", null, z.t("how_much")),
                    0 === s.length &&
                      r.a.createElement("span", null, z.t("topUp_massage")),
                  ),
                  0 !== s.length &&
                    r.a.createElement(
                      n.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "div",
                          { className: "parkapp-form settings-form" },
                          r.a.createElement(_o, {
                            name: "topupPicker",
                            list: s,
                            ariaLabel: "Top up",
                          }),
                        ),
                      ),
                      r.a.createElement(
                        "span",
                        { className: "topup-description" },
                        "(".concat(z.t("topup_description"), ")"),
                      ),
                    ),
                ),
            actionArea: u
              ? r.a.createElement("div", { className: "loader" })
              : r.a.createElement(
                  "button",
                  {
                    "aria-label": z.t("pay"),
                    disabled: 0 === s.length,
                    className: "button submit ".concat(
                      0 === s.length ? "disabled" : "",
                    ),
                    onClick: function () {
                      var e,
                        n,
                        r = i || o,
                        c = l.filter(function (e, t) {
                          if (e.value === r) return ((n = t), e);
                        })[0].cityId;
                      ((e = "" === d ? s[0].value : d), a(c, e, r, n, t));
                    },
                  },
                  z.t("pay"),
                  " ",
                  s.length > 0 ? s[m].title : "",
                ),
          });
        }),
        es = [
          z.t("january"),
          z.t("february"),
          z.t("march"),
          z.t("april"),
          z.t("may"),
          z.t("june"),
          z.t("july"),
          z.t("august"),
          z.t("september"),
          z.t("october"),
          z.t("november"),
          z.t("december"),
        ],
        ts = function (e) {
          return ""
            .concat(e.getDate(), " ")
            .concat(es[e.getMonth()], " ")
            .concat(e.getFullYear());
        },
        as = Object(s.b)(function (e) {
          var t = e.data.products,
            a = e.settings,
            n = a.startingProduct,
            r = a.currentProduct,
            o = a.locale,
            i = r || n;
          return {
            selectedProduct: t.find(function (e) {
              return e.value === i;
            }),
            locale: o,
          };
        }, null),
        ns = Object(m.b)(as)(function (e) {
          var t = e.selectedProduct,
            a = Ge(t.validFrom),
            n = t.validTo && "" !== t.validTo && Ge(t.validTo);
          return r.a.createElement(tr, {
            screenClass: "product-info-screen",
            titleArea: z.t("product_information"),
            bodyArea: r.a.createElement(
              "div",
              { className: "product-information-container" },
              r.a.createElement("div", { className: "city" }, t.city),
              r.a.createElement("div", { className: "title" }, t.title),
              r.a.createElement(
                "div",
                { className: "valid-container" },
                r.a.createElement(
                  "span",
                  { className: "label" },
                  z.t("duration"),
                ),
                r.a.createElement("span", { className: "validFrom" }, ts(a)),
                n && r.a.createElement("span", null, " - "),
                n && r.a.createElement("span", { className: "validTo" }, ts(n)),
              ),
              r.a.createElement(
                "div",
                { className: "content" },
                z.t("content_arrangement"),
              ),
            ),
          });
        }),
        rs = function (e) {
          if (!e || "" === e) return "license_plate_message";
        },
        os = function (e) {
          if (!e || "" === e) return "enter_favorite_name";
        },
        is = function (e, t, a) {
          var n = !1;
          return (
            (e && "" !== e) ||
              (a && a("newFavorite_licensePlate", "value_empty_message"),
              (n = !0)),
            (t && "" !== t) ||
              (a && a("newFavorite_name", "value_empty_message"), (n = !0)),
            n
          );
        },
        cs = function (e) {
          return function (t, a) {
            t({ type: "CREATE_FAVORITE_STARTED" });
            var n = a().settings,
              r = n.startingProduct,
              o = n.currentProduct,
              i = n.locale,
              c = o || r,
              s = a().form.newFavorite_licensePlate,
              l = s ? s.value : void 0,
              u = a().form.newFavorite_name,
              d = {
                favorite: {
                  fav_parameters: [
                    { prr_label: "NICKNAME", prr_value: u ? u.value : void 0 },
                  ],
                  action: "add",
                  mbr_ident: l,
                },
              },
              m = JSON.stringify(d);
            k()
              .handleFavorite(m, i, c)
              .then(function (a) {
                "OK" === a.status.code.major
                  ? (t({ type: "CREATE_FAVORITE_SUCCESS" }),
                    t(B("newFavorite_licensePlate")),
                    t(B("newFavorite_name")),
                    e.push("/favorites"))
                  : "FAIL" === a.status.code.major &&
                      "SESSION_TIMEOUT" === a.status.code.minor
                    ? (t({ type: "CREATE_FAVORITE_FAILED" }), t(ha(e)))
                    : (t({ type: "CREATE_FAVORITE_FAILED" }),
                      f.toast.error(a.status.message));
              })
              .catch(function (e) {
                return t({ type: "CREATE_FAVORITE_FAILED" });
              });
          };
        },
        ss = Object(s.b)(
          function (e) {
            var t = e.form.newFavorite_licensePlate,
              a = t && t.value,
              n = e.form.newFavorite_name;
            return {
              licensePlate: a,
              favoriteName: n && n.value,
              locale: e.settings.locale,
              progress: e.newFavorite.progress,
            };
          },
          {
            onFormFieldClearValue: B,
            onErrorUpdate: K,
            onCreateFavoriteClick: cs,
          },
        ),
        ls = Object(m.b)(ss, Ra.a)(function (e) {
          var t = e.onFormFieldClearValue,
            a = e.history,
            o = e.licensePlate,
            i = e.favoriteName,
            c = e.onErrorUpdate,
            s = e.progress,
            l = e.onCreateFavoriteClick,
            u = s || is(o, i);
          return r.a.createElement(tr, {
            screenClass: "screen-new-favorite",
            showBackButton: !0,
            titleArea: z.t("new_favorite"),
            titleAreaClick: function () {
              (t("newFavorite_licensePlate"),
                t("newFavorite_name"),
                a.push("/favorites"));
            },
            titleAreaBackPath: "/favorites",
            bodyArea: r.a.createElement(
              n.Fragment,
              null,
              r.a.createElement(
                "div",
                { className: "parkapp-form favorite-form" },
                r.a.createElement(Ia, {
                  name: "newFavorite_name",
                  value: i,
                  maxlength: 10,
                  validator: function (e) {
                    return os(e);
                  },
                  leftIconClass: "left-icon-favorite",
                  areaLabel: z.t("favorite"),
                  tabIndex: 5,
                  autofocus: !0,
                }),
                r.a.createElement(Ia, {
                  name: "newFavorite_licensePlate",
                  licensePlate: !0,
                  value: o,
                  maxlength: 10,
                  validator: function (e) {
                    return rs(e);
                  },
                  areaLabel: z.t("license_plate"),
                  leftIconClass: "left-icon-license-plate",
                  tabIndex: 6,
                  autofocus: !1,
                }),
              ),
            ),
            actionArea: r.a.createElement(
              "button",
              {
                className: "button submit ".concat(u ? "disabled" : ""),
                onClick: function () {
                  is(o, i, c) || l(a);
                },
                "aria-label": z.t("favorite_save"),
                disabled: s,
              },
              !s && z.t("favorite_save"),
              s && r.a.createElement("div", { className: "loader small" }),
            ),
          });
        }),
        us = Object(s.b)(
          function (e) {
            var t = e.form.newFavorite_licensePlate,
              a = t && t.value,
              n = e.form.newFavorite_name;
            return {
              licensePlate: a,
              favoriteName: n && n.value,
              locale: e.settings.locale,
              progress: e.newFavorite.progress,
            };
          },
          {
            onFormFieldClearValue: B,
            changeFavorite: function (e) {
              return function (t, a) {
                var n = a().favorites.currentFavoriteIdentifier,
                  r = a().favorites.list,
                  o = a().settings,
                  i = o.startingProduct,
                  c = o.currentProduct,
                  s = o.locale,
                  l = c || i,
                  u = r.find(function (e) {
                    return e.mbr_identifier === n;
                  }),
                  d =
                    u.mbr_parameters.length > 0
                      ? u.mbr_parameters.find(function (e) {
                          return "NICKNAME" === e.prr_label;
                        }).prr_value
                      : "";
                t({ type: "CREATE_FAVORITE_STARTED" });
                var m = {
                    favorite: {
                      fav_parameters: [{ prr_label: "NICKNAME", prr_value: d }],
                      action: "remove",
                      mbr_ident: n,
                    },
                  },
                  _ = JSON.stringify(m);
                k()
                  .handleFavorite(_, s, l)
                  .then(function (a) {
                    "OK" === a.status.code.major
                      ? (t(Yo(n)), t(cs(e)))
                      : "FAIL" === a.status.code.major &&
                          "SESSION_TIMEOUT" === a.status.code.minor
                        ? (t({ type: "CREATE_FAVORITE_FAILED" }), t(ha(e)))
                        : (t({ type: "CREATE_FAVORITE_FAILED" }),
                          f.toast.error(z.t("withdraw_favorite_failed")));
                  })
                  .catch(function (e) {
                    return t({ type: "CREATE_FAVORITE_FAILED" });
                  });
              };
            },
            onErrorUpdate: K,
          },
        ),
        ds = Object(m.b)(us, Ra.a)(function (e) {
          var t = e.onFormFieldClearValue,
            a = e.history,
            o = e.licensePlate,
            i = e.favoriteName,
            c = e.progress,
            s = e.changeFavorite,
            l = e.onErrorUpdate,
            u = c || is(o, i);
          return r.a.createElement(tr, {
            screenClass: "screen-new-favorite",
            showBackButton: !0,
            titleArea: z.t("change_favorite"),
            titleAreaClick: function () {
              (t("newFavorite_licensePlate"),
                t("newFavorite_name"),
                a.push("/favorites"));
            },
            titleAreaBackPath: "/favorites",
            bodyArea: r.a.createElement(
              "div",
              { className: "parkapp-form favorite-form" },
              r.a.createElement(Ia, {
                name: "newFavorite_name",
                value: i,
                maxlength: 10,
                validator: function (e) {
                  return os(e);
                },
                leftIconClass: "left-icon-favorite",
                areaLabel: z.t("favorite"),
                disabled: c,
                autofocus: !0,
              }),
              r.a.createElement(Ia, {
                name: "newFavorite_licensePlate",
                licensePlate: !0,
                value: o,
                maxlength: 10,
                validator: function (e) {
                  return rs(e);
                },
                areaLabel: z.t("license_plate"),
                leftIconClass: "left-icon-license-plate",
                disabled: c,
                autofocus: !1,
              }),
            ),
            actionArea: r.a.createElement(
              n.Fragment,
              null,
              r.a.createElement(
                "button",
                {
                  className: "button submit ".concat(u ? "disabled" : ""),
                  "aria-label": z.t("favorite_save"),
                  onClick: function () {
                    is(o, i, l) || s(a);
                  },
                  disabled: u,
                },
                !c && z.t("favorite_save"),
                c && r.a.createElement("div", { className: "loader small" }),
              ),
            ),
          });
        }),
        ms = Object(m.c)({
          componentDidMount: function () {
            (0, this.props.getCaptcha)();
          },
        }),
        _s = Object(s.b)(
          function (e) {
            var t = e.form,
              a = t.reset_email,
              n = t.captcha,
              r = a ? a.value : void 0,
              o = n ? n.value : void 0;
            return {
              captcha: e.auth.captcha,
              progress: e.auth.progress,
              reset_email_value: r,
              captcha_value: o,
              locale: e.auth.locale,
            };
          },
          {
            getCaptcha: Ea,
            onInitResetPassword: function () {
              return function (e, t) {
                var a = t().form,
                  n = a.reset_email,
                  r = a.captcha,
                  o = t().auth.captcha,
                  i = n ? decodeURIComponent(n.value) : void 0,
                  c = r ? r.value : void 0,
                  s = t().settings.locale;
                (e({ type: "FETCH_STARTED" }),
                  N()
                    .initResetPassword(c, o.id, i, s)
                    .then(function (t) {
                      "OK" === t.status.code.major
                        ? (e({ type: "INIT_RESET_PASSWORD__SUCCESS" }),
                          e(B("reset_email")),
                          e(B("captcha")),
                          f.toast.success(t.status.message))
                        : (e(Ea()),
                          e({ type: "INIT_RESET_PASSWORD_FAILED" }),
                          e(B("reset_email")),
                          e(B("captcha")),
                          f.toast.error(t.status.message));
                    })
                    .catch(function (t) {
                      (e({ type: "INIT_RESET_PASSWORD_FAILED" }),
                        e(B("reset_email")),
                        e(B("captcha")));
                    }));
              };
            },
            onErrorUpdate: K,
            onFormFieldValueChanged: V,
          },
        ),
        ps = Object(m.b)(_s, Ra.a, ms)(function (e) {
          var t,
            a = e.captcha,
            o = e.getCaptcha,
            i = e.progress,
            c = e.onInitResetPassword,
            s = e.history,
            l = e.reset_email_value,
            u = e.captcha_value,
            d = e.onErrorUpdate,
            m = e.onFormFieldValueChanged,
            _ = function (e) {
              return e && "" !== e
                ? e &&
                  "" !== e &&
                  !/^([a-z0-9A-Z_.-]+)@([a-z0-9A-Z_.-]+)\.([a-zA-Z.]{2,6})$/.test(
                    e,
                  )
                  ? "enter_correct_email"
                  : void 0
                : "value_empty_message";
            },
            p = function (e) {
              if (!e || "" === e) return "value_empty_message";
            },
            f = _(l),
            g = p(u);
          return (
            (t = !(!f && !g)),
            r.a.createElement(tr, {
              screenClass: "reset-password-screen",
              municipalityProductArea: !1,
              municipalityHeader: !0,
              showBackButton: !0,
              titleArea: z.t("request_new_password"),
              titleAreaClick: function () {
                (m("reset_email"), m("captcha"), s.push("/"));
              },
              bodyArea: r.a.createElement(
                "div",
                { className: "parkapp-form reset-container" },
                r.a.createElement(
                  "div",
                  { className: "info-email" },
                  z.t("please_enter_email"),
                ),
                r.a.createElement(
                  "div",
                  { className: "reset-form" },
                  r.a.createElement(Ia, {
                    name: "reset_email",
                    value: l,
                    placeholder: z.t("email"),
                    autofocus: !0,
                    areaLabel: z.t("email"),
                    validator: function (e) {
                      return _(e);
                    },
                    enterWithoutSpaces: !0,
                  }),
                ),
                r.a.createElement(
                  "div",
                  { className: "captcha-container" },
                  a &&
                    r.a.createElement("img", {
                      width: "150px",
                      src:
                        "data:" +
                        a.image_captcha.image_type +
                        ";base64," +
                        a.image_captcha.image,
                      alt: "Captcha",
                    }),
                  r.a.createElement("button", {
                    type: "button",
                    className: "refresh",
                    onClick: function () {
                      return o();
                    },
                    "aria-label": z.t("refresh"),
                  }),
                ),
                r.a.createElement(
                  "div",
                  { className: "info-captcha" },
                  z.t("enter_number_with_image"),
                ),
                r.a.createElement(
                  "div",
                  { className: "reset-form" },
                  r.a.createElement(Ia, {
                    type: "text",
                    name: "captcha",
                    value: u,
                    areaLabel: "captcha",
                    validator: function (e) {
                      return p(e);
                    },
                  }),
                ),
              ),
              actionArea: r.a.createElement(
                n.Fragment,
                null,
                !i &&
                  r.a.createElement(
                    "button",
                    {
                      className: t ? "submit disabled" : "submit",
                      type: "button",
                      onClick: function () {
                        var e = _(l),
                          t = p(u);
                        e || t ? (d("reset_email", e), d("captcha", t)) : c();
                      },
                      "aria-label": z.t("send"),
                    },
                    z.t("send"),
                  ),
                i && r.a.createElement("div", { className: "loader" }),
              ),
            })
          );
        }),
        fs = Object(m.c)({
          componentWillMount: function () {
            (0, this.props.getCaptcha)();
          },
        }),
        gs = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        vs = Object(s.b)(
          function (e) {
            var t = e.form,
              a = t.new_password,
              n = t.confirm_password,
              r = t.captcha,
              o = a ? a.value : void 0,
              i = n ? n.value : void 0,
              c = r ? r.value : void 0;
            return {
              captcha: e.auth.captcha,
              progress: e.auth.progress,
              new_password_value: o,
              confirm_password_value: i,
              captcha_value: c,
              locale: e.auth.locale,
            };
          },
          { getCaptcha: Ea, onResetPassword: ba },
        ),
        hs = Object(m.b)(vs, Ra.a, fs)(function (e) {
          e.captcha;
          var t = e.location,
            a = (e.getCaptcha, e.progress),
            o = (e.onResetPassword, e.history),
            i = e.new_password_value,
            c = e.confirm_password_value,
            s =
              (e.captcha_value,
              function (e, t, a) {
                var n = e ? e.toLowerCase() : void 0;
                return n && "" !== n
                  ? !1 === gs.test(e)
                    ? z.t("password_requirements")
                    : !(!a || e === t) && z.t("password_mismatch")
                  : z.t("password_empty");
              });
          return r.a.createElement(tr, {
            screenClass: "reset-password-screen",
            municipalityProductArea: !1,
            municipalityHeader: !0,
            showBackButton: !0,
            titleArea: z.t("set_new_password"),
            bodyArea: r.a.createElement(
              "div",
              { className: "parkapp-form reset-container" },
              r.a.createElement(
                "div",
                { className: "info-email" },
                z.t("enter_new_password"),
              ),
              r.a.createElement(
                "div",
                { className: "reset-form" },
                r.a.createElement(Ia, {
                  type: "password",
                  name: "new_password",
                  value: i,
                  placeholder: z.t("password"),
                  validator: function (e) {
                    return s(e, c, !1);
                  },
                  autofocus: !0,
                }),
              ),
              r.a.createElement(
                "div",
                { className: "reset-form" },
                r.a.createElement(Ia, {
                  type: "password",
                  label: z.t("re_enter_password"),
                  name: "confirm_password",
                  value: c,
                  validator: function (e) {
                    return s(e, i, !0);
                  },
                  placeholder: z.t("password"),
                }),
              ),
            ),
            actionArea: r.a.createElement(
              n.Fragment,
              null,
              !a &&
                r.a.createElement(
                  "button",
                  {
                    className: "submit",
                    type: "button",
                    disabled: !(i && c && c === i && gs.test(i)),
                    onClick: function () {
                      var e = t.search;
                      o.push("/reset_password_captcha.html".concat(e || ""));
                    },
                    "aria-label": z.t("next"),
                  },
                  z.t("next"),
                ),
              a && r.a.createElement("div", { className: "loader" }),
            ),
          });
        }),
        Es = Object(m.c)({
          componentWillMount: function () {
            (0, this.props.getCaptcha)();
          },
        }),
        bs = Object(s.b)(
          function (e) {
            var t = e.form,
              a = t.new_password,
              n = t.confirm_password,
              r = t.captcha,
              o = a ? a.value : void 0,
              i = n ? n.value : void 0,
              c = r ? r.value : void 0;
            return {
              captcha: e.auth.captcha,
              progress: e.auth.progress,
              new_password_value: o,
              confirm_password_value: i,
              captcha_value: c,
              locale: e.auth.locale,
            };
          },
          { getCaptcha: Ea, onResetPassword: ba },
        ),
        As = Object(m.b)(bs, Ra.a, Es)(function (e) {
          var t = e.captcha,
            a = e.location,
            o = e.getCaptcha,
            i = e.progress,
            c = e.onResetPassword,
            s = e.history,
            l =
              (e.new_password_value, e.confirm_password_value, e.captcha_value),
            u = a.search.split("?")[1],
            d = (u = u.split("&"))[0].split("=")[1],
            m = u[1].split("=")[1],
            _ = u[2].split("=")[1];
          return r.a.createElement(tr, {
            screenClass: "reset-password-screen",
            municipalityProductArea: !1,
            municipalityHeader: !0,
            showBackButton: !0,
            titleAreaClick: function () {
              var e = a.search;
              s.push("/reset_password.html".concat(e || ""));
            },
            titleArea: z.t("set_new_password"),
            bodyArea: r.a.createElement(
              "div",
              { className: "parkapp-form reset-container" },
              r.a.createElement(
                "div",
                { className: "captcha-container" },
                t &&
                  r.a.createElement("img", {
                    width: "150px",
                    src:
                      "data:" +
                      t.image_captcha.image_type +
                      ";base64," +
                      t.image_captcha.image,
                    alt: "Captcha",
                  }),
                r.a.createElement("button", {
                  type: "button",
                  className: "refresh",
                  onClick: function () {
                    return o();
                  },
                  "aria-label": z.t("refresh"),
                }),
              ),
              r.a.createElement(
                "div",
                { className: "info-captcha" },
                z.t("enter_number_with_image"),
              ),
              r.a.createElement(
                "div",
                { className: "reset-form" },
                r.a.createElement(Ia, {
                  type: "text",
                  name: "captcha",
                  value: l,
                }),
              ),
            ),
            actionArea: r.a.createElement(
              n.Fragment,
              null,
              !i &&
                r.a.createElement(
                  "button",
                  {
                    className: "submit",
                    type: "button",
                    onClick: function () {
                      c(d, m, _, s);
                    },
                    "aria-label": z.t("set"),
                  },
                  z.t("set"),
                ),
              i && r.a.createElement("div", { className: "loader" }),
            ),
          });
        }),
        Ts = Object(m.c)({
          componentWillMount: function () {
            this.props.productsLoaded ||
              this.props.initialize(this.props.history);
          },
        }),
        Os = Object(s.b)(
          function (e) {
            var t = e.data.products,
              a = e.main;
            return {
              products: t,
              productsLoaded: a.productsLoaded,
              allProductsIsBlocked: a.allProductsIsBlocked,
            };
          },
          { unauthorizeUser: pa, initialize: Rt },
        ),
        Ns = Object(m.b)(Os, Ra.a, Ts)(function (e) {
          (e.history, e.unauthorizeUser);
          var t = e.products,
            a = (e.productsLoaded, e.allProductsIsBlocked);
          return r.a.createElement(
            n.Fragment,
            null,
            t.length > 0 &&
              !a &&
              r.a.createElement(u.a, { toRedirect: !0, to: { pathname: "/" } }),
            r.a.createElement(tr, {
              titleArea: z.t("no_product"),
              singleLineHeader: !0,
              showProductInformation: !1,
              bodyArea: r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "p",
                  { className: "any-products-text" },
                  z.t("right_now_you_dont_have_any_products"),
                ),
              ),
            }),
          );
        }),
        ys = function () {
          return { type: "PAYMENT_STATUS_REQUEST" };
        },
        Is = function (e) {
          return { type: "PAYMENT_STATUS_SUCCESS", status: e };
        },
        Cs = function (e) {
          return { type: "PAYMENT_STATUS_FAIL", status: e };
        },
        Ss = function (e) {
          return { type: "PAYMENT_STATUS_ERROR", message: e };
        },
        ws = Object(m.c)({
          componentDidMount: function () {
            var e = this.props,
              t = e.getPaymentStatus,
              a = e.initialize,
              n = e.setCurrentProduct,
              r = H.getItem("topupCurrentProduct");
            (a(), r && n(r), t());
          },
          componentWillUnmount: function () {
            var e = this.props.clearPaymentStatus;
            (H.getItem("topupCurrentProduct") &&
              H.removeItem("topupCurrentProduct"),
              e());
          },
        }),
        ks = Object(s.b)(
          function (e) {
            return {
              progress: e.paymentResult.progress,
              status: e.paymentResult.status,
              message: e.paymentResult.message,
              productsLoaded: e.data.productsLoaded,
              currentProduct: e.settings.currentProduct,
              locale: e.settings.locale,
            };
          },
          {
            getPaymentStatus: function () {
              return function (e, t) {
                (e(ys()),
                  P()
                    .getPaymentStatus()
                    .then(function (t) {
                      "OK" === t.status.code.major
                        ? e(Is(t.status.code.minor))
                        : "FAIL" === t.status.code.major &&
                          e(Cs(t.status.code.minor));
                    })
                    .catch(function (t) {
                      return e(Ss(t));
                    }));
              };
            },
            initialize: Rt,
            getTopupListUpgrade: je,
            setCurrentProduct: $,
            clearPaymentStatus: function () {
              return { type: "PAYMENT_STATUS_CLEAR" };
            },
          },
        ),
        Ps = Object(m.b)(ks, Ra.a, ws)(function (e) {
          var t = e.progress,
            a = e.status,
            o = e.history,
            i = e.getPaymentStatus,
            c = e.productsLoaded,
            s = e.message,
            l = (function (e) {
              return "PAYMENT_SUCCESS" === e || "PAYMENT_CANCELLED" === e
                ? z.t("continue")
                : "PAYMENT_INIT" === e || "PAYMENT_PAID_NOT_PROCESSED" === e
                  ? z.t("check_again")
                  : z.t("continue");
            })(a),
            u = H.getItem("topupCurrentProduct");
          return r.a.createElement(
            n.Fragment,
            null,
            c &&
              r.a.createElement(tr, {
                titleArea: z.t("increase_results"),
                bodyArea: r.a.createElement(
                  n.Fragment,
                  null,
                  !t &&
                    a &&
                    r.a.createElement(
                      "div",
                      { className: "payment-result-container" },
                      r.a.createElement(
                        "div",
                        { className: "message" },
                        z.t("status_" + a + "_message"),
                      ),
                    ),
                  !t &&
                    s &&
                    r.a.createElement(
                      "div",
                      { className: "payment-result-container" },
                      r.a.createElement("div", { className: "message" }, s),
                    ),
                  t && r.a.createElement("div", { className: "loader" }),
                ),
                actionArea:
                  !t &&
                  a &&
                  r.a.createElement(
                    "button",
                    {
                      className: "button submit",
                      onClick: function () {
                        u
                          ? "PAYMENT_INIT" === a
                            ? i()
                            : "PAYMENT_CANCELLED" === a
                              ? o.push("/top-up")
                              : "PAYMENT_PAID_NOT_PROCESSED" === a
                                ? i()
                                : o.push("/parking-actions")
                          : o.push("/");
                      },
                      "aria-label": l,
                    },
                    l,
                  ),
              }),
            !c && r.a.createElement("div", { className: "loader" }),
          );
        });
      z.missingBehaviour = "guess";
      var Ds = function (e) {
          var t = e.message,
            a = e.addProductFail;
          return r.a.createElement(
            "div",
            { className: "register-product-message-container" },
            r.a.createElement(
              "div",
              { className: "message" },
              a &&
                r.a.createElement("span", null, z.t("problem_adding_product")),
              r.a.createElement("span", null, z.t(t)),
              a && r.a.createElement("span", null, z.t("product_not_been")),
            ),
          );
        },
        js = function (e) {
          var t = e.productInformation,
            a = t.apk_product.split("-"),
            n = a[0],
            o = a[1];
          return r.a.createElement(
            "div",
            { className: "existing-account-container" },
            r.a.createElement(
              "div",
              { className: "register-product-info" },
              z.t("register_product_info"),
              r.a.createElement("span", null, t.apk_category, ":"),
            ),
            r.a.createElement(
              _r,
              null,
              r.a.createElement(
                "div",
                { className: "product-card-container" },
                r.a.createElement("p", null, n),
                r.a.createElement("p", null, o),
              ),
            ),
            r.a.createElement(
              "div",
              { className: "product_linked-email" },
              z.t("product_will_be_linked"),
              " ",
              r.a.createElement("span", null, t.apk_display_name),
            ),
          );
        },
        Ls = Object(s.b)(
          function (e) {
            var t = e.form,
              a = t.product_password,
              n = t.product_password_repeat;
            return {
              productPassword: a ? a.value : "",
              productPasswordRepeat: n ? n.value : "",
              locale: e.auth.locale,
            };
          },
          { showModalDialog: me, hideModalDialog: _e },
        ),
        Ms = Object(m.b)(Ls)(function (e) {
          var t = e.productInformation,
            a = e.productPassword,
            n = e.productPasswordRepeat,
            o =
              (e.showModalDialog, e.hideModalDialog, t.apk_product.split("-")),
            i = o[0],
            c = o[1];
          return r.a.createElement(
            "div",
            { className: "existing-account-container" },
            r.a.createElement(
              _r,
              null,
              r.a.createElement(
                "div",
                { className: "product-card-container" },
                r.a.createElement("p", null, i),
                r.a.createElement("p", null, c),
              ),
            ),
            r.a.createElement(
              "div",
              { className: "register-product-info-not-account" },
              z.t("create_password_account"),
            ),
            r.a.createElement(
              "div",
              { className: "form" },
              r.a.createElement(Ia, {
                name: "product_password",
                title: z.t("please_enter_password"),
                label: z.t("password"),
                value: a,
                type: "password",
              }),
              r.a.createElement(Ia, {
                name: "product_password_repeat",
                title: z.t("please_repeat_password"),
                label: z.t("re_enter_password"),
                value: n,
                type: "password",
              }),
            ),
            r.a.createElement(
              "div",
              { className: "register-product-password-info" },
              r.a.createElement("div", { className: "icon-info" }),
              r.a.createElement(
                "span",
                null,
                z.t("click_password_requirements"),
              ),
            ),
          );
        }),
        Rs = function (e) {
          var t = e.productInformation,
            a = t.apk_product.split("-"),
            n = a[0],
            o = a[1];
          return r.a.createElement(
            "div",
            { className: "existing-account-container" },
            r.a.createElement(
              "div",
              { className: "register-product-info" },
              r.a.createElement("div", {
                dangerouslySetInnerHTML: {
                  __html: z.t("create_account_add_product", {
                    municipality: t.apk_category,
                  }),
                },
              }),
            ),
            r.a.createElement(
              _r,
              null,
              r.a.createElement(
                "div",
                { className: "product-card-container" },
                r.a.createElement("p", null, n),
                r.a.createElement("p", null, o),
              ),
            ),
          );
        },
        Fs = Object(m.a)(
          function (e) {
            return e.showAddAccount;
          },
          Object(m.d)(Ms),
          Object(m.d)(Rs),
        )(),
        Us = function (e) {
          return r.a.createElement(n.Fragment, null, r.a.createElement(Fs, e));
        },
        Hs = Object(m.a)(
          function (e) {
            return "Y" === e.productInformation.apk_email_exists;
          },
          Object(m.d)(js),
          Object(m.d)(Us),
        )(),
        xs = function (e) {
          return r.a.createElement(
            n.Fragment,
            null,
            e.productInformation && r.a.createElement(Hs, e),
          );
        },
        zs = function () {
          return { type: "PRODUCT_INFORMATION_REQUEST" };
        },
        Ys = function (e) {
          return { type: "PRODUCT_INFORMATION_SUCCESS", productInformation: e };
        },
        Gs = function () {
          return { type: "PRODUCT_INFORMATION_FAIL" };
        },
        Vs = function (e) {
          return { type: "SHOW_MESSAGE", message: e };
        },
        Bs = function () {
          return { type: "ADD_PRODUCT_SUCCESS" };
        },
        Ws = function () {
          return { type: "ADD_PRODUCT_FAIL" };
        },
        Ks = Object(m.c)({
          componentWillMount: function () {
            var e = this.props,
              t = e.history;
            (0, e.getProductInformation)(t.location.search.split("=")[1]);
          },
          componentDidMount: function () {
            var e = this.props,
              t = e.showMessage,
              a = e.isModeMessage;
            t && a();
          },
        }),
        Zs = Object(m.a)(
          function (e) {
            return !e.showMessage;
          },
          Object(m.d)(xs),
          Object(m.d)(Ds),
        )(),
        Qs = Object(s.b)(
          function (e) {
            return {
              progress: e.registrationProduct.progress,
              showMessage: e.registrationProduct.showMessage,
              message: e.registrationProduct.message,
              productInformation: e.registrationProduct.data,
              addProductFail: e.registrationProduct.addProductFail,
              showAddAccount: e.registrationProduct.showAddAccount,
              locale: e.auth.locale,
            };
          },
          {
            getProductInformation: function (e) {
              return function (t, a) {
                (t(zs()),
                  y()
                    .get_apk_information(e)
                    .then(function (e) {
                      "OK" === e.status.code.major
                        ? t(Ys(e.data))
                        : (t(Gs()), t(Vs(e.status.code.minor)));
                    })
                    .catch(function (e) {
                      (t(Gs()), t(Vs(e)));
                    }));
              };
            },
            isModeMessage: function () {
              return { type: "MODE_MESSAGE" };
            },
            addProductAutomatic: function (e) {
              return function (t) {
                (t(zs()),
                  y()
                    .add_apk_product_automatic(e)
                    .then(function (e) {
                      "OK" === e.status.code.major
                        ? (t(Bs()), t(Vs("product_" + e.status.code.minor)))
                        : (t(Ws()), t(Vs(e.status.code.minor)));
                    })
                    .catch(function (e) {
                      (t(Ws()), t(Vs(e)));
                    }));
              };
            },
            addProductWithAccountCreation: function (e) {
              return function (t, a) {
                var n = a().form,
                  r = n.product_password,
                  o = n.product_password_repeat,
                  i = r && r.value ? r.value : void 0,
                  c = o && o.value ? o.value : void 0;
                (t(zs()),
                  y()
                    .add_apk_with_account_creation(e, i, c)
                    .then(function (e) {
                      "OK" === e.status.code.major
                        ? (t(Bs()), t(Vs("product_" + e.status.code.minor)))
                        : "FAIL" === e.status.code.major &&
                            "INVALID_PASSWORD" === e.status.code.minor
                          ? (t(Ws()), f.toast.error(z.t(e.status.code.minor)))
                          : (t(Ws()), f.toast.error(e.status.message));
                    })
                    .catch(function (e) {
                      (t(Ws()), f.toast.error(e));
                    }));
              };
            },
            unauthorizeUser: pa,
            goToCreatAccount: function () {
              return { type: "GO_TO_CREATE_ACCOUNT" };
            },
          },
        ),
        Js = Object(m.b)(Qs, Ra.a, Ks)(function (e) {
          var t = e.progress,
            a = e.showMessage,
            o = e.history,
            i = e.productInformation,
            c = e.addProductAutomatic,
            s = e.addProductWithAccountCreation,
            l = e.isModeMessage,
            u = e.unauthorizeUser,
            d = e.showAddAccount,
            m = e.goToCreatAccount;
          return r.a.createElement(
            n.Fragment,
            null,
            !t &&
              r.a.createElement(tr, {
                screenClass: "screen-register-product",
                municipalityProductArea: !1,
                municipalityHeader: !0,
                showBackButton: !0,
                titleArea: z.t("register_product"),
                titleAreaClick: function () {
                  (u(), o.push("/login"));
                },
                bodyArea: r.a.createElement(Zs, e),
                actionArea:
                  !t && a
                    ? r.a.createElement(
                        "button",
                        {
                          className: "button submit",
                          onClick: function () {
                            return (a && l(), void o.push("/login"));
                          },
                          "aria-label": z.t("ok"),
                        },
                        z.t("ok"),
                      )
                    : !t && i
                      ? r.a.createElement(
                          "div",
                          { className: "register-product-button-container" },
                          r.a.createElement(
                            "div",
                            { className: "button-content-width" },
                            r.a.createElement(
                              "button",
                              {
                                className: "button submit",
                                onClick: function () {
                                  return (function () {
                                    var e = o.location.search.split("=")[1];
                                    i && "Y" === i.apk_email_exists
                                      ? c(e)
                                      : i && "N" === i.apk_email_exists && !d
                                        ? m()
                                        : i &&
                                          "N" === i.apk_email_exists &&
                                          d &&
                                          s(e);
                                  })();
                                },
                                "aria-label": z.t("confirm"),
                              },
                              "Y" === i.apk_email_exists && z.t("confirm"),
                              "N" === i.apk_email_exists && d && z.t("confirm"),
                              "N" === i.apk_email_exists &&
                                !d &&
                                z.t("create_an_account"),
                            ),
                          ),
                        )
                      : void 0,
              }),
            t && r.a.createElement("div", { className: "loader" }),
          );
        });
      z.missingBehaviour = "guess";
      var qs = function (e) {
          var t = e.message,
            a = e.addGrantFail;
          return r.a.createElement(
            "div",
            { className: "register-product-message-container" },
            r.a.createElement(
              "div",
              { className: "message" },
              a && r.a.createElement("span", null, z.t("problem_adding_grant")),
              r.a.createElement("span", null, z.t(t)),
              a && r.a.createElement("span", null, z.t("grant_not_been")),
            ),
          );
        },
        Xs = function (e) {
          var t = e.grantInformation,
            a = t.agk_product.split("-"),
            n = a[0],
            o = a[1],
            i =
              t.agk_granter_name && "" !== t.agk_granter_name
                ? sc(t.agk_granter_name)
                : "";
          return t
            ? r.a.createElement(
                "div",
                { className: "existing-account-container" },
                r.a.createElement(
                  "div",
                  { className: "register-product-info" },
                  z.t("register_grant_info"),
                  r.a.createElement("span", null, t.agk_category, ":"),
                ),
                r.a.createElement(
                  _r,
                  null,
                  r.a.createElement(
                    "div",
                    { className: "product-card-container" },
                    r.a.createElement("p", null, n),
                    r.a.createElement("p", null, o),
                    r.a.createElement(
                      "p",
                      { className: "authorization-person" },
                      z.t("authorization_by"),
                      " ",
                      r.a.createElement("span", null, i),
                    ),
                  ),
                ),
                r.a.createElement(
                  "div",
                  { className: "product_linked-email" },
                  z.t("product_will_be_linked"),
                  " ",
                  r.a.createElement("span", null, t.agk_display_name),
                ),
              )
            : null;
        },
        $s = Object(s.b)(
          function (e) {
            var t = e.form,
              a = t.grant_password,
              n = t.grant_password_repeat;
            return {
              grantPassword: a ? a.value : "",
              grantPasswordRepeat: n ? n.value : "",
              locale: e.auth.locale,
            };
          },
          { hideModalDialog: _e, showModalDialog: me },
        ),
        el = Object(m.b)($s)(function (e) {
          var t = e.grantInformation,
            a = e.grantPassword,
            n = e.grantPasswordRepeat,
            o =
              (e.hideModalDialog, e.showModalDialog, t.agk_product.split("-")),
            i = o[0],
            c = o[1],
            s =
              t.agk_granter_name && "" !== t.agk_granter_name
                ? sc(t.agk_granter_name)
                : "";
          return r.a.createElement(
            "div",
            { className: "existing-account-container" },
            r.a.createElement(
              _r,
              null,
              r.a.createElement(
                "div",
                { className: "product-card-container" },
                r.a.createElement("p", null, i),
                r.a.createElement("p", null, c),
                r.a.createElement(
                  "p",
                  { className: "authorization-person" },
                  z.t("authorization_by"),
                  " ",
                  r.a.createElement("span", null, s),
                ),
              ),
            ),
            r.a.createElement(
              "div",
              { className: "register-product-info-not-account" },
              z.t("create_password_account"),
            ),
            r.a.createElement(
              "div",
              { className: "form" },
              r.a.createElement(Ia, {
                name: "grant_password",
                title: z.t("please_enter_password"),
                label: z.t("password"),
                value: a,
                type: "password",
              }),
              r.a.createElement(Ia, {
                name: "grant_password_repeat",
                title: z.t("please_repeat_password"),
                label: z.t("re_enter_password"),
                value: n,
                type: "password",
              }),
            ),
            r.a.createElement(
              "div",
              { className: "register-product-password-info" },
              r.a.createElement("div", { className: "icon-info" }),
              r.a.createElement(
                "span",
                null,
                z.t("click_password_requirements"),
              ),
            ),
          );
        }),
        tl = function (e) {
          var t = e.grantInformation,
            a = t.agk_product.split("-"),
            n = a[0],
            o = a[1];
          return r.a.createElement(
            "div",
            { className: "existing-account-container" },
            r.a.createElement(
              "div",
              { className: "register-product-info" },
              r.a.createElement("div", {
                dangerouslySetInnerHTML: {
                  __html: z.t("create_account_add_product", {
                    municipality: t.agk_category,
                  }),
                },
              }),
            ),
            r.a.createElement(
              _r,
              null,
              r.a.createElement(
                "div",
                { className: "product-card-container" },
                r.a.createElement("p", null, n),
                r.a.createElement("p", null, o),
                r.a.createElement(
                  "p",
                  { className: "authorization-person" },
                  z.t("authorization_by"),
                  " ",
                  r.a.createElement("span", null, t.agk_granter_name),
                ),
              ),
            ),
          );
        },
        al = Object(m.a)(
          function (e) {
            return e.showAddAccount;
          },
          Object(m.d)(el),
          Object(m.d)(tl),
        )(),
        nl = function (e) {
          return r.a.createElement(n.Fragment, null, r.a.createElement(al, e));
        },
        rl = Object(m.a)(
          function (e) {
            return "Y" === e.grantInformation.agk_email_exists;
          },
          Object(m.d)(Xs),
          Object(m.d)(nl),
        )(),
        ol = function (e) {
          return r.a.createElement(
            n.Fragment,
            null,
            e.grantInformation && r.a.createElement(rl, e),
          );
        },
        il = function () {
          return { type: "GRANT_INFORMATION_REQUEST" };
        },
        cl = function (e) {
          return { type: "GRANT_INFORMATION_SUCCESS", grantInformation: e };
        },
        sl = function () {
          return { type: "GRANT_INFORMATION_FAIL" };
        },
        ll = function (e) {
          return { type: "SHOW_MESSAGE_GRANT", message: e };
        },
        ul = function () {
          return { type: "ADD_GRANT_SUCCESS" };
        },
        dl = function () {
          return { type: "ADD_GRANT_FAIL" };
        },
        ml = Object(m.c)({
          componentDidMount: function () {
            var e = this.props,
              t = e.history,
              a = e.getGrantInformation,
              n = e.settingsWasChange,
              r = e.locale,
              o = t.location.search.split("=")[1];
            n || a(o, r);
          },
        }),
        _l = Object(m.a)(
          function (e) {
            return !e.showMessage;
          },
          Object(m.d)(ol),
          Object(m.d)(qs),
        )(),
        pl = Object(s.b)(
          function (e) {
            return {
              progress: e.registerGrant.progress,
              showMessage: e.registerGrant.showMessage,
              message: e.registerGrant.message,
              grantInformation: e.registerGrant.data,
              addGrantFail: e.registerGrant.addGrantFail,
              showAddAccount: e.registrationProduct.showAddAccount,
              settingsWasChange: e.auth.settingsWasChange,
              locale: e.auth.locale,
            };
          },
          {
            getGrantInformation: function (e, t) {
              return function (a, n) {
                (a(il()),
                  D()
                    .get_apk_grant_information(e, t)
                    .then(function (e) {
                      "OK" === e.status.code.major
                        ? a(cl(e.data))
                        : (a(sl()), a(ll(e.status.code.minor)));
                    })
                    .catch(function (e) {
                      (a(sl()), a(ll(e)));
                    }));
              };
            },
            isModeMessage: function () {
              return { type: "MODE_MESSAGE_GRANT" };
            },
            addGrantAutomatic: function (e) {
              return function (t) {
                (t(il()),
                  D()
                    .add_apk_grant_product_automatic(e)
                    .then(function (e) {
                      "OK" === e.status.code.major
                        ? (t(ul()), t(ll(e.status.code.minor)))
                        : (t(dl()), t(ll(e.status.code.minor)));
                    })
                    .catch(function (e) {
                      (t(dl()), t(ll(e)));
                    }));
              };
            },
            addGrantWithAccountCreation: function (e) {
              return function (t, a) {
                var n = a().form,
                  r = n.grant_password,
                  o = n.grant_password_repeat,
                  i = r && r.value ? r.value : void 0,
                  c = o && o.value ? o.value : void 0;
                (t(il()),
                  D()
                    .add_apk_grant_product_with_account_creation(e, i, c)
                    .then(function (e) {
                      "OK" === e.status.code.major
                        ? (t(ul()), t(ll(e.status.code.minor)))
                        : "FAIL" === e.status.code.major &&
                            "CONFIG_ERROR" === e.status.code.minor
                          ? (t(dl()), f.toast.error(z.t(e.status.code.minor)))
                          : (t(dl()), f.toast.error(e.status.message));
                    })
                    .catch(function (e) {
                      (t(dl()), f.toast.error(e));
                    }));
              };
            },
            unauthorizeUser: pa,
            goToCreatAccount: function () {
              return { type: "GO_TO_CREATE_ACCOUNT" };
            },
          },
        ),
        fl = Object(m.b)(pl, Ra.a, ml)(function (e) {
          var t = e.progress,
            a = e.grantInformation,
            o = e.showMessage,
            i = e.history,
            c = e.isModeMessage,
            s = e.addGrantAutomatic,
            l = e.addGrantWithAccountCreation,
            u = e.showAddAccount,
            d = e.goToCreatAccount;
          return r.a.createElement(
            n.Fragment,
            null,
            !t &&
              r.a.createElement(tr, {
                screenClass: "screen-register-product",
                municipalityProductArea: !1,
                municipalityHeader: !0,
                showBackButton: !0,
                titleArea: z.t("register_grant"),
                titleAreaClick: function () {
                  (pa(), i.push("/login"));
                },
                bodyArea: r.a.createElement(_l, e),
                actionArea:
                  !t && o
                    ? r.a.createElement(
                        "button",
                        {
                          className: "button submit",
                          onClick: function () {
                            return (o && c(), void i.push("/login"));
                          },
                          "aria-label": z.t("ok"),
                        },
                        z.t("ok"),
                      )
                    : !t && a
                      ? r.a.createElement(
                          "div",
                          { className: "register-product-button-container" },
                          r.a.createElement(
                            "div",
                            { className: "button-content-width" },
                            r.a.createElement(
                              "button",
                              {
                                className: "button submit",
                                onClick: function () {
                                  return (function () {
                                    var e = i.location.search.split("=")[1];
                                    a && "Y" === a.agk_email_exists
                                      ? s(e)
                                      : a && "N" === a.agk_email_exists && !u
                                        ? d()
                                        : a &&
                                          "N" === a.agk_email_exists &&
                                          u &&
                                          l(e);
                                  })();
                                },
                                "aria-label": z.t("confirm"),
                              },
                              "Y" === a.agk_email_exists && z.t("confirm"),
                              "N" === a.agk_email_exists && u && z.t("confirm"),
                              "N" === a.agk_email_exists &&
                                !u &&
                                z.t("create_an_account"),
                            ),
                          ),
                        )
                      : void 0,
              }),
            t && r.a.createElement("div", { className: "loader" }),
          );
        }),
        gl = Object(m.c)({
          componentWillMount: function () {
            var e = this.props,
              t = e.history,
              a = e.location,
              n = a.search,
              r = a.pathname + n;
            t.replace(r);
          },
        }),
        vl = Object(m.b)(Ra.a, gl)(function () {
          return r.a.createElement(n.Fragment, null);
        }),
        hl = Object(s.b)(function (e) {
          return {
            activeLicensePlate: e.switchLicensePlate.activeLicensePlate,
            locale: e.settings.locale,
          };
        }, null),
        El = Object(m.b)(hl)(function (e) {
          var t = e.activeLicensePlate;
          return r.a.createElement(
            _r,
            null,
            r.a.createElement(
              "div",
              { className: "license-plate-is-activate-wrapper" },
              r.a.createElement(
                "div",
                { className: "block" },
                !t &&
                  r.a.createElement(
                    "span",
                    null,
                    z.t("no_license_plate_has_yet_been_activated"),
                  ),
                t &&
                  r.a.createElement("span", {
                    dangerouslySetInnerHTML: {
                      __html: z.t("active_license_plate_since", {
                        since: t.time_start || "",
                      }),
                    },
                  }),
              ),
              t && r.a.createElement(cr, { licensePlate: t.mbr_identifier }),
            ),
            !t && r.a.createElement("div", { className: "icon-info" }),
          );
        }),
        bl = Object(s.b)(
          function (e) {
            return {
              selectedLicensePlate: e.switchLicensePlate.selectedLicensePlate,
              listNotActiveLicensePlates:
                e.switchLicensePlate.listNotActiveLicensePlates,
              locale: e.settings.locale,
            };
          },
          {
            selectLicensePlate: function (e) {
              return { type: "SELECT_LICENSE_PLATE", licensePlate: e };
            },
          },
        ),
        Al = Object(m.b)(bl)(function (e) {
          var t = e.selectLicensePlate,
            a = e.selectedLicensePlate,
            n = e.listNotActiveLicensePlates;
          return r.a.createElement(
            _r,
            null,
            r.a.createElement(
              "div",
              { className: "license-plate-radio-button-wrapper" },
              r.a.createElement(
                "div",
                { className: "radio-button-label" },
                z.t("choose_license_number_activate"),
              ),
              n.map(function (e, n) {
                return (
                  n < 5 &&
                  r.a.createElement(
                    "div",
                    { key: n, className: "license-plate-wrapper button" },
                    r.a.createElement(
                      "button",
                      {
                        className: "button",
                        onClick: function () {
                          return t(e.mbr_identifier);
                        },
                      },
                      r.a.createElement(cr, {
                        licensePlate: e.mbr_identifier,
                        licensePlateClass:
                          e.mbr_identifier === a ? "active" : void 0,
                      }),
                    ),
                  )
                );
              }),
            ),
          );
        }),
        Tl = Object(m.c)({
          componentDidMount: function () {
            var e = this.props;
            (0, e.getNotOrActiveLicensePlate)(e.history);
          },
          componentWillUnmount: function () {
            (0, this.props.selectLicensePlateClear)();
          },
        }),
        Ol = Object(s.b)(
          function (e) {
            return {
              setIntervalId: e.ui.setIntervalId,
              productsLoaded: e.data.productsLoaded,
              selectedLicensePlate: e.switchLicensePlate.selectedLicensePlate,
              progress: e.switchLicensePlate.progress,
              locale: e.settings.locale,
            };
          },
          {
            getNotOrActiveLicensePlate: mc,
            activateLicensePlate: function (e) {
              return function (t, a) {
                var n = a().settings,
                  r = n.startingProduct,
                  o = n.currentProduct,
                  i = n.locale,
                  c = a().switchLicensePlate.selectedLicensePlate,
                  s = o || r;
                (t({ type: "GET_NOT_OR_ACTIVE_LICENSE_PLATE_FETCHING" }),
                  y()
                    .force_single_active_action_product(i, s, c)
                    .then(function (a) {
                      "OK" === a.status.code.major
                        ? (t(_c()),
                          t(mc(e)),
                          t({ type: "SELECT_LICENSE_PLATE_CLEAR" }))
                        : "FAIL" === a.status.code.major &&
                            "SESSION_TIMEOUT" === a.status.code.minor
                          ? (t(pc()), t(ha(e)))
                          : (t(pc()),
                            f.toast.error(z.t("license_plate_not_activate")));
                    })
                    .catch(function (e) {
                      t(pc());
                    }));
              };
            },
            selectLicensePlateClear: dc,
          },
        ),
        Nl = Object(m.b)(Ol, Ra.a, Tl)(function (e) {
          var t = e.productsLoaded,
            a = e.history,
            o = e.selectedLicensePlate,
            i = e.progress,
            c = e.activateLicensePlate;
          return r.a.createElement(
            n.Fragment,
            null,
            t &&
              r.a.createElement(tr, {
                screenClass: "switch-license-plate-container",
                titleArea: z.t("license_plate_switch"),
                bodyArea: i
                  ? r.a.createElement("div", { className: "loader" })
                  : r.a.createElement(
                      n.Fragment,
                      null,
                      r.a.createElement(El, null),
                      r.a.createElement(Al, null),
                    ),
                actionArea: r.a.createElement(
                  "button",
                  {
                    disabled: !o,
                    className: "button submit ".concat(o ? "" : "disabled"),
                    onClick: function () {
                      return c(a);
                    },
                  },
                  o && z.t("confirm"),
                  " ",
                  o && o,
                  !o && z.t("select_license_plate"),
                ),
              }),
            !t && r.a.createElement("div", { className: "loader" }),
          );
        }),
        yl = Object(m.c)({
          componentWillUnmount: function () {
            (0, this.props.onFormFieldClearValue)("search_location");
          },
        }),
        Il = Object(s.b)(
          function (e) {
            var t = e.form.search_location;
            return {
              search_location_value: t ? t.value : void 0,
              locale: e.settings.locale,
            };
          },
          { onFormFieldClearValue: B },
        ),
        Cl = Object(m.b)(Il, Ra.a, yl)(function (e) {
          var t = e.search_location_value,
            a = e.history,
            n = e.match;
          return r.a.createElement(Or, {
            value: t,
            nameField: "search_location",
            onClickCancel: function () {
              return a.push("/parking-actions-form/" + n.params.type);
            },
          });
        }),
        Sl = function (e) {
          var t = e.location,
            a = e.onClick,
            n = t.split("-");
          return r.a.createElement(
            _r,
            null,
            r.a.createElement(
              "button",
              {
                className: "item-select-location",
                "aria-label": t,
                onClick: a,
              },
              r.a.createElement(
                "div",
                { className: "location-number location-label" },
                r.a.createElement("div", { className: "location-icon" }),
                n[0],
              ),
              r.a.createElement(
                "div",
                { className: "location-description location-label" },
                n[1],
              ),
            ),
          );
        },
        wl = Object(m.c)({
          componentDidMount: function () {
            var e = this.props,
              t = e.getLocation,
              a = e.history;
            "false" === e.isGeofencing && t(a);
          },
          componentWillUnmount: function () {
            (0, this.props.onFormFieldClearValue)("search_location");
          },
        }),
        kl = Object(s.b)(
          function (e) {
            var t = e.form,
              a = t.search_location,
              n = t.newParkingActions_location,
              r = e.settings,
              o = r.startingProduct,
              i = r.currentProduct,
              c = r.locale,
              s = i || o,
              l = (void 0 !== e.data.products ? e.data.products : []).find(
                function (e) {
                  return e.value === s;
                },
              ),
              u = l ? l.isGeofencing : "false",
              d = a ? a.value : void 0,
              m = n && n.value ? n.value : void 0;
            return {
              search_location_value: d,
              progress: e.selectLocation.progress,
              locations: e.selectLocation.locations,
              selectedLocation: m,
              locale: c,
              isGeofencing: u,
            };
          },
          {
            onFormFieldClearValue: B,
            onFormFieldValueChanged: V,
            getLocation: function (e) {
              return function (t, a) {
                var n = a().settings,
                  r = n.startingProduct,
                  o = n.currentProduct,
                  i = n.locale,
                  c = a().data.products,
                  s = o || r,
                  l = c.find(function (e) {
                    return e.value === s;
                  }).location,
                  u = JSON.stringify(l);
                (t(jt()),
                  y()
                    .getProductLocations(i, s, u)
                    .then(function (a) {
                      if ("OK" === a.status.code.major) {
                        var n = a.data.locations,
                          r = [];
                        (n.length > 0 &&
                          n.forEach(function (e) {
                            var t = e.ltn_parameters;
                            t.length > 0 &&
                              t.forEach(function (e) {
                                var t = {
                                  prr_value: e.prr_value,
                                  prr_default_value_display:
                                    e.prr_default_value_display,
                                };
                                r.push(t);
                              });
                          }),
                          t(Lt(r)));
                      } else
                        "FAIL" === a.status.code.major &&
                        "SESSION_TIMEOUT" === a.status.code.minor
                          ? (t(Mt()),
                            e.push("/login"),
                            t(pa()),
                            f.toast.error(
                              z.t(
                                "your_session_has_expired_you_have_to_log_in_again",
                              ),
                            ))
                          : t(Mt());
                    })
                    .catch(function (e) {
                      t(Mt());
                    }));
              };
            },
            onErrorUpdate: K,
          },
        ),
        Pl = Object(m.b)(kl, Ra.a, wl)(function (e) {
          var t,
            a,
            o = e.history,
            i = e.match,
            c = e.search_location_value,
            s = e.progress,
            l = e.locations,
            u = e.onFormFieldValueChanged,
            d = e.selectedLocation,
            m = e.onErrorUpdate,
            _ =
              ((t = l),
              (a = c) && "" !== a
                ? t.filter(function (e) {
                    return (
                      -1 !==
                      e.prr_default_value_display
                        .toLowerCase()
                        .search(a.toLowerCase())
                    );
                  })
                : t);
          return (
            (_ = _.map(function (e, t) {
              return r.a.createElement(Sl, {
                key: t,
                location: e.prr_default_value_display,
                onClick: function () {
                  return (
                    u("newParkingActions_location", {
                      locationValue: (t = e).prr_value,
                      locationValueDisplay: t.prr_default_value_display,
                    }),
                    void o.push("/parking-actions-form/" + i.params.type)
                  );
                  var t;
                },
              });
            })),
            r.a.createElement(tr, {
              screenClass: "select-location-screen",
              pageList: !0,
              showBackButton: !0,
              titleAreaClick: function () {
                (o.push("/parking-actions-form/" + i.params.type),
                  d ||
                    m("newParkingActions_location", "select_location_massage"));
              },
              titleArea: z.t("select_location"),
              bodyArea: r.a.createElement(
                "div",
                { className: "select-location-container" },
                !s &&
                  r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(Cl, null),
                    _,
                  ),
                s && r.a.createElement("div", { className: "loader" }),
              ),
            })
          );
        }),
        Dl = Object(m.c)({
          componentWillUnmount: function () {
            (this.props.onFormFieldClearValue("addProduct_code"),
              this.props.onFormFieldClearValue("addProduct_pinCode"));
          },
        }),
        jl = Object(s.b)(
          function (e) {
            var t = e.form,
              a = t.addProduct_code,
              n = t.addProduct_pinCode;
            return {
              productCode: a && a.value,
              pinCode: n && n.value,
              progress: e.addProduct.progress,
              locale: e.settings.locale,
            };
          },
          {
            onAddAccountProduct: function (e, t, a) {
              return function (a, n) {
                var r = {
                  pcs_parameters: [
                    { prr_label: "USERID", prr_value: e || "" },
                    { prr_label: "PASS", prr_value: t || "" },
                  ],
                };
                (a({ type: "ON_ADD_PRODUCT_REQUEST_STARTED" }),
                  y()
                    .addAccountProduct("nl_NL", JSON.stringify(r))
                    .then(function (e) {
                      "OK" === e.status.code.major
                        ? (a({ type: "ON_ADD_PRODUCT_REQUEST_SUCCESS" }),
                          a(de(z.t("you_can_use_product"), "/parking-actions")))
                        : "FAIL" === e.status.code.major &&
                          (a({ type: "ON_ADD_PRODUCT_REQUEST_FAILED" }),
                          a(de(e.status.message)));
                    })
                    .catch(function (e) {
                      a({ type: "ON_ADD_PRODUCT_REQUEST_FAILED" });
                    }));
              };
            },
            onFormFieldClearValue: B,
          },
        ),
        Ll = Object(m.b)(jl, Ra.a, Dl)(function (e) {
          var t = e.history,
            a = e.productCode,
            n = e.pinCode,
            o = e.onAddAccountProduct,
            i = e.progress,
            c = function () {
              return !!(!a || "" === a) || !!(!n || "" === n);
            };
          return r.a.createElement(tr, {
            screenClass: "add-product-screen",
            showProductInformation: !1,
            titleArea: z.t("add_product"),
            singleLineHeader: !0,
            bodyArea: r.a.createElement(
              "div",
              { className: "add-product-wrap" },
              r.a.createElement(
                "p",
                { className: "description" },
                z.t("add_product_description"),
              ),
              r.a.createElement(
                "form",
                { className: "parkapp-form add-product-form" },
                r.a.createElement(Ia, {
                  name: "addProduct_code",
                  label: z.t("product_code"),
                  autofocus: !0,
                  upperCase: !0,
                  value: a,
                }),
                r.a.createElement(Ia, {
                  name: "addProduct_pinCode",
                  label: z.t("pin_code"),
                  maxlength: 10,
                  upperCase: !0,
                  value: n,
                }),
              ),
              i && r.a.createElement("div", { className: "loader" }),
            ),
            actionArea: r.a.createElement(
              "button",
              {
                className: "button submit ".concat(c() ? "disabled" : ""),
                disabled: c(),
                onClick: function () {
                  o(a, n, t);
                },
                "aria-label": z.t("add_product"),
              },
              z.t("add_product"),
            ),
          });
        }),
        Ml = function (e, t) {
          return {
            type: "ON_ALL_ACTIONS_REQUEST_SUCCESS",
            arrayActiveActions: e,
            arrayScheduledActions: t,
          };
        },
        Rl = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return function (a, n) {
            var r = n().data.products,
              o = [],
              i = [];
            (t && a({ type: "ON_ALL_ACTIONS_REQUEST_STARTED" }),
              C()
                .get_activations()
                .then(function (t) {
                  if ("OK" === t.status.code.major) {
                    var n = t.data.categories;
                    (n.length > 0 &&
                      n.forEach(function (e, t) {
                        var a = e.cty_products;
                        a.length > 0 &&
                          a.forEach(function (e) {
                            var t = r.find(function (t) {
                                return t.value === e.pdt_id;
                              }),
                              a = {
                                value: e.pdt_id,
                                name: t.name,
                                title: t.title,
                                city: t.city,
                                logoFolder: t.logoFolder,
                                locationProduct: t.location,
                                byGrant: t.byGrant,
                                productIsSwitch: t.productIsSwitch,
                                options: t.options,
                              },
                              n = Jt(e.pdt_members).pdtMembersActive,
                              c = Jt(e.pdt_members).pdtMembersScheduled;
                            (n.length > 0 &&
                              n.forEach(function (e) {
                                var t = Object(E.a)(Object(E.a)({}, e), a);
                                o.push(t);
                              }),
                              c.length > 0 &&
                                c.forEach(function (e) {
                                  var t = Object(E.a)(Object(E.a)({}, e), a);
                                  i.push(t);
                                }));
                          });
                      }),
                      a(Ml(o, i)));
                  } else
                    "FAIL" === t.status.code.major &&
                    "SESSION_TIMEOUT" === t.status.code.minor
                      ? a(ha(e))
                      : a({ type: "ON_ALL_ACTIONS_REQUEST_FAIL" });
                })
                .catch(function (e) {
                  a({ type: "ON_ALL_ACTIONS_REQUEST_FAIL" });
                }));
          };
        },
        Fl = function (e) {
          var t = e.timeStart;
          return r.a.createElement(
            "div",
            { className: "timeStartEnd-container not-exist-timeEnd" },
            r.a.createElement("div", { className: "timeStartEnd-clocks" }),
            r.a.createElement(
              "div",
              { className: "time-container" },
              r.a.createElement("div", { className: "time" }, yr(t)),
            ),
          );
        },
        Ul = function (e) {
          var t = e.mbr_parameters,
            a = e.atn_parameters,
            n = e.mbr_identifier,
            o = e.parentTimeStart,
            i = (e.locationProduct, e.name),
            c = e.title,
            s = e.logoFolder,
            l = e.city,
            u = e.onClick,
            d = e.byGrant,
            m = e.productIsSwitch,
            _ = e.options,
            p = e.index,
            f = t.length > 0 ? t[0].prr_value : void 0,
            g = n,
            v = a[1].prr_value,
            h = o || a[0].prr_value,
            E = "/city-logos/" + s + "/logo.png",
            b = !!d;
          return r.a.createElement(
            _r,
            {
              onClick: u,
              onKeyDown: function (e) {
                (13 !== e.keyCode && "Enter" !== e.key) || u();
              },
              tabIndex: 6 + p,
            },
            r.a.createElement(
              "div",
              { className: "all-parking-item-container" },
              r.a.createElement(
                "div",
                { className: "all-parking-item" },
                !m &&
                  -1 === dt(_) &&
                  r.a.createElement(
                    "div",
                    { className: "activate-license-plate" },
                    z.t("activations_license_plate"),
                  ),
                r.a.createElement(
                  "div",
                  { className: "all-parking-item-content" },
                  r.a.createElement(
                    "div",
                    { className: "left-item" },
                    !m &&
                      -1 !== dt(_) &&
                      r.a.createElement(Tr, { name: f, byGrant: b }),
                    m &&
                      r.a.createElement("div", {
                        className: "activate-license-plate",
                        dangerouslySetInnerHTML: {
                          __html: z.t("active_license_plate_since", {
                            since: h,
                          }),
                        },
                      }),
                    r.a.createElement(cr, {
                      licensePlate: g,
                      licensePlateClass: "active",
                      classContainer: -1 === dt(_) ? "no_marginTop" : "",
                    }),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "right-item" },
                    !m &&
                      -1 !== dt(_) &&
                      r.a.createElement(Ir, { timeEnd: v, timeStart: h }),
                    !m &&
                      -1 === dt(_) &&
                      r.a.createElement(Fl, { timeStart: h }),
                  ),
                ),
                r.a.createElement(
                  "div",
                  { className: "product-info-container" },
                  r.a.createElement(
                    "div",
                    { className: "product-image" },
                    r.a.createElement(on.a, {
                      src: E,
                      fallbackImage: "/city-logos/default/logo.png",
                      initialImage: "/city-logos/default/logo.png",
                      alt: l + " logo",
                    }),
                  ),
                  (i || c) &&
                    r.a.createElement("span", null, i, c && ", ", " ", c),
                ),
              ),
              r.a.createElement("div", {
                className: "all-parking-item-button",
                onClick: u,
              }),
            ),
          );
        },
        Hl = function (e) {
          var t = e.mbr_parameters,
            a = e.atn_parameters,
            n = e.mbr_identifier,
            o = e.parentTimeStart,
            i = e.name,
            c = e.title,
            s = e.logoFolder,
            l = e.city,
            u = e.onClick,
            d = e.byGrant,
            m = e.options,
            _ = e.index,
            p = t.length > 0 ? t[0].prr_value : void 0,
            f = n,
            g = a[1].prr_value,
            v = o || a[0].prr_value,
            h = "/city-logos/" + s + "/logo.png",
            E = !!d;
          return r.a.createElement(
            _r,
            {
              onClick: u,
              onKeyDown: function (e) {
                (13 !== e.keyCode && "Enter" !== e.key) || u();
              },
              tabIndex: 6 + _,
            },
            r.a.createElement(
              "div",
              { className: "all-parking-item-container" },
              r.a.createElement(
                "div",
                { className: "all-parking-item" },
                -1 === dt(m) &&
                  r.a.createElement(
                    "div",
                    { className: "activate-license-plate" },
                    z.t("activations_license_plate"),
                  ),
                r.a.createElement(
                  "div",
                  { className: "all-parking-item-content" },
                  r.a.createElement(
                    "div",
                    { className: "left-item" },
                    -1 !== dt(m) &&
                      r.a.createElement(Tr, { name: p, byGrant: E }),
                    r.a.createElement(cr, {
                      licensePlate: f,
                      classContainer: -1 === dt(m) ? "no_marginTop" : "",
                    }),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "right-item" },
                    -1 !== dt(m) &&
                      r.a.createElement(Ir, { timeEnd: g, timeStart: v }),
                    -1 === dt(m) && r.a.createElement(Fl, { timeStart: v }),
                  ),
                ),
                r.a.createElement(
                  "div",
                  { className: "product-info-container" },
                  r.a.createElement(
                    "div",
                    { className: "product-image" },
                    r.a.createElement(on.a, {
                      src: h,
                      fallbackImage: "/city-logos/default/logo.png",
                      initialImage: "/city-logos/default/logo.png",
                      alt: l + " logo",
                    }),
                  ),
                  i && r.a.createElement("span", null, i),
                  c && r.a.createElement("span", null, ", ", c),
                ),
              ),
              r.a.createElement("div", {
                className: "all-parking-item-button",
                onClick: u,
              }),
            ),
          );
        },
        xl = ["running", "planned"],
        zl = Object(m.c)({
          componentWillMount: function () {
            var e = this.props,
              t = e.history,
              a = e.getAllActions,
              n = e.autoRefreshAllParkingActions;
            (a(t), n(t));
          },
          componentWillUnmount: function () {
            var e = this.props,
              t = e.setIntervalId,
              a = e.setIntervalIdAllParkingActionsStop;
            t && a(t);
          },
        }),
        Yl = Object(s.b)(
          function (e) {
            var t = e.allActions,
              a = t.arrayActiveActions,
              n = t.arrayScheduledActions,
              r = t.progress,
              o = t.setIntervalId,
              i = [];
            return (
              i.push(a.length),
              i.push(n.length),
              {
                progress: r,
                activeTab: e.ui.activeTab,
                tips: i,
                arrayActiveActions: a,
                arrayScheduledActions: n,
                selectedProduct: e.settings.selectedProduct,
                setIntervalId: o,
              }
            );
          },
          {
            getAllActions: Rl,
            onClearAllActions: function () {
              return { type: "ALL_ACTIONS_CLEAR" };
            },
            setCurrentProduct: $,
            onSaveProduct: ee,
            getCategoryProductDetailsFetching: ra,
            setIntervalIdAllParkingActionsStop: function (e) {
              return (
                clearInterval(e),
                {
                  type: "SET_INTERVAL_ID_ALL_PARKING_ACTIONS_STOP",
                  setIntervalId: e,
                }
              );
            },
            autoRefreshAllParkingActions: function (e) {
              return function (t, a) {
                var n = setInterval(function () {
                  t(Rl(e, !1));
                }, 6e4);
                t({
                  type: "SET_INTERVAL_ID_ALL_PARKING_ACTIONS",
                  setIntervalId: n,
                });
              };
            },
          },
        ),
        Gl = Object(m.b)(Yl, Ra.a, zl)(function (e) {
          var t = e.progress,
            a = e.tips,
            n = e.activeTab,
            o = e.arrayActiveActions,
            i = e.arrayScheduledActions,
            c = e.setCurrentProduct,
            s = e.onSaveProduct,
            l = e.getCategoryProductDetailsFetching,
            u = e.selectedProduct,
            d = e.history,
            m = function (e) {
              (u ? c(e) : s(e), l(), d.push("/"));
            };
          return r.a.createElement(tr, {
            screenClass: "all-parking-actions-screen",
            pageList: !0,
            showProductInformation: !1,
            tabsArea: r.a.createElement(rr, { tabs: xl, tips: a }),
            titleArea: z.t("all_parking_actions"),
            singleLineHeader: !0,
            bodyArea: r.a.createElement(
              "div",
              { className: "all-parking-actions-container" },
              !t &&
                o.length > 0 &&
                0 === n &&
                o.map(function (e, t) {
                  return r.a.createElement(
                    Ul,
                    Object.assign({ key: t, index: t }, e, {
                      onClick: function () {
                        return m(e.value);
                      },
                    }),
                  );
                }),
              !t &&
                i.length > 0 &&
                1 === n &&
                i.map(function (e, t) {
                  return r.a.createElement(
                    Hl,
                    Object.assign({ key: t, index: t }, e, {
                      onClick: function () {
                        return m(e.value);
                      },
                    }),
                  );
                }),
              !t &&
                0 === o.length &&
                0 === n &&
                r.a.createElement(
                  "div",
                  { className: "action-not-found" },
                  r.a.createElement(
                    "h2",
                    { style: { textAlign: "center" }, "aria-level": "1" },
                    z.t("running_action_not_found"),
                  ),
                ),
              !t &&
                0 === i.length &&
                1 === n &&
                r.a.createElement(
                  "div",
                  { className: "action-not-found" },
                  r.a.createElement(
                    "h2",
                    { style: { textAlign: "center" }, "aria-level": "1" },
                    z.t("planned_action_not_found"),
                  ),
                ),
              t && r.a.createElement("div", { className: "loader" }),
            ),
          });
        }),
        Vl = function (e, t, a, n, o, i, c, s) {
          return [
            {
              title: r.a.createElement(
                "button",
                { className: "show-context-menu-button" },
                r.a.createElement("span", null, z.t("show_products")),
              ),
              onClick: function () {
                (n(), t.push("/other-products/" + e.cty_id));
              },
              params: {},
            },
            {
              title: r.a.createElement(
                "button",
                { className: "info-context-menu-button" },
                z.t("show_info"),
              ),
              onClick: function () {
                (n(),
                  (c.content = e.cty_description),
                  (c.buttons = [
                    {
                      text: z.t("ok"),
                      onClick: function () {
                        return i();
                      },
                      autoFocus: !0,
                    },
                  ]),
                  o());
              },
              params: {},
            },
          ];
        },
        Bl = Object(m.c)({
          componentDidMount: function () {
            var e = this.props,
              t = e.history;
            (0, e.getOrganizations)(t);
          },
        }),
        Wl = Object(s.b)(
          function (e) {
            var t = e.organizations;
            return {
              progress: t.progress,
              selectedOrganization: t.selectedOrganization,
              organizationList: t.list,
              locale: e.settings.locale,
            };
          },
          {
            getOrganizations: kt,
            showModalMessage: de,
            closeContextMenu: ae,
            showModalDialog: me,
            hideModalDialog: _e,
          },
        ),
        Kl = Object(m.b)(Wl, Ra.a, Bl)(function (e) {
          var t = e.organizationList,
            a = e.progress,
            o = e.history,
            i = (e.showModalMessage, e.closeContextMenu),
            c = e.showModalDialog,
            s = e.hideModalDialog,
            l = Object(n.useContext)(Da);
          return r.a.createElement(tr, {
            screenClass: "organization-screen",
            pageList: !0,
            showProductInformation: !1,
            titleArea: z.t("organizations"),
            titleAreaCount: t.length,
            singleLineHeader: !0,
            bodyArea: a
              ? r.a.createElement("div", { className: "loader" })
              : t.map(function (e, t) {
                  var a = e.cty_external_content.toLowerCase(),
                    n = e.cty_products;
                  return r.a.createElement(Ar, {
                    key: t,
                    index: t,
                    actions: Vl(e, o, 0, i, c, s, l),
                    template: r.a.createElement(
                      "div",
                      {
                        className: "organization-item",
                        onClick: function (t) {
                          return (function (e) {
                            window.innerWidth < 768 &&
                              (i(), o.push("/other-products/" + e.cty_id));
                          })(e);
                        },
                      },
                      r.a.createElement(Nr, { logoFolder: a }),
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "div",
                          { className: "organization-name" },
                          e.cty_name,
                        ),
                        r.a.createElement(
                          "div",
                          { className: "product-count" },
                          n.length +
                            (1 === n.length
                              ? z.t("product_label")
                              : z.t("product_plural_label")),
                        ),
                      ),
                    ),
                  });
                }),
          });
        }),
        Zl = function (e) {
          var t = e.onClick;
          return r.a.createElement(
            _r,
            {
              onClick: t,
              tabIndex: "6",
              onKeyDown: function (e) {
                (13 !== e.keyCode && "Enter" !== e.key) || t();
              },
            },
            r.a.createElement(
              "div",
              { className: "organization-item" },
              r.a.createElement(
                "div",
                { className: "last-used-product-left" },
                r.a.createElement("p", null, z.t("last_used_product")),
                r.a.createElement("p", null, z.t("start_with_the_product")),
              ),
            ),
            r.a.createElement("div", { className: "last-used-product-button" }),
          );
        },
        Ql = Object(m.c)({
          componentDidMount: function () {
            var e = this.props,
              t = e.history;
            (0, e.getOrganizations)(t);
          },
        }),
        Jl = Object(s.b)(
          function (e) {
            var t = e.organizations;
            return {
              progress: t.progress,
              selectedOrganization: t.selectedOrganization,
              organizationList: t.list,
              locale: e.settings.locale,
            };
          },
          {
            getOrganizations: kt,
            showModalMessage: de,
            closeContextMenu: ae,
            showModalDialog: me,
            hideModalDialog: _e,
            onChangeSelectedProduct: Nt,
            onSelectProductIsVisited: yt,
          },
        ),
        ql = Object(m.b)(Jl, Ra.a, Ql)(function (e) {
          var t = e.organizationList,
            a = e.progress,
            o = e.history,
            i = e.closeContextMenu,
            c = e.onChangeSelectedProduct,
            s = e.onSelectProductIsVisited,
            l = function (e) {
              (i(), o.push("/select-starting-product/" + e.cty_id));
            };
          return r.a.createElement(tr, {
            screenClass: "change-starting-product-screen",
            pageList: !0,
            showProductInformation: !1,
            showBackButton: !0,
            titleArea: z.t("change_starting_product"),
            titleAreaClick: function () {
              return o.push("/settings");
            },
            singleLineHeader: !0,
            bodyArea: a
              ? r.a.createElement("div", { className: "loader" })
              : r.a.createElement(
                  n.Fragment,
                  null,
                  r.a.createElement(Zl, {
                    onClick: function () {
                      (c(!1), s(!0), o.push("/settings"));
                    },
                  }),
                  t.map(function (e, t) {
                    var a = e.cty_external_content.toLowerCase(),
                      n = e.cty_products;
                    return r.a.createElement(
                      _r,
                      {
                        key: t,
                        index: t,
                        onClick: function () {
                          return l(e);
                        },
                        onKeyDown: function (t) {
                          return (function (e, t) {
                            (13 !== e.keyCode && "Enter" !== e.key) || l(t);
                          })(t, e);
                        },
                        tabIndex: 7 + t,
                      },
                      r.a.createElement(
                        "div",
                        { className: "organization-item" },
                        r.a.createElement(Nr, { logoFolder: a }),
                        r.a.createElement(
                          "div",
                          null,
                          r.a.createElement(
                            "div",
                            { className: "organization-name" },
                            e.cty_name,
                          ),
                          r.a.createElement(
                            "div",
                            { className: "product-count" },
                            n.length +
                              (1 === n.length
                                ? z.t("product_label")
                                : z.t("product_plural_label")),
                          ),
                        ),
                      ),
                      r.a.createElement("div", {
                        className: "last-used-product-button",
                      }),
                    );
                  }),
                ),
          });
        }),
        Xl = function (e) {
          var t,
            a = e.product,
            n = e.onClick,
            o = e.tabIndex,
            i = "";
          if (
            (a.balance &&
              a.balance.ble_parameters &&
              (i = Tn(a.balance.ble_parameters)),
            a.byGrant)
          ) {
            var c = a.byGrant.grt_parameters,
              s = c
                ? c.find(function (e) {
                    return "VALID_FROM" === e.prr_label;
                  })
                : void 0,
              l = c
                ? c.find(function (e) {
                    return "VALID_UNTIL" === e.prr_label;
                  })
                : void 0,
              u = s ? s.prr_value : void 0,
              d = l ? l.prr_value : void 0;
            t = jn(u, d);
          } else t = Dn(a.validFrom, a.validTo);
          var m = Et(a);
          return r.a.createElement(
            _r,
            {
              isBlocked: m,
              onClick: function () {
                m || n();
              },
              tabIndex: o,
              onKeyDown: function (e) {
                (13 !== e.keyCode && "Enter" !== e.key) || m || n();
              },
            },
            r.a.createElement(
              "div",
              { className: "other-product-item" },
              r.a.createElement(
                "div",
                { className: "other-products-wrapper" },
                r.a.createElement(
                  "div",
                  { className: "other-products-content" },
                  r.a.createElement("p", null, a.name),
                  r.a.createElement("p", null, a.title),
                  t && r.a.createElement("p", null, z.t("valid"), " ", t),
                  Ln(a) &&
                    r.a.createElement(
                      "p",
                      { className: "product-is-blocked" },
                      z.t("blocked"),
                    ),
                  !Ln(a) &&
                    ht(a) &&
                    r.a.createElement(
                      "p",
                      { className: "product-is-blocked" },
                      z.t("expired"),
                    ),
                  Mn(a) &&
                    r.a.createElement(
                      "p",
                      { className: "product-is-blocked" },
                      z.t("revoked"),
                    ),
                  a.balance &&
                    r.a.createElement(
                      "p",
                      { className: "balance" },
                      Hn(a.balance.ble_parameters),
                      r.a.createElement("span", null, " ", z.t("saldo"), " "),
                      r.a.createElement(
                        "span",
                        {
                          className: "".concat(
                            ht(a) || Ln(a) ? "crossed-out" : "",
                          ),
                        },
                        i,
                        " ",
                      ),
                    ),
                  Rn(a) &&
                    r.a.createElement(
                      "p",
                      { className: "no-active-license-plate" },
                      z.t("no_license_plate_info"),
                    ),
                  (a.activeCount > 0 ||
                    a.scheduleCount > 0 ||
                    a.notActiveCount > 0) &&
                    Fn(
                      a.activeCount,
                      a.scheduleCount,
                      a.notActiveCount,
                      a.options,
                    ),
                ),
              ),
            ),
            !m &&
              r.a.createElement("div", {
                className: "last-used-product-button",
              }),
          );
        },
        $l = Object(m.c)({
          componentDidMount: function () {
            var e = this.props,
              t = e.history,
              a = e.products,
              n = e.match;
            (0, e.onOtherProductsScreenOpen)(a, t, n);
          },
          componentWillUnmount: function () {
            this.props.otherProductsWillUnMount();
          },
        }),
        eu = Object(s.b)(
          function (e) {
            var t = void 0 !== e.data.products ? e.data.products : [],
              a = e.data.otherProductsLoaded,
              n = e.organizations.list;
            return {
              otherProducts: t,
              otherProductsLoaded: a,
              products: t,
              selectedProduct: e.settings.selectedProduct,
              organizations: n,
              locale: e.settings.locale,
            };
          },
          {
            onOtherProductsScreenOpen: ft,
            otherProductsWillUnMount: Te,
            onChangeSelectedProduct: Nt,
            onFormFieldValueChanged: V,
            onSelectProductIsVisited: yt,
          },
        ),
        tu = Object(m.b)(eu, Ra.a, $l)(function (e) {
          var t = e.match,
            a = e.history,
            n = e.otherProducts,
            o = e.otherProductsLoaded,
            i = e.onChangeSelectedProduct,
            c = e.onFormFieldValueChanged,
            s = e.onSelectProductIsVisited,
            l = t.params.ctyId,
            u = n.filter(function (e) {
              return e.cityId === l;
            });
          return r.a.createElement(tr, {
            screenClass: "change-starting-product-screen",
            pageList: !0,
            showProductInformation: !1,
            showBackButton: !0,
            titleArea: z.t("change_starting_product"),
            titleAreaClick: function () {
              a.push("/change-starting-product");
            },
            singleLineHeader: !0,
            bodyArea: o
              ? 0 !== u.length
                ? u.map(function (e, t) {
                    return r.a.createElement(Xl, {
                      key: t,
                      tabIndex: 5 + t,
                      product: e,
                      onClick: function () {
                        return (
                          (t = e.value),
                          i(!0),
                          c("startingProduct", t),
                          s(!0),
                          void a.push("/settings")
                        );
                        var t;
                      },
                    });
                  })
                : r.a.createElement(
                    "div",
                    { className: "action-not-found" },
                    r.a.createElement(
                      "h2",
                      { style: { textAlign: "center" } },
                      z.t("no_products_to_choose_from"),
                    ),
                  )
              : r.a.createElement("div", { className: "loader" }),
          });
        }),
        au = Object(s.b)(
          function (e) {
            var t = e.form.search_on_license_plate,
              a = t ? t.value : void 0;
            return {
              progress: e.selectLicensePlate.progress,
              licensePlatesNotMemberAdmin:
                e.selectLicensePlate.licensePlatesNotMemberAdmin,
              currentSearchLicensePlate: a,
              locale: e.settings.locale,
            };
          },
          {
            getLicensePlateNotMemberAdmin: function () {
              return function (e, t) {
                var a = t().settings,
                  n = a.startingProduct,
                  r = a.currentProduct,
                  o = a.locale,
                  i = r || n;
                (e({ type: "GET_LICENSE_PLATE_fETCH_START" }),
                  y()
                    .getCategoryProductDetails(i, o)
                    .then(function (t) {
                      if ("OK" === t.status.code.major) {
                        var a = [];
                        if (t.data) {
                          var n = t.data.pdt_members;
                          n.length > 0 &&
                            (a = n.map(function (e) {
                              return e.mbr_identifier;
                            }));
                        }
                        e(
                          (function (e) {
                            return {
                              type: "GET_LICENSE_PLATE_NOT_MEMBER_ADMIN_SUCCESS",
                              licensePlatesNotMemberAdmin: e,
                            };
                          })(a),
                        );
                      } else
                        ("FAIL" === t.status.code.major && t.status.code.minor,
                          e({ type: "GET_LICENSE_PLATE_FAILED" }));
                    })
                    .catch(function () {
                      return e({ type: "GET_LICENSE_PLATE_FAILED" });
                    }));
              };
            },
            onInitializeFormField: W,
          },
        ),
        nu = Object(m.b)(au, Ra.a)(function (e) {
          var t = e.history,
            a = e.match,
            o = e.getLicensePlateNotMemberAdmin,
            i = e.progress,
            c = e.licensePlatesNotMemberAdmin,
            s = e.currentSearchLicensePlate,
            l = e.onInitializeFormField;
          Object(n.useEffect)(
            function () {
              o();
            },
            [o],
          );
          var u,
            d,
            m =
              ((u = c),
              (d = s) && "" !== d
                ? u.filter(function (e) {
                    return -1 !== e.toLowerCase().search(d.toLowerCase());
                  })
                : u);
          return r.a.createElement(tr, {
            screenClass: "select-license-plate-screen",
            pageList: !0,
            titleArea: z.t("select_license_plate"),
            showBackButton: !0,
            titleAreaClick: function () {
              t.push("/parking-actions-form/" + a.params.type);
            },
            bodyArea: r.a.createElement(
              "div",
              { className: "selectLicensePlateContainer" },
              !i &&
                r.a.createElement(
                  n.Fragment,
                  null,
                  r.a.createElement(qo, null),
                  r.a.createElement(
                    "div",
                    { className: "selectLicensePlateItem" },
                    0 === c.length &&
                      r.a.createElement(
                        "div",
                        { className: "action-not-found" },
                        r.a.createElement(
                          "h2",
                          { style: { textAlign: "center" } },
                          z.t("recent_not_found"),
                        ),
                      ),
                    c.length > 0 &&
                      m.map(function (e, n) {
                        return r.a.createElement(Ho, {
                          key: n,
                          licensePlate: e,
                          onClick: function () {
                            return (
                              l("newParkingActions_license_plate", e),
                              void t.push(
                                "/parking-actions-form/" + a.params.type,
                              )
                            );
                          },
                        });
                      }),
                  ),
                ),
              i && r.a.createElement("div", { className: "loader" }),
            ),
          });
        }),
        ru = function (e, t) {
          var a = void 0 !== e ? e : [],
            n = a.find(function (e) {
              return e.value === t;
            });
          return n || a[0];
        },
        ou = function (e) {
          return e.length > 0
            ? e.sort(function (e, t) {
                return e.mbr_identifier === t.mbr_identifier
                  ? 0
                  : +(e.mbr_identifier > t.mbr_identifier) || -1;
              })
            : e;
        },
        iu = function (e, t) {
          var a = ou(e),
            n = t ? lt(t.prr_options) : void 0;
          return a.map(function (e, t) {
            var a = e.mbr_identifier,
              o = e.parentTimeStart
                ? e.parentTimeStart
                : e.atn_parameters[0].prr_value,
              i = e.atn_id,
              c = e.parentId,
              s = e.atn_parameters[2] ? e.atn_parameters[2].prr_value : void 0;
            return r.a.createElement(uu, {
              key: t,
              index: t,
              licensePlate: a,
              timeStart: o,
              actions_id: i,
              parentId: c,
              locationAction: s,
              productLocationRequired: n,
            });
          });
        },
        cu = function (e, t) {
          return t && "" !== t
            ? e.filter(function (e) {
                return (
                  -1 !== e.mbr_identifier.toLowerCase().search(t.toLowerCase())
                );
              })
            : e;
        },
        su = function (e) {
          var t = e.licensePlate,
            a = e.timeStart,
            n = e.locationAction,
            o = e.productLocationRequired,
            i = z.t("stop_activation_confirmation");
          return r.a.createElement(
            "div",
            { className: "confirmation-container" },
            r.a.createElement(
              "div",
              { className: "parking-info" },
              r.a.createElement(
                "div",
                { className: "parkapp-item" },
                r.a.createElement(
                  "div",
                  { className: "parkingActionContainer" },
                  r.a.createElement("div", {
                    className: "activate-license-plate",
                  }),
                  r.a.createElement(
                    "div",
                    { className: "left-item" },
                    r.a.createElement(cr, {
                      licensePlate: t,
                      licensePlateClass: "active",
                    }),
                  ),
                  r.a.createElement(
                    "div",
                    { className: "right-item" },
                    r.a.createElement(Fl, { timeStart: a }),
                  ),
                  r.a.createElement(Cr, {
                    location: n,
                    productLocationRequired: o,
                  }),
                ),
              ),
            ),
            r.a.createElement("p", { className: "confirmation-message" }, i),
          );
        },
        lu = Object(s.b)(
          function (e) {
            return { locale: e.settings.locale };
          },
          {
            closeContextMenu: ae,
            onInitializeFormField: W,
            onInitializeDateTime: $e,
            showModalDialog: me,
            hideModalDialog: _e,
            onStopParkingActions: oa,
          },
        ),
        uu = Object(m.b)(lu, Ra.a)(function (e) {
          var t = e.index,
            a = e.licensePlate,
            o = e.timeStart,
            i = e.closeContextMenu,
            c = e.actions_id,
            s = e.history,
            l = e.locationAction,
            u = e.productLocationRequired,
            d = e.showModalDialog,
            m = e.hideModalDialog,
            _ = e.parentId,
            p = e.onStopParkingActions,
            f = Object(n.useContext)(Da),
            g = function () {
              ((f.content = r.a.createElement(su, {
                licensePlate: a,
                timeStart: o,
                locationAction: l,
                productLocationRequired: u,
              })),
                (f.buttons = (function (e) {
                  var t = e.yesClick,
                    a = e.noClick;
                  return [
                    { text: z.t("stop_action_yes"), onClick: t, autoFocus: !0 },
                    { text: z.t("stop_action_no"), onClick: a },
                  ];
                })({
                  yesClick: function () {
                    (m(), i(), p(_ || c, s));
                  },
                  noClick: function () {
                    m();
                  },
                })),
                d());
            },
            v = (function (e, t) {
              return [
                {
                  title: r.a.createElement(
                    "button",
                    {
                      className: "stop-context-menu-button",
                      tabIndex: (7 + t).toString(),
                      "aria-label": z.t("stop"),
                    },
                    z.t("stop"),
                  ),
                  onClick: function () {
                    return e();
                  },
                  params: {},
                },
              ];
            })(g, t);
          return r.a.createElement(Ar, {
            index: t,
            key: t,
            actions: v,
            template: r.a.createElement(
              "div",
              {
                className: "parkingActionContainer",
                onClick: function () {
                  window.innerWidth < 768 && g();
                },
              },
              r.a.createElement(
                "div",
                { className: "left-item" },
                r.a.createElement(cr, {
                  licensePlate: a,
                  licensePlateClass: "active",
                }),
              ),
              r.a.createElement(
                "div",
                { className: "right-item" },
                r.a.createElement(Fl, { timeStart: o }),
              ),
            ),
          });
        }),
        du = function (e) {
          var t = e.activationActions,
            a = e.productLocation,
            o = iu(t, a);
          return r.a.createElement(
            n.Fragment,
            null,
            t.length > 0 && o,
            0 === t.length &&
              r.a.createElement(
                "div",
                { className: "action-not-found" },
                r.a.createElement(
                  "h2",
                  { style: { textAlign: "center" } },
                  z.t("running_activation_not_found"),
                ),
              ),
          );
        },
        mu = function (e) {
          var t = e.inactiveActions,
            a = (function (e) {
              return ou(e).map(function (e, t) {
                var a = e.mbr_identifier;
                return r.a.createElement(pu, {
                  key: t,
                  index: t,
                  licensePlate: a,
                });
              });
            })(t);
          return r.a.createElement(
            n.Fragment,
            null,
            t.length > 0 && a,
            0 === t.length &&
              r.a.createElement(
                "div",
                { className: "action-not-found" },
                r.a.createElement(
                  "h2",
                  { style: { textAlign: "center" } },
                  z.t("inactive_activation_not_found"),
                ),
              ),
          );
        },
        _u = Object(s.b)(
          function (e) {
            var t = e.data.products,
              a = e.settings,
              n = a.locale,
              r = a.startingProduct,
              o = a.currentProduct,
              i = o || r;
            return {
              locale: n,
              targetProduct: i,
              arrayProducts: void 0 !== t ? t : [],
              selectedProduct: ru(t, i),
            };
          },
          {
            showMessageBlockedProduct: Bt,
            onInitializeEndDateTime: function (e) {
              return { type: "ON_INITIALIZE_END_DATE_TIME", endDateTime: e };
            },
            onInitializeFormField: W,
            onStartActivation: function (e, t) {
              return function (a, n) {
                var r = n().settings,
                  o = r.startingProduct,
                  i = r.currentProduct,
                  c = r.locale,
                  s = i || o,
                  l = n().data.products.find(function (e) {
                    return e.value === s;
                  }),
                  u = l.location,
                  d = l.validTo,
                  m = Ye(new Date().setSeconds(0)),
                  _ = fe()(d, "YYYY-MM-DD HH:mm")
                    .second(59)
                    .format("DD-MM-YYYY HH:mm:ss"),
                  p = u.prr_default_value,
                  g = {
                    action: {
                      atn_parameters: [
                        { prr_label: "MBR_IDENT", prr_value: t },
                        { prr_label: "TIMESTART", prr_value: m },
                        { prr_label: "TIMEEND", prr_value: _ },
                        { prr_label: "LOCATION", prr_value: p },
                      ],
                    },
                  },
                  v = JSON.stringify(g);
                (a({ type: "ON_START_ACTION_PROGRESS" }),
                  C()
                    .createParkingActions(v, s, c)
                    .then(function (t) {
                      "OK" === t.status.code.major
                        ? (a({ type: "START_ACTIVATION_SUCCESS" }),
                          a(Xt(s, e)),
                          a(gt()),
                          a(ne(0)))
                        : "FAIL" === t.status.code.major &&
                            "SESSION_TIMEOUT" === t.status.code.minor
                          ? a(ha(e))
                          : (f.toast.error(t.status.message),
                            a({ type: "START_ACTIVATION_FAIL" }));
                    })
                    .catch(function (t) {
                      (a({ type: "START_ACTIVATION_FAIL" }), a(ha(e)));
                    }));
              };
            },
          },
        ),
        pu = Object(m.b)(_u, Ra.a)(function (e) {
          var t = e.index,
            a = e.licensePlate,
            n = e.history,
            o = e.arrayProducts,
            i = e.targetProduct,
            c = e.showMessageBlockedProduct,
            s = e.onStartActivation,
            l = function () {
              Vt(o, i) ? c(o, i) : s(n, a);
            },
            u = (function (e, t) {
              return [
                {
                  title: r.a.createElement(
                    "button",
                    {
                      className: "extend-context-menu-button",
                      "aria-label": z.t("start"),
                      tabIndex: (7 + t).toString(),
                    },
                    z.t("start"),
                  ),
                  onClick: function () {
                    return e();
                  },
                  params: {},
                },
              ];
            })(l, t);
          return r.a.createElement(Ar, {
            index: t,
            key: t,
            actions: u,
            template: r.a.createElement(
              "div",
              {
                className: "parkingActionContainer",
                onClick: function () {
                  window.innerWidth < 768 && l();
                },
              },
              r.a.createElement(
                "div",
                { className: "left-item" },
                r.a.createElement(cr, {
                  licensePlate: a,
                  licensePlateClass: "active",
                }),
              ),
              r.a.createElement("div", { className: "right-item" }),
            ),
          });
        }),
        fu = ["active", "inactive"],
        gu = Object(s.b)(function (e) {
          var t = e.data,
            a = t.productsLoaded,
            n = t.products,
            r = e.main,
            o = r.productDetailsActive,
            i = r.progress,
            c = r.productDetailsNotActive,
            s = e.settings,
            l = s.locale,
            u = s.startingProduct,
            d = s.currentProduct,
            m = s.settingsLocale,
            _ = e.ui.activeTab,
            p = e.form.search_license_palate,
            f = p ? p.value : "",
            g = ru(n, d || u);
          return {
            productsLoaded: a,
            tips: (function (e, t) {
              var a = [],
                n = e.length,
                r = t.length;
              return (a.push(n), a.push(r), a);
            })(o, c),
            locale: l,
            selectedProduct: g,
            progress: i,
            activeTab: _,
            productDetailsActive: o,
            settingsLocale: m,
            productDetailsNotActive: c,
            searchLicensePalateValue: f,
            filteredProductDetailsActive: o.length > 0 ? cu(o, f) : o,
            filteredProductDetailsNotActive: c.length > 0 ? cu(c, f) : c,
          };
        }, null),
        vu = Object(m.b)(gu)(function (e) {
          var t = e.tips,
            a = e.productsLoaded,
            o = e.progress,
            i = e.activeTab,
            c = e.selectedProduct,
            s = e.searchLicensePalateValue,
            l = e.filteredProductDetailsActive,
            u = e.filteredProductDetailsNotActive;
          return r.a.createElement(
            n.Fragment,
            null,
            a &&
              r.a.createElement(tr, {
                screenClass: "screen-fixed-footer activation-container",
                pageList: !0,
                titleArea: z.t("activations"),
                tabsArea: r.a.createElement(rr, {
                  tabsTitle: "activations",
                  tabs: fu,
                  tips: t,
                }),
                bodyArea: o
                  ? r.a.createElement("div", { className: "loader" })
                  : r.a.createElement(
                      n.Fragment,
                      null,
                      r.a.createElement(Or, {
                        nameField: "search_license_palate",
                        showButton: !1,
                        value: s,
                        tabIndex: "6",
                      }),
                      0 === i &&
                        r.a.createElement(du, {
                          activationActions: l,
                          productLocation: c.location,
                        }),
                      1 === i && r.a.createElement(mu, { inactiveActions: u }),
                    ),
              }),
            !a && r.a.createElement("div", { className: "loader" }),
          );
        }),
        hu = function (e, t, a) {
          return function (n) {
            (n({ type: "REQUEST_STARTED" }),
              D()
                .get_apk_grant_information(e, t)
                .then(function (t) {
                  "OK" === t.status.code.major
                    ? (n({ type: "GET_GRANT_INFORMATION", grant: t.data }),
                      n({ type: "REQUEST_FINISHED" }),
                      a.push("/authorized-email/" + e))
                    : (n(de(z.t("invalid_authorization_key"))),
                      n({ type: "REQUEST_FINISHED" }));
                })
                .catch(function (e) {
                  (n(de(e.message)), n({ type: "REQUEST_FINISHED" }));
                }));
          };
        },
        Eu = Object(s.b)(
          function (e) {
            var t = e.createAccount.progress,
              a = e.form.authorizationKey,
              n = a ? a.value : "";
            return {
              locale: e.auth.locale,
              authorizationKeyValue: n,
              progress: t,
            };
          },
          { getApkGrantInformation: hu, onErrorUpdate: K },
        ),
        bu = Object(m.b)(Eu, Ra.a)(function (e) {
          var t = e.authorizationKeyValue,
            a = e.getApkGrantInformation,
            o = e.progress,
            i = e.onErrorUpdate,
            c = e.history,
            s = e.locale;
          !(function (e) {
            Object(n.useEffect)(
              function () {
                var t = (function (e) {
                  var t = e.search;
                  if (t && "" !== t) return t.split("=")[1];
                })(e.location);
                t && t && e.push("/authorized-email/" + t);
              },
              [e],
            );
          })(c);
          var l = function (e) {
            if (!e || "" === e) return "value_empty_message";
          };
          return r.a.createElement(tr, {
            screenClass: "screen-create-account",
            municipalityProductArea: !1,
            municipalityHeader: !0,
            titleArea: z.t("create_account_link_product"),
            bodyArea: r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "span",
                { className: "enter-code" },
                z.t("enter_authorization_key_you_have_below_received"),
              ),
              r.a.createElement(Ia, {
                leftIconClass: "key-icon",
                name: "authorizationKey",
                placeholder: z.t("authorization_key"),
                value: t,
                validator: function (e) {
                  return l(e);
                },
                disabled: o,
                areaLabel: z.t(
                  "enter_authorization_key_you_have_below_received",
                ),
                "aria-required": !0,
                autofocus: !0,
              }),
            ),
            actionArea: r.a.createElement(
              "button",
              {
                className: "button submit ".concat(o ? "disabled" : ""),
                "aria-label": z.t("further"),
                onClick: function () {
                  var e = l(t);
                  e ? i("authorizationKey", e) : a(t, s, c);
                },
                disabled: o,
              },
              !o && z.t("further"),
              o && r.a.createElement("div", { className: "loader small" }),
            ),
          });
        }),
        Au = Object(s.b)(
          function (e) {
            var t = e.createAccount,
              a = t.progress,
              n = t.grantInformation,
              r = e.form.authorizationEmail,
              o = r ? r.value : "";
            return {
              locale: e.auth.locale,
              authorizationEmailValue: o,
              progress: a,
              grantInformation: n,
            };
          },
          {
            getApkGrantInformation: hu,
            onErrorUpdate: K,
            onRegisterEmail: function (e, t, a, n) {
              return function (r) {
                (r({ type: "REQUEST_STARTED" }),
                  D()
                    .agk_register_email(e, t, a)
                    .then(function (e) {
                      "OK" === e.status.code.major
                        ? (r(de(e.status.message)),
                          r({ type: "REQUEST_FINISHED" }),
                          n.push("/"))
                        : (r(de(e.status.message)),
                          r({ type: "REQUEST_FINISHED" }));
                    })
                    .catch(function (e) {
                      (r(de(e.message)), r({ type: "REQUEST_FINISHED" }));
                    }));
              };
            },
          },
        ),
        Tu = Object(m.b)(Au, Ra.a)(function (e) {
          var t = e.progress,
            a = e.authorizationEmailValue,
            o = e.onErrorUpdate,
            i = e.grantInformation,
            c = e.match,
            s = e.history,
            l = e.getApkGrantInformation,
            u = e.onRegisterEmail,
            d = e.locale;
          Object(n.useEffect)(
            function () {
              if (!i) {
                var e = c.params && c.params.code ? c.params.code : void 0;
                l(e, d, s);
              }
            },
            [l, i, s, d, c],
          );
          var m = function (e) {
              return e && "" !== e
                ? e &&
                  "" !== e &&
                  !/^([a-z0-9A-Z_.-]+)@([a-z0-9A-Z_.-]+)\.([a-zA-Z.]{2,6})$/.test(
                    e,
                  )
                  ? "enter_correct_email"
                  : void 0
                : "value_empty_message";
            },
            _ =
              i && "" !== i.agk_granter_name ? sc(i.agk_granter_name) : void 0;
          return r.a.createElement(tr, {
            screenClass: "screen-create-account",
            municipalityProductArea: !1,
            municipalityHeader: !0,
            titleArea: z.t("create_account_link_product"),
            bodyArea: r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "span",
                { className: "authorized-email-label" },
                z.t("authorization"),
              ),
              i &&
                r.a.createElement(
                  _r,
                  null,
                  r.a.createElement(
                    "div",
                    { className: "product-card-container" },
                    r.a.createElement("p", null, i.agk_category),
                    r.a.createElement("p", null, i.agk_product.split("-")[0]),
                    r.a.createElement("p", null, i.agk_product.split("-")[1]),
                    r.a.createElement(
                      "p",
                      { className: "authorization-person" },
                      z.t("granted_by"),
                      " ",
                      r.a.createElement("span", null, _),
                    ),
                  ),
                ),
              r.a.createElement(
                "div",
                { className: "enter-email" },
                z.t("enter_your_email_address_below_so_we_can_send_you_email"),
              ),
              r.a.createElement(Ia, {
                leftIconClass: "email-icon",
                name: "authorizationEmail",
                placeholder: z.t("email"),
                value: a,
                validator: function (e) {
                  return m(e);
                },
                disabled: t,
                areaLabel: z.t(
                  "enter_authorization_key_you_have_below_received",
                ),
                "aria-required": !0,
                autofocus: !0,
                enterWithoutSpaces: !0,
              }),
            ),
            actionArea: r.a.createElement(
              "button",
              {
                className: "button submit ".concat(t ? "disabled" : ""),
                "aria-label": z.t("confirm"),
                disabled: t,
                onClick: function () {
                  var e = m(a);
                  if (e) o("authorizationEmail", e);
                  else {
                    var t = c.params && c.params.code ? c.params.code : void 0;
                    u(t, a, d, s);
                  }
                },
              },
              !t && z.t("confirm"),
              t && r.a.createElement("div", { className: "loader small" }),
            ),
          });
        }),
        Ou = ["component"],
        Nu = (function (e, t) {
          var a = [wi.a];
          return (
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Si.d,
            Object(Si.e)(nc, e, Object(Si.d)(Si.a.apply(void 0, a)))
          );
        })(),
        yu = function (e) {
          var t = e.component,
            a = Object(c.a)(e, Ou);
          return r.a.createElement(
            l.a,
            Object.assign({}, a, {
              render: function (e) {
                var a = H.getItem("email") || Nu.getState().auth.authenticated,
                  n = H.getItem("topupCurrentProduct"),
                  o = Nu.getState().data.products,
                  i = Nu.getState().organizations.list,
                  c = Nu.getState().main.allProductsIsBlocked;
                if (a) {
                  if ("/payment-result" === e.location.pathname)
                    return r.a.createElement(Ps, null);
                  if ("/top-up" === e.location.pathname && n)
                    return 0 === o.length
                      ? r.a.createElement(so, null)
                      : r.a.createElement($c, null);
                  if ("/no-products" === e.location.pathname)
                    return 0 === o.length || c
                      ? r.a.createElement(Ns, null)
                      : r.a.createElement(so, null);
                  if ("/add-product" === e.location.pathname)
                    return r.a.createElement(Ll, null);
                  if ("/settings" === e.location.pathname)
                    return r.a.createElement(To, null);
                  if (
                    "/organizations" === e.location.pathname &&
                    1 === i.length
                  ) {
                    var s = i[0];
                    return r.a.createElement(u.a, {
                      to: "/other-products/".concat(s.cty_id),
                    });
                  }
                  return 0 === o.length
                    ? r.a.createElement(so, null)
                    : r.a.createElement(t, null);
                }
                return r.a.createElement(u.a, { to: "/login" });
              },
            }),
          );
        },
        Iu = function () {
          return r.a.createElement(
            s.a,
            { store: Nu },
            r.a.createElement(
              d.a,
              { history: R },
              r.a.createElement(
                "div",
                { className: "app" },
                r.a.createElement(yu, { exact: !0, path: "/", component: so }),
                r.a.createElement(yu, {
                  path: "/parking-actions",
                  component: so,
                }),
                r.a.createElement(yu, { path: "/index.html", component: so }),
                r.a.createElement(yu, {
                  exact: !0,
                  path: "/top-up",
                  component: $c,
                }),
                r.a.createElement(yu, {
                  exact: !0,
                  path: "/top-up/success",
                  component: so,
                }),
                r.a.createElement(yu, { path: "/history", component: Ci }),
                r.a.createElement(yu, { path: "/settings", component: To }),
                r.a.createElement(yu, {
                  path: "/other-products/:ctyId",
                  component: vc,
                }),
                r.a.createElement(yu, {
                  path: "/authorizations",
                  component: Cc,
                }),
                r.a.createElement(yu, {
                  path: "/authorizations-form/:type",
                  component: Jc,
                }),
                r.a.createElement(yu, {
                  path: "/parking-actions-form/:type",
                  component: yo,
                }),
                r.a.createElement(yu, {
                  path: "/select-date-time/:type/:dateTime",
                  component: Uo,
                }),
                r.a.createElement(yu, {
                  path: "/select-license-plate/:type",
                  component: ti,
                }),
                r.a.createElement(yu, {
                  path: "/select-license-plate-not-member/:type",
                  component: nu,
                }),
                r.a.createElement(yu, { path: "/favorites", component: Mc }),
                r.a.createElement(yu, {
                  path: "/product-information",
                  component: ns,
                }),
                r.a.createElement(yu, {
                  path: "/create-favorite",
                  component: ls,
                }),
                r.a.createElement(yu, {
                  path: "/change-favorite",
                  component: ds,
                }),
                r.a.createElement(yu, {
                  path: "/payment-result",
                  component: Ps,
                }),
                r.a.createElement(yu, { path: "/no-products", component: Ns }),
                r.a.createElement(yu, {
                  path: "/switch-license-plate",
                  component: Nl,
                }),
                r.a.createElement(yu, {
                  path: "/select-location/:type",
                  component: Pl,
                }),
                r.a.createElement(yu, { path: "/add-product", component: Ll }),
                r.a.createElement(yu, { path: "/all-actions", component: Gl }),
                r.a.createElement(yu, {
                  path: "/organizations",
                  component: Kl,
                }),
                r.a.createElement(yu, {
                  path: "/change-starting-product",
                  component: ql,
                }),
                r.a.createElement(yu, {
                  path: "/select-starting-product/:ctyId",
                  component: tu,
                }),
                r.a.createElement(yu, {
                  path: "/alternatives/:type",
                  component: no,
                }),
                r.a.createElement(yu, { path: "/activations", component: vu }),
                r.a.createElement(l.a, { path: "/login", component: nn }),
                r.a.createElement(l.a, {
                  path: "/request-new-password",
                  component: ps,
                }),
                r.a.createElement(l.a, {
                  path: "/reset_password.html",
                  component: hs,
                }),
                r.a.createElement(l.a, {
                  path: "/reset_password_captcha.html",
                  component: As,
                }),
                r.a.createElement(l.a, {
                  path: "/register-product",
                  component: Js,
                }),
                r.a.createElement(l.a, {
                  path: "/register-grant",
                  component: fl,
                }),
                r.a.createElement(l.a, {
                  path: "/create-account",
                  component: bu,
                }),
                r.a.createElement(l.a, {
                  path: "/authorized-email/:code",
                  component: Tu,
                }),
                r.a.createElement(l.a, { path: "*", component: vl }),
              ),
            ),
          );
        };
      i.a.render(r.a.createElement(Iu, null), document.getElementById("root"));
    },
    222: function (e, t, a) {
      e.exports = a.p + "static/media/logo.e076c75f.png";
    },
    499: function (e, t, a) {
      e.exports = a(1044);
    },
    915: function (e, t, a) {},
  },
  [[499, 1, 2]],
]);
