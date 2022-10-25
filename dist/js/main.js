/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axios": () => (/* reexport default from dynamic */ axios__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



let api = {}; //api.baseURL = "https://karaoke.marmadot.com/wp-admin/admin-ajax.php";

api.baseURL = "/wp-admin/admin-ajax.php";

const __default__ = {
  data: () => ({}),

  created() {
    this.bookingStore.startTimerCycle();
  },

  methods: {
    exampleMethod() {}

  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'App',

  setup(__props, {
    expose
  }) {
    expose();
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore)();
    const __returned__ = {
      api,
      bookingStore,
      useBookingStore: _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore,
      axios: (axios__WEBPACK_IMPORTED_MODULE_1___default()),
      RouterLink: vue_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink,
      RouterView: vue_router__WEBPACK_IMPORTED_MODULE_2__.RouterView
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['highlightColor', 'modelValue'],

  data() {
    return {
      currentDate: new Date(),
      // date at the moment of rendering
      selectedDate: this.modelValue,
      selectedMonth: {
        month: this.modelValue.getMonth(),
        year: this.modelValue.getFullYear()
      },
      calendarOpen: false,
      // only on mobile
      months_EN: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      weekDays_EN: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    };
  },

  created() {
    this.$nextTick(function () {
      // Gross jQuery clickaway implementation
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.calendar, .calendar-input-field').on('click', function (e) {
        e.stopPropagation();
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
        this.calendarOpen = false;
      }.bind(this));
    });
  },

  mounted() {},

  watch: {
    modelValue: function (val) {
      this.selectedDate = val;
    }
  },
  emits: ['update:modelValue'],
  methods: {
    getDaysInMonth(month) {
      var date = new Date(month.year, month.month, 1);
      var days = [];

      while (date.getMonth() === month.month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }

      return days;
    },

    getOffsetMonth(fullMonthOffset) {
      let targetMonth = {
        month: this.selectedMonth.month,
        year: this.selectedMonth.year
      };
      let monthOffset = fullMonthOffset % 12;
      let yearOffset = (fullMonthOffset - monthOffset) / 12;
      targetMonth.year += yearOffset;
      targetMonth.month += monthOffset;

      if (targetMonth.month < 0) {
        targetMonth.month = 12 + targetMonth.month;
        targetMonth.year--;
      } else if (targetMonth.month > 11) {
        targetMonth.month = -1 + (targetMonth.month - 11);
        targetMonth.year++;
      }

      return targetMonth;
    },

    sameDateDay(dateA, dateB) {
      return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
    },

    selectDate(date) {
      if (this.isPastDate(date)) {
        return;
      }

      this.selectedDate = date;
      this.$emit('update:modelValue', this.selectedDate);
    },

    isPastDate(date) {
      return date.setHours(0, 0, 0, 0) < this.currentDate.setHours(0, 0, 0, 0);
    }

  },
  computed: {
    currentMonthWeeks: function () {
      let prevMonthDays = this.getDaysInMonth(this.getOffsetMonth(-1));
      let monthDays = this.getDaysInMonth(this.selectedMonth);
      let nextMonthDays = this.getDaysInMonth(this.getOffsetMonth(1));
      let displayWeeks = [];

      for (var i = 0; i < monthDays.length;) {
        let week = []; //create week

        while (true) {
          //add days to week until sunday
          week.push(monthDays[i]);

          if (i == monthDays.length - 1) {
            //last day of the month
            i++;
            break;
          }

          i++;

          if (monthDays[i].getDay() == 0) {
            //change 0 to 1 if you want the week to start with monday
            break;
          }
        }

        displayWeeks.push(week);
      }

      if (displayWeeks[0].length < 7) {
        // first week check
        let emptyDays = 7 - displayWeeks[0].length;

        while (emptyDays > 0) {
          displayWeeks[0].unshift(prevMonthDays[prevMonthDays.length - 1]);
          emptyDays--;
          prevMonthDays.splice(prevMonthDays.length - 1, 1);
        }
      }

      if (displayWeeks[displayWeeks.length - 1].length < 7) {
        // last week check
        let emptyDays = 7 - displayWeeks[displayWeeks.length - 1].length;

        while (emptyDays > 0) {
          displayWeeks[displayWeeks.length - 1].push(nextMonthDays[0]);
          emptyDays--;
          nextMonthDays.splice(0, 1);
        }
      }

      return displayWeeks;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconClock.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconClock.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['size', 'color', 'weight'],

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconPeople.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconPeople.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['size', 'color', 'weight'],

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/InputField.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/InputField.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['modelValue', 'placeholder', 'invalid', 'invalidMessage'],

  data() {
    return {
      value: this.modelValue
    };
  },

  created() {},

  mounted() {},

  watch: {
    modelValue: function (val) {
      this.value = val;
    },
    value: function (val) {
      this.$emit("update:modelValue", this.value);
    }
  },
  emits: ['update:modelValue'],
  methods: {
    fieldClick: function () {
      this.$emit('fieldClick');
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Item.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Item.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['maxCount', 'description', 'placeholder', 'imageLink', 'innerID', 'highlightColor', 'orderRef'],

  data() {
    return {
      selectedCount: 1,
      descriptionInvalid: false,
      popup: false // popupText: '',
      // popupError: false,

    };
  },

  created() {},

  mounted() {},

  watch: {
    OrderDescription: function (val) {
      this.orderRef.count = val.length;
    } // OrderCount: function(val){
    // 	if(this.description){
    // 		this.orderRef.count = this.
    // 	}
    // }
    // modelValue:function(val){
    // 	this.selectedDate = val;
    // },

  },
  // emits: ['update:modelValue'],
  methods: {
    toggleActive: function () {
      if (!this.orderRef.active) {
        if (this.description) {
          if (this.orderRef.description.length > 0) {
            this.orderRef.active = true;
            this.popup = true;
            this.removePopupAsync();
          } else {
            this.descriptionInvalid = true;
          }
        } else {
          this.orderRef.active = true;
          this.popup = true;
          this.removePopupAsync();
        }
      } else {
        this.orderRef.active = false;
      }
    },
    // sendOrder: function(){
    // 	// let order = {
    // 	// 	count: this.selectedCount,
    // 	// };
    // 	// if(this.description){
    // 	// 	if(this.descriptionText.length == 0){
    // 	// 		this.descriptionInvalid = true;
    // 	// 		this.popupError = true;
    // 	// 		this.popupText = "Description is empty";
    // 	// 		this.popup = true;
    // 	// 		this.removePopupAsync();
    // 	// 		return;
    // 	// 	}
    // 	// 	order.description = this.descriptionText;
    // 	// 	this.descriptionText = '';
    // 	// }
    // 	// // this.$emit('order', order);
    // 	// this.selectedCount = 1;
    // 	// this.popupError = false;
    // 	// this.popupText = "Order added to cart";
    // 	// this.popup = true;
    // 	// this.removePopupAsync();
    // },
    removePopupAsync: function () {
      setTimeout(function () {
        this.popup = false;
      }.bind(this), 1500);
    }
  },
  computed: {
    OrderDescription: function () {
      return this.orderRef.description;
    },
    OrderCount: function () {
      return this.orderRef.count;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_IconPeople_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/IconPeople.vue */ "./src/js/components/IconPeople.vue");
const __default__ = {
  props: ['highlightColor', 'minCount', 'maxCount', 'modelValue'],

  data() {
    return {
      count: this.modelValue
    };
  },

  emits: ['update:modelValue'],
  watch: {
    modelValue: function (val) {
      this.count = val;
    },
    minCount: function (val) {
      this.changeCount(this.count); // min-max check
    },
    maxCount: function (val) {
      this.changeCount(this.count); // min-max check
    }
  },

  created() {
    this.changeCount(this.count);
  },

  mounted() {},

  methods: {
    changeCount(newCount) {
      this.count = Math.min(Math.max(newCount, this.minCount), this.maxCount);
      this.$emit("update:modelValue", this.count);
    }

  },
  computed: {}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'PeopleCountSelector',

  setup(__props, {
    expose
  }) {
    expose();
    const __returned__ = {
      IconPeople: _components_IconPeople_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCart.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCart.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
const __default__ = {
  props: ['nextEnabled', 'prevEnabled'],

  data() {
    return {};
  },

  created() {},

  mounted() {},

  watch: {// modelValue:function(val){
    // 	this.selectedDate = val;
    // },
  },
  emits: ['prev-clicked', 'next-clicked'],
  //you gae
  methods: {
    prevClick: function () {
      if (this.prevEnabled) {
        this.$emit('prev-clicked');
      }
    },
    nextClick: function () {
      if (this.nextEnabled) {
        this.$emit('next-clicked');
      }
    },
    changeOrderCount: function (orderID, change) {
      if (this.activeOrders[orderID].count + change <= 0) {
        this.removeOrder(orderID);
        return;
      }

      this.activeOrders[orderID].count += change;
    },
    removeOrder: function (index) {
      this.activeOrders[index].active = false;
    },
    pluralUnitCheck: function (count, singleUnit, pluralUnit) {
      if (count > 1) {
        return pluralUnit;
      }

      return singleUnit;
    }
  },
  computed: {
    activeOrders: function () {
      return this.bookingStore.activeOrders;
    },
    selectedRoom: function () {
      return this.bookingStore.roomData[this.bookingStore.selectedRoomID];
    },
    selectedSchedule: function () {
      return this.selectedRoom.scheduleData[this.bookingStore.dictFormatedSelectedDate];
    },
    selectedOccupancyData: function () {
      return this.selectedSchedule.occupancyData;
    },
    roomPrice: function () {
      let startIndex = this.bookingStore.selectedRange.startIndex;
      let endIndex = this.bookingStore.selectedRange.endIndex;
      let price = 0;

      for (var i = startIndex; i <= endIndex; i++) {
        price += this.selectedOccupancyData[i].cost * this.bookingStore.selectedPeopleCount;
      }

      return price;
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'ShoppingCart',

  setup(__props, {
    expose
  }) {
    expose();
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore)();
    const __returned__ = {
      bookingStore,
      useBookingStore: _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCartCheckout.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCartCheckout.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
const __default__ = {
  props: ['nextEnabled', 'prevEnabled'],

  data() {
    return {};
  },

  created() {},

  mounted() {},

  watch: {// modelValue:function(val){
    // 	this.selectedDate = val;
    // },
  },
  emits: ['prev-clicked', 'next-clicked'],
  //you gae
  methods: {
    prevClick: function () {
      if (this.prevEnabled) {
        this.$emit('prev-clicked');
      }
    },
    nextClick: function () {
      if (this.nextEnabled) {
        this.$emit('next-clicked');
      }
    },
    changeOrderCount: function (orderID, change) {
      if (this.activeOrders[orderID].count + change <= 0) {
        this.removeOrder(orderID);
        return;
      }

      this.activeOrders[orderID].count += change;
    },
    removeOrder: function (index) {
      this.activeOrders[index].active = false;
    },
    pluralUnitCheck: function (count, singleUnit, pluralUnit) {
      if (count > 1) {
        return pluralUnit;
      }

      return singleUnit;
    }
  },
  computed: {
    activeOrders: function () {
      return this.bookingStore.activeOrders;
    },
    selectedRoom: function () {
      return this.bookingStore.roomData[this.bookingStore.selectedRoomID];
    },
    selectedSchedule: function () {
      return this.selectedRoom.scheduleData[this.bookingStore.dictFormatedSelectedDate];
    },
    selectedOccupancyData: function () {
      return this.selectedSchedule.occupancyData;
    },
    roomPrice: function () {
      let startIndex = this.bookingStore.selectedRange.startIndex;
      let endIndex = this.bookingStore.selectedRange.endIndex;
      let price = 0;

      for (var i = startIndex; i <= endIndex; i++) {
        price += this.selectedOccupancyData[i].cost * this.bookingStore.selectedPeopleCount;
      }

      return price;
    },
    totalPrice: function () {
      let price = this.bookingStore.totalPrice;

      if (this.bookingStore.halfPayment) {
        price *= 0.5;
      }

      return price;
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'ShoppingCartCheckout',

  setup(__props, {
    expose
  }) {
    expose();
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore)();
    const __returned__ = {
      bookingStore,
      useBookingStore: _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_IconClock_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/IconClock.vue */ "./src/js/components/IconClock.vue");
let Selector = {
  props: ['highlightColor', 'occupancyData', 'openTime', 'modelValue'],

  data() {
    let startIndex = null;
    let endIndex = null;

    if (this.modelValue != null) {
      startIndex = this.modelValue.startIndex;
      endIndex = this.modelValue.endIndex;
    }

    return {
      segmentLength: 60,
      // minutes
      startIndex: startIndex,
      endIndex: endIndex
    };
  },

  watch: {
    modelValue: function (val) {
      if (val == null) {
        this.startIndex = null;
        this.endIndex = null;
      } else {
        this.startIndex = val.startIndex;
        this.endIndex = val.endIndex;
      }
    },
    occupancyData: function (val) {
      if (this.startIndex == null || this.endIndex == null) {
        return;
      }

      if (this.occupancyData.length <= this.endIndex) {
        this.startIndex = null;
        this.endIndex = null;
        return;
      }

      for (var i = this.startIndex; i <= this.endIndex; i++) {
        if (this.isBooked(i)) {
          this.startIndex = null;
          this.endIndex = null;
          return;
        }
      }
    }
  },

  created() {},

  mounted() {},

  emits: ['update:modelValue'],
  methods: {
    tConvert: function (totalMinutes) {
      // converts a time in total minutes from midnight to a regular24 hour time
      totalMinutes = totalMinutes % 1440; // ensures the time is limited to 1 day

      let minutes = totalMinutes % 60; // //console.log(minutes);

      let hours = Math.round((totalMinutes - minutes) / 60);
      let strMinutes = minutes;

      if (minutes < 10) {
        strMinutes = "0" + strMinutes;
      }

      let strHours = hours;

      if (hours < 10) {
        strHours = "0" + strHours;
      } // let resultString = strMinutes + ":" + strHours;


      return strHours + ":" + strMinutes;
    },
    segmentClick: function (index) {
      if (this.isBooked(index)) {
        return;
      }

      if (this.startIndex == null && this.endIndex == null) {
        this.setRange({
          start: index,
          end: index
        });
        return;
      }

      if (index == this.startIndex && index == this.endIndex) {
        this.setRange({
          start: null,
          end: null
        });
        return;
      }

      if (index == this.startIndex) {
        this.setStart(this.startIndex + 1);
        return;
      }

      if (index == this.endIndex) {
        this.setEnd(this.endIndex - 1);
        return;
      }

      if (this.isExpandable(index)) {
        if (index < this.startIndex) {
          this.setStart(this.startIndex - 1);
        } else if (this.endIndex < index) {
          this.setEnd(this.endIndex + 1);
        }
      }
    },
    setRange: function (range) {
      this.startIndex = range.start;
      this.endIndex = range.end;
      this.rangeChange();
    },
    setStart: function (newStart) {
      this.startIndex = newStart;
      this.rangeChange();
    },
    setEnd: function (newEnd) {
      this.endIndex = newEnd;
      this.rangeChange();
    },
    rangeChange: function () {
      if (this.startIndex == null && this.endIndex == null) {
        this.$emit("update:modelValue", null);
        return;
      }

      this.$emit("update:modelValue", {
        startIndex: this.startIndex,
        endIndex: this.endIndex,
        startTime: this.tConvert(this.timeSegments[this.startIndex].startTime),
        endTime: this.tConvert(this.timeSegments[this.endIndex].endTime),
        startTimeMin: this.timeSegments[this.startIndex].startTime,
        endTimeMin: this.timeSegments[this.endIndex].endTime
      });
    },
    isSelected: function (index) {
      if (this.startIndex == null || this.endIndex == null) {
        // null returns false on number comparisons
        return false;
      }

      return this.startIndex <= index && index <= this.endIndex;
    },
    isBorder: function (index) {
      return this.startIndex == index || index == this.endIndex;
    },
    isStart: function (index) {
      return this.startIndex == index && index != this.endIndex;
    },
    isEnd: function (index) {
      return this.endIndex == index && index != this.startIndex;
    },
    isExpandable: function (index) {
      if (this.startIndex == null && this.endIndex == null && !this.isBooked(index)) {
        return true;
      }

      return !this.isBooked(index) && (index == this.startIndex - 1 || index == this.endIndex + 1);
    },
    isAvailable: function (index) {
      if (this.isBooked(index)) {
        return false;
      }

      return this.startIndex == null && this.endIndex == null || this.isExpandable(index) || this.isBorder; //
      // let from = Math.min(index, this.startIndex);
      // let to = Math.max(index, this.startIndex);
      // for (var i = from; i <= to; i++) {
      // 	if(this.isBooked(i)){ // if any inbetweens are booked -> not available
      // 		return false;
      // 	}
      // }
      // return true; // if no inbetweens are booked -> available
      //
    },
    isBooked: function (index) {
      let occupancy = this.occupancyData[index];
      return occupancy.state != "available";
    }
  },
  computed: {
    startTimeFormatted: function () {
      if (this.startIndex == null) {
        return "--:--";
      }

      return this.tConvert(this.timeSegments[this.startIndex].startTime);
    },
    endTimeFormatted: function () {
      if (this.endIndex == null) {
        return "--:--";
      }

      return this.tConvert(this.timeSegments[this.endIndex].endTime);
    },
    hourLength: function () {
      if (this.startIndex == null) {
        return 0;
      }

      return this.endIndex - this.startIndex + 1;
    },
    timeSegments: function () {
      let segments = [];

      for (var i = 0; i < this.occupancyData.length; i++) {
        let startTime = this.openTime + i * this.segmentLength;
        segments.push({
          startTime: startTime,
          endTime: startTime + this.segmentLength - 5
        });
      }

      return segments;
    }
  }
};
const __default__ = Selector;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'TimeRangeSelector',

  setup(__props, {
    expose
  }) {
    expose();
    const __returned__ = {
      Selector,
      IconClock: _components_IconClock_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingRecovery.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingRecovery.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var _stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/ErrorModalStore.js */ "./src/js/stores/ErrorModalStore.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.vue */ "./src/js/App.vue");



const __default__ = {
  data() {
    return {
      selectedDate: null,
      selectedRange: null,
      itemOrders: null,
      packOrders: null
    };
  },

  watch: {},

  mounted() {
    this.bookingStore.$reset();
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    let token = params.get("token");

    if (!token) {
      this.recoveryFailed();
      return;
    }

    let data = new FormData();
    data.append('action', 'recoverReservationData');
    data.append('token', token);
    _App_vue__WEBPACK_IMPORTED_MODULE_2__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_2__.api.baseURL, data).then(response => {
      //console.log(response);
      this.recoverRoomData();
      this.recoverItemData();
      this.bookingStore.reservationToken = token;
      this.bookingStore.selectedRoomID = response.data.roomID;
      this.bookingStore.selectedPeopleCount = response.data.peopleCount;
      this.bookingStore.orderDescription = response.data.orderDescription;
      this.bookingStore.reservationTTL = response.data.ttl;
      let recoveryData = JSON.parse(response.data.recoveryData.replace(/\\/g, ''));
      this.selectedDate = new Date(recoveryData.selectedDate);
      this.selectedRange = recoveryData.selectedRange;
      this.itemOrders = recoveryData.itemOrders;
      this.packOrders = recoveryData.packOrders;

      for (var i = 0; i < recoveryData.contactFields.length; i++) {
        this.bookingStore.contactFields[i].value = recoveryData.contactFields[i];
      }
    }).catch(err => {
      //console.log(err);
      this.recoveryFailed();
    });
  },

  methods: {
    recoverRoomData: function () {
      let data = new FormData();
      data.append('action', 'getRoomData');
      _App_vue__WEBPACK_IMPORTED_MODULE_2__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_2__.api.baseURL, data).then(response => {
        let roomIDs = Object.keys(response.data);

        for (let roomID of roomIDs) {
          let room = response.data[roomID];
          room.scheduleData = {
            occupancyData: {}
          };
          this.bookingStore.roomData[roomID] = room;
        }

        this.checkDataValidity();
      }).catch(err => {
        //console.log(err);
        this.recoveryFailed();
      });
    },
    recoverItemData: function () {
      let itemData = new FormData();
      itemData.append('action', 'getItemsList');
      _App_vue__WEBPACK_IMPORTED_MODULE_2__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_2__.api.baseURL, itemData).then(response => {
        this.bookingStore.itemData = response.data.itemData;
        this.bookingStore.packData = response.data.packageData;
        this.checkDataValidity();
      }).catch(err => {
        this.recoveryFailed();
      });
    },
    checkDataValidity: function () {
      let roomData = this.bookingStore.roomData;
      let itemData = this.bookingStore.itemData;
      let packData = this.bookingStore.packData;

      if (Object.keys(roomData).length != 0 && itemData != null && packData.length > 0) {
        this.bookingStore.selectedDate = this.selectedDate;
        this.bookingStore.selectedRange = this.selectedRange;
        this.bookingStore.itemOrders = this.itemOrders;
        this.bookingStore.packOrders = this.packOrders;
        this.errorModalStore.OpenModal("Payment failed.", "Please try again.");
        this.$router.replace({
          name: 'booking-step-3'
        });
      }
    },
    recoveryFailed: function () {
      this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
      this.$router.replace({
        name: 'booking-step-1'
      });
    }
  },
  computed: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'BookingRecovery',

  setup(__props, {
    expose
  }) {
    expose();
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore)();
    const errorModalStore = (0,_stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_1__.useErrorModalStore)();
    const __returned__ = {
      bookingStore,
      errorModalStore,
      useBookingStore: _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore,
      useErrorModalStore: _stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_1__.useErrorModalStore,
      axios: _App_vue__WEBPACK_IMPORTED_MODULE_2__.axios,
      api: _App_vue__WEBPACK_IMPORTED_MODULE_2__.api
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep1View.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep1View.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.vue */ "./src/js/App.vue");
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var _components_Calendar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Calendar.vue */ "./src/js/components/Calendar.vue");
/* harmony import */ var _components_TimeRangeSelector_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TimeRangeSelector.vue */ "./src/js/components/TimeRangeSelector.vue");
/* harmony import */ var _components_PeopleCountSelector_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PeopleCountSelector.vue */ "./src/js/components/PeopleCountSelector.vue");



const __default__ = {
  data() {
    let pendingDateRequests = {};
    let roomNames = Object.keys(this.bookingStore.roomData);

    for (let roomName of roomNames) {
      pendingDateRequests[roomName] = {};
    }

    return {
      testCount: 15,
      pendingDateRequests: pendingDateRequests,
      nextRoute: {
        name: "booking-step-2"
      },
      countAmogus: 0,
      dayRefreshActive: false
    };
  },

  watch: {
    selectedDate: function () {
      this.requestSelectedSchedule();
    },
    selectedSchedule: function () {
      if (this.bookingStore.selectedRange != null && this.bookingDataAvailable) {
        if (this.bookingStore.selectedRange.endIndex >= this.selectedSchedule.occupancyData.length) {
          this.bookingStore.selectedRange = null;
        }
      }
    }
  },

  created() {
    this.bookingStore.openStep = 1;
  },

  mounted() {
    if (this.bookingStore.scrollToRoomSelection) {
      this.scrollToAsync('.booking__rooms');
      this.bookingStore.scrollToRoomSelection = false;
    }

    this.requestSelectedSchedule();
    this.dayRefreshCycle();
  },

  methods: {
    scrollToAsync: async function (targetSelector) {
      while (!this.bookingDataAvailable) {
        await delay(100);
      }

      this.$nextTick(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content-wrapper').stop().animate({
          scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(targetSelector).offset().top + jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content-wrapper').scrollTop() - 60
        }, 500, 'swing');
      });
    },
    dayRefreshCycle: async function () {
      this.dayRefreshActive = true;
      let timer = 0;

      while (this.dayRefreshActive) {
        await delay(100);
        timer += 100;

        if (timer > 10000) {
          if (!(this.bookingStore.dictFormatedSelectedDate in this.pendingDateRequests[this.bookingStore.selectedRoomID])) {
            this.loadScheduleForDates(this.bookingStore.selectedDate, this.bookingStore.selectedDate, this.bookingStore.selectedDate, this.bookingStore.selectedRoomID);
          }

          timer = 0;
        }
      } ////console.log('day refresh exit');

    },
    loadNearbySchedule: function (targetDate, targetRoom) {
      let startDate = new Date(targetDate);
      startDate.setDate(startDate.getDate() - 5);
      let endDate = new Date(targetDate);
      endDate.setDate(endDate.getDate() + 5);
      this.loadScheduleForDates(startDate, endDate, targetDate, targetRoom);
    },
    selectRoom: function (roomID) {
      this.bookingStore.selectedRoomID = roomID;
      this.requestSelectedSchedule();
      this.scrollToAsync('.booking__calendar-column');
    },
    loadScheduleForDates: async function (startDate, endDate, targetDate, targetRoom) {
      this.pendingDateRequests[targetRoom][this.bookingStore.formatDictDate(targetDate)] = "pending";
      let data = new FormData();
      data.append('action', 'getScheduleData');
      data.append('room-id', targetRoom);
      data.append('start-date', this.bookingStore.formatDictDate(startDate));
      data.append('end-date', this.bookingStore.formatDictDate(endDate));
      let token = '';

      if (this.bookingStore.reservationToken != null) {
        token = this.bookingStore.reservationToken;
      }

      data.append('token', token);
      data.append('clientTimeZone', new Date().getTimezoneOffset());
      _App_vue__WEBPACK_IMPORTED_MODULE_1__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_1__.api.baseURL, data).then(response => {
        ////console.log(response.data);
        delete this.pendingDateRequests[targetRoom][this.bookingStore.formatDictDate(targetDate)];

        for (var date in response.data) {
          var time = response.data[date].work_time.open.split(':');
          var minutes = +time[0] * 60 + +time[1];
          let scheduleData = {
            occupancyData: response.data[date].occupancyData,
            openTime: minutes
          };

          for (let hourID in scheduleData.occupancyData) {
            scheduleData.occupancyData[hourID].state = scheduleData.occupancyData[hourID].availability;
            delete scheduleData.occupancyData[hourID].availability;
          }

          if (this.bookingStore.selectedRange != null) {
            if (this.bookingStore.selectedRange.endIndex >= scheduleData.occupancyData.length) {
              this.bookingStore.selectedRange = null;
            }
          }

          this.bookingStore.roomData[targetRoom].scheduleData[date] = scheduleData;
        }
      });
    },
    requestSelectedSchedule: function () {
      if (this.bookingStore.dictFormatedSelectedDate in this.pendingDateRequests[this.bookingStore.selectedRoomID]) {
        return;
      }

      this.loadNearbySchedule(this.bookingStore.selectedDate, this.bookingStore.selectedRoomID);
    },
    nextView: function () {
      if (this.isStepComplete) {
        this.$router.push(this.nextRoute);
      }
    },
    getTimeSegmentColor: function (segmentID) {
      if (this.selectedOccupancyData[segmentID].state == 'occupied') {
        return '#979797';
      } else if (this.bookingStore.selectedRange != null) {
        let range = this.bookingStore.selectedRange;

        if (range.startIndex <= segmentID && range.endIndex >= segmentID) {
          return this.selectedRoomColor;
        }
      }

      return '#FFF';
    }
  },
  computed: {
    selectedRoomColor: function () {
      return this.selectedRoom.primaryColor;
    },
    selectedDate: function () {
      return this.bookingStore.selectedDate;
    },
    isStepComplete: function () {
      return this.bookingStore.stepCompletion >= this.$router.resolve(this.nextRoute).meta.minCompletion;
    },
    selectedRoom: function () {
      return this.bookingStore.roomData[this.bookingStore.selectedRoomID];
    },
    scheduleData: function () {
      return this.selectedRoom.scheduleData;
    },
    selectedSchedule: function () {
      return this.selectedRoom.scheduleData[this.bookingStore.dictFormatedSelectedDate];
    },
    selectedOccupancyData: function () {
      return this.selectedSchedule.occupancyData;
    },
    bookingDataAvailable: function () {
      return this.bookingStore.dictFormatedSelectedDate in this.scheduleData;
    }
  },

  beforeUnmount() {
    this.dayRefreshActive = false;
  }

};

function setCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const delay = ms => new Promise(res => setTimeout(res, ms));




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'BookingStep1View',

  setup(__props, {
    expose
  }) {
    expose();
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_2__.useBookingStore)();
    const __returned__ = {
      setCookie,
      delay,
      bookingStore,
      $: (jquery__WEBPACK_IMPORTED_MODULE_0___default()),
      axios: _App_vue__WEBPACK_IMPORTED_MODULE_1__.axios,
      api: _App_vue__WEBPACK_IMPORTED_MODULE_1__.api,
      useBookingStore: _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_2__.useBookingStore,
      Calendar: _components_Calendar_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      TimeRangeSelector: _components_TimeRangeSelector_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      PeopleCountSelector: _components_PeopleCountSelector_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep2View.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep2View.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.vue */ "./src/js/App.vue");
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var _stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/ErrorModalStore.js */ "./src/js/stores/ErrorModalStore.js");
/* harmony import */ var _components_Item_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Item.vue */ "./src/js/components/Item.vue");
/* harmony import */ var _components_ShoppingCart_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ShoppingCart.vue */ "./src/js/components/ShoppingCart.vue");



const __default__ = {
  data() {
    return {
      popupList: [],
      nextRoute: {
        name: "booking-step-3"
      },
      prevRoute: {
        name: 'booking-step-1'
      },
      openPackID: -1
    };
  },

  watch: {},

  created() {
    this.bookingStore.openStep = 2; //ajax request for data

    let reservationData = new FormData();
    reservationData.append('action', 'createTemporaryReserve');
    reservationData.append('roomID', this.bookingStore.selectedRoomID);
    reservationData.append('selectedDate', this.bookingStore.dictFormatedSelectedDate);
    reservationData.append('startTimeMin', this.bookingStore.selectedRange.startTimeMin);
    reservationData.append('endTimeMin', this.bookingStore.selectedRange.endTimeMin);
    reservationData.append('peopleCount', this.bookingStore.selectedPeopleCount);
    let token = '';

    if (this.bookingStore.reservationToken != null) {
      token = this.bookingStore.reservationToken;
    }

    reservationData.append('token', token);
    _App_vue__WEBPACK_IMPORTED_MODULE_0__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_0__.api.baseURL, reservationData).then(response => {
      ////console.log(response.data);
      if (response.data.status == 200) {
        this.bookingStore.reservationToken = response.data.token;
        this.bookingStore.reservationTTL = response.data.ttl;
      } else {
        ////console.log("Reservation returned status "+ response.data.status);
        this.errorModalStore.OpenModal("Something went wrong.", "Please try again. amogus");
        this.$router.push(this.prevRoute);
      }
    }).catch(err => {
      ////console.log(err);
      this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
      this.$router.push(this.prevRoute);
    });

    if (this.bookingStore.itemData == null && this.bookingStore.itemOrders == null) {
      let itemData = new FormData();
      itemData.append('action', 'getItemsList');
      _App_vue__WEBPACK_IMPORTED_MODULE_0__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_0__.api.baseURL, itemData).then(response => {
        ////console.log(response.data);
        this.bookingStore.itemData = response.data.itemData;
        this.bookingStore.itemOrders = [];

        for (var i = 0; i < this.bookingStore.itemData.length; i++) {
          for (var j = 0; j < this.bookingStore.itemData[i].items.length; j++) {
            let item = this.bookingStore.itemData[i].items[j];
            let itemObject = {
              title: item.title,
              innerID: item.innerID,
              price: item.price,
              maxCount: item.maxCount,
              count: 1,
              active: false
            };

            if (item.description) {
              itemObject.description = '';
            }

            this.bookingStore.itemOrders.push(itemObject);
          }
        }

        this.bookingStore.packData = response.data.packageData;

        for (let pack of this.bookingStore.packData) {
          pack.forceClose = false;
          this.popupList.push(false);
        }
      }).catch(err => {
        ////console.log(err);
        this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
        this.$router.push(this.prevRoute);
      });
    }
  },

  mounted() {},

  methods: {
    removePopupAsync: function (id) {
      setTimeout(function (id) {
        this.popupList[id] = false;
      }.bind(this), 1500, id);
    },
    togglePack: function (id) {
      this.bookingStore.packData[id].forceClose = !this.bookingStore.packData[id].forceClose;

      if (this.openPackID == id) {
        this.openPackID = -1;
      } else {
        this.openPackID = id;
      }
    },
    addPack: function (packID) {
      let pack = this.bookingStore.packData[packID];
      this.bookingStore.packOrders.push({
        title: pack.title,
        list: pack.list,
        price: pack.price,
        description: '',
        innerID: pack.innerID
      });
      this.popupList[packID] = true;
      this.removePopupAsync(packID);
    },
    changeOrder: function (categoryID, itemID, itemOrder) {
      let item = this.bookingStore.itemData[categoryID].items[itemID];
      let order = {
        title: item.title,
        innerID: item.innerID,
        price: item.price,
        unit: item.unit,
        count: itemOrder.count
      };

      if (itemOrder.description) {
        order.description = itemOrder.description;
      }

      if (!itemOrder.description) {
        //find item with same innerID
        for (var i = 0; i < this.bookingStore.itemOrders.length; i++) {
          if (this.bookingStore.itemOrders[i].innerID == order.innerID) {
            this.bookingStore.itemOrders[i].count += order.count;
            return;
          }
        }
      }

      this.bookingStore.itemOrders.push(order);
    },
    nextView: function () {
      if (this.isStepComplete) {
        this.$router.push(this.nextRoute);
      }
    },
    prevView: function () {
      this.$router.push(this.prevRoute);
    },
    itemOrderID: function (categoryID, itemID) {
      let id = itemID;

      for (var i = 0; i < categoryID; i++) {
        id += this.bookingStore.itemData[i].items.length;
      }

      return id;
    }
  },
  computed: {
    isStepComplete: function () {
      return this.bookingStore.stepCompletion >= this.$router.resolve(this.nextRoute).meta.minCompletion;
    },
    stepLoaded: function () {
      return this.bookingStore.itemData != null && this.bookingStore.itemOrders != null && this.bookingStore.reservationToken != null;
    },
    selectedRoomColor: function () {
      return this.selectedRoom.primaryColor;
    },
    selectedRoom: function () {
      return this.bookingStore.roomData[this.bookingStore.selectedRoomID];
    }
  }
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'BookingStep2View',

  setup(__props, {
    expose
  }) {
    expose();
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_1__.useBookingStore)();
    const errorModalStore = (0,_stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_2__.useErrorModalStore)();
    const __returned__ = {
      bookingStore,
      errorModalStore,
      axios: _App_vue__WEBPACK_IMPORTED_MODULE_0__.axios,
      api: _App_vue__WEBPACK_IMPORTED_MODULE_0__.api,
      useBookingStore: _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_1__.useBookingStore,
      useErrorModalStore: _stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_2__.useErrorModalStore,
      Item: _components_Item_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      ShoppingCart: _components_ShoppingCart_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep3View.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep3View.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.vue */ "./src/js/App.vue");
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var _stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/ErrorModalStore.js */ "./src/js/stores/ErrorModalStore.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ShoppingCartCheckout_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ShoppingCartCheckout.vue */ "./src/js/components/ShoppingCartCheckout.vue");
/* harmony import */ var _components_InputField_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InputField.vue */ "./src/js/components/InputField.vue");
/* harmony import */ var _components_ShoppingCart_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ShoppingCart.vue */ "./src/js/components/ShoppingCart.vue");




const __default__ = {
  data() {
    return {
      prevRoute: {
        name: 'booking-step-2'
      },
      TOS: false,
      paymentModalOpen: false,
      recoveryData: '',
      bookingData: '',
      selectedPaymentMethod: ''
    };
  },

  watch: {},

  created() {
    this.bookingStore.openStep = 3;
  },

  mounted() {
    let data = new FormData();
    data.append('action', 'isStaff');
    _App_vue__WEBPACK_IMPORTED_MODULE_0__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_0__.api.baseURL, data).then(response => {
      if (response.data.status == 200) {
        this.bookingStore.isStaff = response.data.isStaff;
      }
    }).catch(function (error) {
      //console.log(error)
      this.$router.push(this.prevRoute);
      this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
    }.bind(this));
    this.$nextTick(function () {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.page-content-wrapper').scrollTop(0);
    });
  },

  methods: {
    validateFields: function () {
      let valid = true;

      for (var i = 0; i < this.bookingStore.contactFields.length; i++) {
        let invalid = !this.bookingStore.contactFields[i].regex.test(this.bookingStore.contactFields[i].value);

        if (this.bookingStore.contactFields[i].obligatory) {
          valid = valid && !invalid;
          this.bookingStore.contactFields[i].invalid = invalid;
        }
      }

      return valid;
    },
    attemptSubmit: function () {
      if (this.validateFields()) {
        let data = new FormData();
        data.append('action', 'getPaymentMethods');
        data.append('price', this.bookingStore.totalPrice);
        _App_vue__WEBPACK_IMPORTED_MODULE_0__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_0__.api.baseURL, data).then(response => {
          let paymentMethods = response.data.paymentMethods;
          this.bookingStore.paymentMethods = [];

          for (var i = 0; i < paymentMethods.length; i++) {
            this.bookingStore.paymentMethods.push({
              id: paymentMethods[i].PaymentMethodId,
              preview: paymentMethods[i].ImageUrl,
              shadowColor: '#AAA'
            });
          }
        }).catch(function (error) {
          //console.log(error)
          this.paymentModalOpen = false;
          this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
        }.bind(this));
        this.paymentModalOpen = true;
      }
    },
    prevView: function () {
      this.$router.push(this.prevRoute);
    },
    manualSubmit: function () {
      if (this.validateFields()) {
        this.submitBooking();
      }
    },
    submitBooking: function () {
      let contactFields = [];
      let contactFieldsOrdered = [];

      for (var i = 0; i < this.bookingStore.contactFields.length; i++) {
        contactFields.push({
          title: this.bookingStore.contactFields[i].title,
          value: this.bookingStore.contactFields[i].value
        });
        contactFieldsOrdered.push(this.bookingStore.contactFields[i].value);
      }

      this.bookingData = JSON.stringify({
        itemOrders: this.bookingStore.activeOrders,
        packageOrders: this.bookingStore.packOrders,
        contactFields: contactFields,
        totalPrice: this.bookingStore.totalPrice,
        description: this.bookingStore.orderDescription
      });
      this.recoveryData = JSON.stringify({
        selectedDate: this.bookingStore.selectedDate,
        selectedRange: this.bookingStore.selectedRange,
        itemOrders: this.bookingStore.itemOrders,
        packOrders: this.bookingStore.packOrders,
        contactFields: contactFieldsOrdered
      });
      this.$nextTick(function () {
        document.forms["payment-submit-form"].submit();
      });
    }
  },
  computed: {
    selectedPaymentId: function () {
      if (!this.bookingStore.paymentMethods) {
        return null;
      }

      if (this.bookingStore.paymentMethods.length - 1 < this.bookingStore.selectedPaymentMethod) {
        return null;
      }

      return this.bookingStore.paymentMethods[this.bookingStore.selectedPaymentMethod].id;
    },
    isStepComplete: function () {
      return this.TOS;
    },
    selectedRoomColor: function () {
      return this.selectedRoom.primaryColor;
    },
    selectedRoom: function () {
      return this.bookingStore.roomData[this.bookingStore.selectedRoomID];
    }
  }
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'BookingStep3View',

  setup(__props, {
    expose
  }) {
    expose();
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_1__.useBookingStore)();
    const errorModalStore = (0,_stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_2__.useErrorModalStore)();
    const __returned__ = {
      bookingStore,
      errorModalStore,
      axios: _App_vue__WEBPACK_IMPORTED_MODULE_0__.axios,
      api: _App_vue__WEBPACK_IMPORTED_MODULE_0__.api,
      useBookingStore: _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_1__.useBookingStore,
      useErrorModalStore: _stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_2__.useErrorModalStore,
      $: (jquery__WEBPACK_IMPORTED_MODULE_3___default()),
      ShoppingCartCheckout: _components_ShoppingCartCheckout_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      InputField: _components_InputField_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
      ShoppingCart: _components_ShoppingCart_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var _stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/ErrorModalStore.js */ "./src/js/stores/ErrorModalStore.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.vue */ "./src/js/App.vue");
/* harmony import */ var _components_IconClock_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/IconClock.vue */ "./src/js/components/IconClock.vue");



const __default__ = {
  data() {
    return {
      timerModalActive: false
    };
  },

  watch: {
    timer: function (val) {
      if (val == 60) {
        this.timerModalActive = true;
      }

      if (val == null) {
        this.timerModalActive = false; //console.log(this.errorModalStore);

        this.errorModalStore.OpenModal("It seems your reservation time has expired.", 'You can attempt to reserve the same time again.');
        this.$router.replace({
          name: 'booking-step-1'
        });
      }
    }
  },

  mounted() {
    let data = new FormData();
    data.append('action', 'getRoomData');
    _App_vue__WEBPACK_IMPORTED_MODULE_2__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_2__.api.baseURL, data).then(response => {
      //console.log(response);
      let roomIDs = Object.keys(response.data);

      for (let roomID of roomIDs) {
        let room = response.data[roomID];
        room.scheduleData = {
          occupancyData: {}
        };
        this.bookingStore.roomData[roomID] = room;
      }

      let uri = window.location.search.substring(1);
      let params = new URLSearchParams(uri);
      let selectRoom = params.get("selectRoom");

      if (selectRoom in this.bookingStore.roomData) {
        this.bookingStore.selectedRoomID = selectRoom;
      } else {
        for (let roomID of roomIDs) {
          //console.log(roomID)
          if (this.bookingStore.roomData[roomID].default) {
            this.bookingStore.selectedRoomID = roomID;
            break;
          }
        }

        this.bookingStore.scrollToRoomSelection = true;
      }

      this.$router.replace({
        name: 'booking'
      });
    }); // let data = new FormData();
    // data.append('username', this.log);
    // axios
    // 	.post(api.baseURL + "/api-token-auth/",data)
    // 	.then(function(response){
    // 		this.bookingStore.roomData = response.roomData;
    // 		if(this.roomID in this.bookingStore.roomData){
    // 			this.bookingStore.selectedRoomID = this.roomID;
    // 		}
    // 		else{
    // 			//if not room is selected select the default room
    // 			this.bookingStore.selectedRoomID = Object.keys(this.bookingStore.roomData)[0];
    // 		}
    // }.bind({room:this.$route.params.roomID, bookingStore: this.bookingStore}));
    // let response = APIRoomData;
  },

  methods: {
    selectedRoomColor: function () {
      if (this.bookingStore.selectedRoomID != '') {
        return this.bookingStore.roomData[this.bookingStore.selectedRoomID].primaryColor;
      }

      return '#979797';
    },
    openTimerModal: function () {
      if (this.timer <= 60) {
        this.timerModalActive = true;
      }
    },
    extendReservationTime: function () {
      let data = new FormData();
      data.append('action', 'extendTTL');
      data.append('token', this.bookingStore.reservationToken);
      _App_vue__WEBPACK_IMPORTED_MODULE_2__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_2__.api.baseURL, data).then(response => {
        //console.log(response.data);
        if (response.data.status == 200) {
          this.bookingStore.reservationTTL = response.data.ttl;
        } else {
          this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
        }
      }).catch(err => {
        this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
      });
      this.timerModalActive = false;
    }
  },
  computed: {
    bookingDataAvailable: function () {
      return this.bookingStore.selectedRoomID in this.bookingStore.roomData;
    },
    bgTextColor: function () {
      return this.bookingStore.roomData[this.bookingStore.selectedRoomID].highlightedTextColor;
    },
    timer: function () {
      return this.bookingStore.reservationTTL;
    },
    formattedTimer: function () {
      let time = this.timer;
      let minutes = Math.floor(time / 60);

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      let seconds = time % 60;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      return minutes + ":" + seconds;
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'BookingView',

  setup(__props, {
    expose
  }) {
    expose();
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore)();
    const errorModalStore = (0,_stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_1__.useErrorModalStore)();
    const __returned__ = {
      bookingStore,
      errorModalStore,
      useBookingStore: _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore,
      useErrorModalStore: _stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_1__.useErrorModalStore,
      axios: _App_vue__WEBPACK_IMPORTED_MODULE_2__.axios,
      api: _App_vue__WEBPACK_IMPORTED_MODULE_2__.api,
      IconClock: _components_IconClock_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=template&id=3ea74058&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=template&id=3ea74058&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3ea74058"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "app-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RouterView"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=template&id=c2dc59ec&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=template&id=c2dc59ec&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-c2dc59ec"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "noise-overlay"
}, null, -1
/* HOISTED */
));

const _hoisted_2 = {
  class: "p--x-5"
};
const _hoisted_3 = {
  class: ""
};
const _hoisted_4 = {
  class: ""
};
const _hoisted_5 = {
  class: ""
};

const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "noise-overlay"
}, null, -1
/* HOISTED */
));

const _hoisted_7 = {
  class: "calendar__month-selection"
};
const _hoisted_8 = {
  class: "calendar__month"
};
const _hoisted_9 = {
  class: "calendar__arrows"
};

const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"calendar__day-labels\" data-v-c2dc59ec><div class=\"calendar__day-label\" data-v-c2dc59ec> Sun </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Mon </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Tue </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Wed </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Thu </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Fri </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Sat </div></div>", 1);

const _hoisted_11 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "calendar-wrapper",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--highlightColor:' + $props.highlightColor)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "calendar-input-field noise-overlay__wrapper",
    onClick: _cache[0] || (_cache[0] = $event => $data.calendarOpen = true)
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <ph-calendar :size=\"26\" color=\"#ffffff\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.weekDays_EN[$data.selectedDate.getDay()]), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selectedDate.getDate()) + "/", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selectedDate.getMonth() + 1) + "/", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selectedDate.getFullYear()), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["calendar noise-overlay__wrapper", {
      'open': $data.calendarOpen
    }])
  }, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.months_EN[$data.selectedMonth.month]) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selectedMonth.year), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "calendar__arrow calendar__arrow--left",
    onClick: _cache[1] || (_cache[1] = $event => $data.selectedMonth = $options.getOffsetMonth(-1))
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "calendar__arrow calendar__arrow--right",
    onClick: _cache[2] || (_cache[2] = $event => $data.selectedMonth = $options.getOffsetMonth(1))
  })])]), _hoisted_10, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.currentMonthWeeks, week => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: week,
      class: "calendar__days-row"
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(week, day => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: day,
        onClick: $event => $options.selectDate(day),
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["calendar__day", {
          'disabled': $options.isPastDate(day),
          'darkened': day.getMonth() != $data.selectedMonth.month,
          'selected': $options.sameDateDay(day, $data.selectedDate)
        }])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(day.getDate()), 11
      /* TEXT, CLASS, PROPS */
      , _hoisted_11);
    }), 128
    /* KEYED_FRAGMENT */
    ))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  )], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconClock.vue?vue&type=template&id=55254579":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconClock.vue?vue&type=template&id=55254579 ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["width", "height", "fill"];

const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "128",
  cy: "128",
  r: "96",
  fill: "none",
  stroke: "#fff",
  "stroke-miterlimit": "10",
  "stroke-width": "16"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "128 72 128 128 184 128",
  fill: "none",
  stroke: "#fff",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "16"
})], -1
/* HOISTED */
);

const _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    width: $props.size,
    height: $props.size,
    fill: $props.color
  }, _hoisted_3, 8
  /* PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconPeople.vue?vue&type=template&id=5dab5234":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconPeople.vue?vue&type=template&id=5dab5234 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["width", "height", "fill"];

const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "128",
  cy: "96",
  r: "64",
  fill: "none",
  stroke: "#fff",
  "stroke-miterlimit": "10",
  "stroke-width": "16"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M31,216a112,112,0,0,1,194,0",
  fill: "none",
  stroke: "#fff",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "16"
})], -1
/* HOISTED */
);

const _hoisted_3 = [_hoisted_2];
const _hoisted_4 = ["width", "height", "fill"];

const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"
})], -1
/* HOISTED */
);

const _hoisted_6 = [_hoisted_5];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    width: $props.size,
    height: $props.size,
    fill: $props.color
  }, _hoisted_3, 8
  /* PROPS */
  , _hoisted_1)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.weight == 'regular']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    width: $props.size,
    height: $props.size,
    fill: $props.color
  }, _hoisted_6, 8
  /* PROPS */
  , _hoisted_4)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.weight == 'fill']])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/InputField.vue?vue&type=template&id=680fe91c&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/InputField.vue?vue&type=template&id=680fe91c&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-680fe91c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = ["placeholder"];
const _hoisted_2 = {
  class: "invalid-message"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["field-wrapper", {
      'invalid': $props.invalid
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.value = $event),
    placeholder: $props.placeholder,
    onClick: _cache[1] || (_cache[1] = $event => $options.fieldClick())
  }, null, 8
  /* PROPS */
  , _hoisted_1), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.value]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.invalidMessage), 1
  /* TEXT */
  )], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Item.vue?vue&type=template&id=f09ecb42&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Item.vue?vue&type=template&id=f09ecb42&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f09ecb42"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "item__image"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  class: "item__content"
};

const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "item__popup"
}, " Order added to cart! ", -1
/* HOISTED */
));

const _hoisted_5 = [_hoisted_4];
const _hoisted_6 = {
  class: "item__title"
};

const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("title");

const _hoisted_8 = {
  class: "item__price"
};

const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("price/unit");

const _hoisted_10 = {
  key: 0,
  class: "item__count-order-wrapper"
};
const _hoisted_11 = ["value"];
const _hoisted_12 = {
  class: "item__count-selector-arrow"
};
const _hoisted_13 = ["src"];
const _hoisted_14 = ["placeholder"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["item", {
      'active': $props.orderRef.active
    }]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--highlightColor:' + $props.highlightColor),
    onClick: _cache[4] || (_cache[4] = $event => $options.toggleActive())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.imageLink,
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["item__popup-wrapper", {
      'open': $data.popup
    }])
  }, _hoisted_5, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, () => [_hoisted_7], true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "price", {}, () => [_hoisted_9], true)]), !$props.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "item__count-selector",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $props.orderRef.count = $event)
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.maxCount, i => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: i,
      key: i
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i), 9
    /* TEXT, PROPS */
    , _hoisted_11);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $props.orderRef.count]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! assetDir/images/svg/arrow-gray.svg */ "./src/assets/images/svg/arrow-gray.svg"),
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_13)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["item__description", {
      'invalid': $data.descriptionInvalid
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    class: "",
    type: "text",
    placeholder: $props.placeholder,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $props.orderRef.description = $event),
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $data.descriptionInvalid = false, ["stop"]))
  }, null, 8
  /* PROPS */
  , _hoisted_14), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.orderRef.description]])], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 6
  /* CLASS, STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=template&id=b35233ba&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=template&id=b35233ba&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-b35233ba"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "people-selector"
};
const _hoisted_2 = {
  class: "people-selector__text"
};

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "people-selector__title"
}, " People ", -1
/* HOISTED */
));

const _hoisted_4 = {
  class: "people-selector__description"
};
const _hoisted_5 = {
  class: "people-selector__selector"
};
const _hoisted_6 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, " Min " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.minCount) + " - Max " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.maxCount) + " people ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.maxCount, index => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      class: "people-selector__icon",
      onClick: $event => $options.changeCount(index)
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["IconPeople"], {
      size: 28,
      color: index <= $data.count ? $props.highlightColor : '#fff',
      weight: index <= $data.count ? 'fill' : 'regular'
    }, null, 8
    /* PROPS */
    , ["color", "weight"])], 8
    /* PROPS */
    , _hoisted_6);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCart.vue?vue&type=template&id=2a5bc574&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCart.vue?vue&type=template&id=2a5bc574&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2a5bc574"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "cart"
};

const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__title"
}, " You have ordered ", -1
/* HOISTED */
));

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__section-title"
}, " Room ", -1
/* HOISTED */
));

const _hoisted_4 = {
  class: "cart__room"
};
const _hoisted_5 = {
  class: "cart__room-preview"
};
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  class: "cart__room-details"
};
const _hoisted_8 = {
  class: "cart__room-title-wrapper"
};
const _hoisted_9 = {
  class: "cart__room-title"
};
const _hoisted_10 = {
  class: "cart__room-price price-underline"
};
const _hoisted_11 = {
  class: "cart__room-row"
};
const _hoisted_12 = {
  class: "cart__room-row"
};
const _hoisted_13 = {
  class: "cart__room-row"
};

const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__section-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Additionally")], -1
/* HOISTED */
));

const _hoisted_15 = {
  class: "cart__orders"
};
const _hoisted_16 = {
  class: "cart__order-content"
};
const _hoisted_17 = {
  class: "cart__order-title"
};
const _hoisted_18 = {
  class: "cart__order-units"
};
const _hoisted_19 = ["onClick"];
const _hoisted_20 = ["onClick"];
const _hoisted_21 = ["onClick"];

const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Remove ");

const _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__order-cross"
}, null, -1
/* HOISTED */
));

const _hoisted_24 = [_hoisted_22, _hoisted_23];
const _hoisted_25 = {
  class: "cart__order-price price-underline"
};
const _hoisted_26 = {
  key: 0,
  class: "cart__order-details"
};
const _hoisted_27 = {
  class: "cart__order-content"
};
const _hoisted_28 = {
  class: "cart__order-title"
};
const _hoisted_29 = ["onClick"];

const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Remove ");

const _hoisted_31 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__order-cross"
}, null, -1
/* HOISTED */
));

const _hoisted_32 = [_hoisted_30, _hoisted_31];
const _hoisted_33 = {
  class: "cart__order-price price-underline"
};
const _hoisted_34 = {
  class: "cart__order-details"
};
const _hoisted_35 = ["onUpdate:modelValue"];
const _hoisted_36 = {
  class: "cart__description cart-bottom"
};
const _hoisted_37 = {
  class: "cart__price"
};

const _hoisted_38 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "cart__price-title"
}, "Total Price", -1
/* HOISTED */
));

const _hoisted_39 = {
  class: "cart__price-total price-underline"
};
const _hoisted_40 = {
  class: "cart__buttons"
};

const _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Back");

const _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Next");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $options.selectedRoom.previewImage,
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.selectedRoom.name) + " Room ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.roomPrice.toFixed(2)) + " KD ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Date: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.selectedDate.toLocaleDateString('en-GB')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Time: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.selectedRange.startTime) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.selectedRange.endTime), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "People: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.selectedPeopleCount), 1
  /* TEXT */
  )])])]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.activeOrders, (order, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "cart__order",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.title) + ": ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [!order.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      class: "cart__order-units-change-button",
      onClick: $event => $options.changeOrderCount(i, -1)
    }, " - ", 8
    /* PROPS */
    , _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.count) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.pluralUnitCheck(order.count, 'unit', 'units')), 1
    /* TEXT */
    ), !order.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 1,
      class: "cart__order-units-change-button",
      onClick: $event => $options.changeOrderCount(i, 1)
    }, " + ", 8
    /* PROPS */
    , _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "cart__order-remove",
      onClick: $event => $options.removeOrder(i)
    }, _hoisted_24, 8
    /* PROPS */
    , _hoisted_21), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((order.count * order.price).toFixed(2)) + " KD ", 1
    /* TEXT */
    )]), order.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.description), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  )), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.packOrders, (order, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "cart__order",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.title) + ": ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "cart__order-remove",
      onClick: $event => $setup.bookingStore.packOrders.splice(i, 1)
    }, _hoisted_32, 8
    /* PROPS */
    , _hoisted_29), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.price.toFixed(2)) + " KD ", 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      rows: "4",
      cols: "50",
      placeholder: "Specify any package details here. We will contact you if any additional details will be needed",
      "onUpdate:modelValue": $event => order.description = $event
    }, null, 8
    /* PROPS */
    , _hoisted_35), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, order.description]])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "4",
    cols: "50",
    placeholder: "Add any additional comments here",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.bookingStore.orderDescription = $event)
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.bookingStore.orderDescription]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.totalPrice.toFixed(2)), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cart__button cart__button--prev", {
      'active': $props.prevEnabled
    }]),
    onClick: _cache[1] || (_cache[1] = $event => $options.prevClick())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prev-text", {}, () => [_hoisted_41], true)])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cart__button cart__button--next", {
      'active': $props.nextEnabled
    }]),
    onClick: _cache[2] || (_cache[2] = $event => $options.nextClick())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "next-text", {}, () => [_hoisted_42], true)])], 2
  /* CLASS */
  )])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCartCheckout.vue?vue&type=template&id=9e68904c&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCartCheckout.vue?vue&type=template&id=9e68904c&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-9e68904c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "cart"
};

const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__title"
}, " You have ordered ", -1
/* HOISTED */
));

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__section-title"
}, " Room ", -1
/* HOISTED */
));

const _hoisted_4 = {
  class: "cart__room"
};
const _hoisted_5 = {
  class: "cart__room-preview"
};
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  class: "cart__room-details"
};
const _hoisted_8 = {
  class: "cart__room-title-wrapper"
};
const _hoisted_9 = {
  class: "cart__room-title"
};
const _hoisted_10 = {
  class: "cart__room-price price-underline"
};
const _hoisted_11 = {
  class: "cart__room-row"
};
const _hoisted_12 = {
  class: "cart__room-row"
};
const _hoisted_13 = {
  class: "cart__room-row"
};

const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__section-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Additionally")], -1
/* HOISTED */
));

const _hoisted_15 = {
  class: "cart__orders"
};
const _hoisted_16 = {
  class: "cart__order-content"
};
const _hoisted_17 = {
  class: "cart__order-title"
};
const _hoisted_18 = {
  class: "cart__order-units"
};
const _hoisted_19 = ["onClick"];
const _hoisted_20 = ["onClick"];
const _hoisted_21 = ["onClick"];

const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Remove ");

const _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__order-cross"
}, null, -1
/* HOISTED */
));

const _hoisted_24 = [_hoisted_22, _hoisted_23];
const _hoisted_25 = {
  class: "cart__order-price price-underline"
};
const _hoisted_26 = {
  key: 0,
  class: "cart__order-details"
};
const _hoisted_27 = {
  class: "cart__order-content"
};
const _hoisted_28 = {
  class: "cart__order-title"
};
const _hoisted_29 = ["onClick"];

const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Remove ");

const _hoisted_31 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__order-cross"
}, null, -1
/* HOISTED */
));

const _hoisted_32 = [_hoisted_30, _hoisted_31];
const _hoisted_33 = {
  class: "cart__order-price price-underline"
};
const _hoisted_34 = {
  class: "cart__order-details"
};
const _hoisted_35 = ["onUpdate:modelValue"];
const _hoisted_36 = {
  class: "cart__checkbox-wrapper"
};
const _hoisted_37 = ["src"];

const _hoisted_38 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__checkbox-text"
}, " I want to pay today only 50% ", -1
/* HOISTED */
));

const _hoisted_39 = {
  class: "cart__description cart-bottom"
};
const _hoisted_40 = {
  class: "cart__price"
};
const _hoisted_41 = {
  class: "cart__price-title"
};

const _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Total Price ");

const _hoisted_43 = {
  key: 0
};
const _hoisted_44 = {
  class: "cart__price-total price-underline"
};
const _hoisted_45 = {
  key: 0,
  class: "cart__price-warning"
};
const _hoisted_46 = {
  class: "cart__price-warning-sign"
};
const _hoisted_47 = ["src"];

const _hoisted_48 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "cart__price-warning-text"
}, " The remaining 50% of the amount you will have to pay at the time of your visit. ", -1
/* HOISTED */
));

const _hoisted_49 = {
  class: "cart__buttons"
};

const _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Back");

const _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Next");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $options.selectedRoom.previewImage,
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.selectedRoom.name) + " Room ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.roomPrice) + " KD ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Date: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.selectedDate.toLocaleDateString('en-GB')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Time: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.selectedRange.startTime) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.selectedRange.endTime), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "People: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.selectedPeopleCount), 1
  /* TEXT */
  )])])]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.activeOrders, (order, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "cart__order",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.title) + ": ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [!order.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      class: "cart__order-units-change-button",
      onClick: $event => $options.changeOrderCount(i, -1)
    }, " - ", 8
    /* PROPS */
    , _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.count) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.pluralUnitCheck(order.count, 'unit', 'units')), 1
    /* TEXT */
    ), !order.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 1,
      class: "cart__order-units-change-button",
      onClick: $event => $options.changeOrderCount(i, 1)
    }, " + ", 8
    /* PROPS */
    , _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "cart__order-remove",
      onClick: $event => $options.removeOrder(i)
    }, _hoisted_24, 8
    /* PROPS */
    , _hoisted_21), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.count * order.price) + " KD ", 1
    /* TEXT */
    )]), order.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.description), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  )), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.packOrders, (order, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "cart__order",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.title) + ": ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "cart__order-remove",
      onClick: $event => $setup.bookingStore.packOrders.splice(i, 1)
    }, _hoisted_32, 8
    /* PROPS */
    , _hoisted_29), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.price) + " KD ", 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      rows: "4",
      cols: "50",
      placeholder: "Specify any package details here. We will contact you if any additional details will be needed",
      "onUpdate:modelValue": $event => order.description = $event
    }, null, 8
    /* PROPS */
    , _hoisted_35), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, order.description]])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "cart__checkbox-tick",
    onClick: _cache[0] || (_cache[0] = $event => $setup.bookingStore.halfPayment = !$setup.bookingStore.halfPayment)
  }, [$setup.bookingStore.halfPayment ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    src: __webpack_require__(/*! assetDir/images/svg/tick.svg */ "./src/assets/images/svg/tick.svg"),
    alt: "warning-icon"
  }, null, 8
  /* PROPS */
  , _hoisted_37)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_38]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "4",
    cols: "50",
    placeholder: "Add any additional comments here",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.bookingStore.orderDescription = $event)
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.bookingStore.orderDescription]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_41, [_hoisted_42, $setup.bookingStore.halfPayment ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_43, "50%")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.totalPrice) + " KD", 1
  /* TEXT */
  )]), $setup.bookingStore.halfPayment ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! assetDir/images/svg/warning-icon.svg */ "./src/assets/images/svg/warning-icon.svg"),
    alt: "warning-icon"
  }, null, 8
  /* PROPS */
  , _hoisted_47)]), _hoisted_48])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cart__button cart__button--prev", {
      'active': $props.prevEnabled
    }]),
    onClick: _cache[2] || (_cache[2] = $event => $options.prevClick())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prev-text", {}, () => [_hoisted_50], true)])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cart__button cart__button--next", {
      'active': $props.nextEnabled
    }]),
    onClick: _cache[3] || (_cache[3] = $event => $options.nextClick())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "next-text", {}, () => [_hoisted_51], true)])], 2
  /* CLASS */
  )])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=template&id=f6c0005a&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=template&id=f6c0005a&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f6c0005a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "time-selector__fields"
};
const _hoisted_2 = {
  class: "time-selector__field"
};

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "time-selector__field-description"
}, " Start time ", -1
/* HOISTED */
));

const _hoisted_4 = {
  class: "input-field"
};
const _hoisted_5 = {
  class: "time-selector__field"
};

const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "time-selector__field-description"
}, " End time ", -1
/* HOISTED */
));

const _hoisted_7 = {
  class: "input-field"
};
const _hoisted_8 = {
  class: "time-selector__field"
};

const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "time-selector__field-description"
}, " Total hours ", -1
/* HOISTED */
));

const _hoisted_10 = {
  class: "input-field"
};
const _hoisted_11 = {
  class: "time-selector__content-wrapper"
};
const _hoisted_12 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "time-selector",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--roomColor:' + _ctx.highlightColor)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["IconClock"], {
    size: 14,
    color: "#fff"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.startTimeFormatted), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["IconClock"], {
    size: 14,
    color: "#fff"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.endTimeFormatted), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.hourLength), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.timeSegments, (timeSegment, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: timeSegment,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'selected': _ctx.isSelected(index),
        'border': _ctx.isBorder(index),
        'border--start': _ctx.isStart(index),
        'border--end': _ctx.isEnd(index),
        'booked': _ctx.isBooked(index),
        'expandable': _ctx.isExpandable(index)
      }, "time-selector__sector"]),
      onClick: $event => _ctx.segmentClick(index)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.tConvert(timeSegment.startTime)) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.tConvert(timeSegment.endTime)), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_12);
  }), 128
  /* KEYED_FRAGMENT */
  ))])], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingRecovery.vue?vue&type=template&id=01a9f460&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingRecovery.vue?vue&type=template&id=01a9f460&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-01a9f460"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "loader"
};

const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")], -1
/* HOISTED */
));

const _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep1View.vue?vue&type=template&id=a6cad322&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep1View.vue?vue&type=template&id=a6cad322&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a6cad322"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "wide-container"
};
const _hoisted_2 = {
  key: 0,
  class: "font--prim-text text--400 m--b-25 text--S"
};
const _hoisted_3 = {
  key: 1,
  class: "booking"
};
const _hoisted_4 = {
  class: "booking__rooms"
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = {
  class: "booking__room-image"
};
const _hoisted_7 = ["src"];
const _hoisted_8 = {
  class: "booking__room-title font--prim-title text--700 text--L"
};
const _hoisted_9 = {
  class: "booking__calendar-column"
};

const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "font--prim-text text--700 text--S m--b-10 text--center"
}, "Date", -1
/* HOISTED */
));

const _hoisted_11 = {
  class: "microphone microphone--desktop"
};
const _hoisted_12 = {
  class: "microphone__outer-wrapper"
};
const _hoisted_13 = {
  class: "microphone__inner-wrapper"
};
const _hoisted_14 = {
  class: "microphone__image rotate-to-mouse",
  "data-lerp-speed": "0.1"
};
const _hoisted_15 = ["src"];
const _hoisted_16 = {
  class: "booking__time-selector"
};
const _hoisted_17 = {
  class: "booking__people-selector-row"
};
const _hoisted_18 = {
  class: "booking__price-wrapper"
};

const _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Price", -1
/* HOISTED */
));

const _hoisted_20 = {
  class: "booking__price"
};
const _hoisted_21 = {
  class: "booking__next-button-wrapper"
};

const _hoisted_22 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Next", -1
/* HOISTED */
));

const _hoisted_23 = [_hoisted_22];
const _hoisted_24 = {
  class: "microphone microphone--mobile"
};
const _hoisted_25 = {
  class: "microphone__outer-wrapper"
};
const _hoisted_26 = {
  class: "microphone__inner-wrapper"
};
const _hoisted_27 = {
  class: "microphone__image rotate-to-mouse",
  "data-lerp-speed": "0.1"
};
const _hoisted_28 = ["src"];
const _hoisted_29 = {
  key: 2,
  class: "loader"
};

const _hoisted_30 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")], -1
/* HOISTED */
));

const _hoisted_31 = [_hoisted_30];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{bookingDataAvailable}} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, " Please select one of the rooms and the time period you would like to reserve ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.roomData, (value, key) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__room", {
        'open': key == $setup.bookingStore.selectedRoomID,
        'closed': $setup.bookingStore.selectedRoomID != '' && key != $setup.bookingStore.selectedRoomID
      }]),
      onClick: $event => $options.selectRoom(key),
      key: value,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--roomColor:' + value.primaryColor)
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: value.previewImage,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_7)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value.name), 1
    /* TEXT */
    )], 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_5);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Calendar"], {
    highlightColor: $options.selectedRoomColor,
    modelValue: $setup.bookingStore.selectedDate,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.bookingStore.selectedDate = $event)
  }, null, 8
  /* PROPS */
  , ["highlightColor", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" transformAxisRotation is a little innacturate but it's accurate enough to look good so I'm going to leave it here "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" I've added a 7 to the total rotation to reduce the size a little (this way there's a gap) "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.selectedOccupancyData, (hour, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: i,
      class: "microphone__circle-section",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--transformAxisRotation:' + (Math.acos(4 / $options.selectedOccupancyData.length) * 180 / Math.PI + 7) + 'deg' + '; --offset:' + (i / $options.selectedOccupancyData.length * 360 + 270 + 180 / $options.selectedOccupancyData.length) + 'deg ; --color:' + $options.getTimeSegmentColor(i) + ';')
    }, null, 4
    /* STYLE */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! assetDir/images/svg/microphone.svg */ "./src/assets/images/svg/microphone.svg"),
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_15)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TimeRangeSelector"], {
    highlightColor: $options.selectedRoomColor,
    occupancyData: $options.selectedOccupancyData,
    openTime: $options.selectedSchedule.openTime,
    modelValue: $setup.bookingStore.selectedRange,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.bookingStore.selectedRange = $event)
  }, null, 8
  /* PROPS */
  , ["highlightColor", "occupancyData", "openTime", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PeopleCountSelector"], {
    minCount: $options.selectedRoom.minCapacity,
    maxCount: $options.selectedRoom.maxCapacity,
    highlightColor: $options.selectedRoomColor,
    modelValue: $setup.bookingStore.selectedPeopleCount,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.bookingStore.selectedPeopleCount = $event)
  }, null, 8
  /* PROPS */
  , ["minCount", "maxCount", "highlightColor", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.roomPrice), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__next-button", {
      'disabled': !$options.isStepComplete
    }]),
    onClick: _cache[3] || (_cache[3] = $event => $options.nextView())
  }, _hoisted_23, 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" transformAxisRotation is a little innacturate but it's accurate enough to look good so I'm going to leave it here "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" I've added a 7 to the total rotation to reduce the size a little (this way there's a gap) "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.selectedOccupancyData, (hour, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: i,
      class: "microphone__circle-section",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--transformAxisRotation:' + (Math.acos(4 / $options.selectedOccupancyData.length) * 180 / Math.PI + 7) + 'deg' + '; --offset:' + (i / $options.selectedOccupancyData.length * 360 + 270 + 180 / $options.selectedOccupancyData.length) + 'deg ; --color:' + $options.getTimeSegmentColor(i) + ';')
    }, null, 4
    /* STYLE */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! assetDir/images/svg/microphone.svg */ "./src/assets/images/svg/microphone.svg"),
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_28)])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, _hoisted_31)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep2View.vue?vue&type=template&id=40df0570&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep2View.vue?vue&type=template&id=40df0570&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-40df0570"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "container"
};
const _hoisted_2 = {
  key: 0,
  class: "section-description"
};
const _hoisted_3 = {
  key: 1,
  class: "packages"
};
const _hoisted_4 = ["onClick", "onMouseleave"];
const _hoisted_5 = {
  class: "package__inner"
};
const _hoisted_6 = {
  class: "package__front"
};
const _hoisted_7 = ["src"];
const _hoisted_8 = {
  class: "package__touch-icon"
};
const _hoisted_9 = ["src"];
const _hoisted_10 = {
  class: "package__back"
};
const _hoisted_11 = {
  class: "package__title"
};
const _hoisted_12 = {
  class: "package__text"
};

const _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "This package includes:", -1
/* HOISTED */
));

const _hoisted_14 = {
  class: "package__price"
};
const _hoisted_15 = ["onClick"];

const _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "pack__popup"
}, " Order added to cart! ", -1
/* HOISTED */
));

const _hoisted_17 = [_hoisted_16];

const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add ");

const _hoisted_19 = {
  key: 2,
  class: "item-select"
};
const _hoisted_20 = {
  class: "item-select__item-window"
};
const _hoisted_21 = {
  key: 0,
  class: "section-description"
};
const _hoisted_22 = {
  class: "item-select__item-list-category item-category"
};
const _hoisted_23 = {
  class: "item-select__item-list item-list"
};
const _hoisted_24 = {
  class: "item-select__order-list-window"
};
const _hoisted_25 = {
  class: "shopping-cart-window-wrapper"
};
const _hoisted_26 = {
  class: "shopping-cart-window"
};

const _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Confirm ");

const _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back ");

const _hoisted_29 = {
  key: 0,
  class: "loader"
};

const _hoisted_30 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")], -1
/* HOISTED */
));

const _hoisted_31 = [_hoisted_30];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, " We have three Celebration Packages for you. You can get them here. If you require more letter balloons please write them down in the comment box below (each additional letter balloon is 2 KD) ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.packData, (pack, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["package", {
        'mobile-open': $data.openPackID == i,
        'force-close': pack.forceClose
      }]),
      key: i,
      onClick: $event => $options.togglePack(i),
      onMouseleave: $event => pack.forceClose = false
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: pack.image,
      alt: "preview"
    }, null, 8
    /* PROPS */
    , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: __webpack_require__(/*! assetDir/images/svg/cursor-click.svg */ "./src/assets/images/svg/cursor-click.svg"),
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_9)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pack.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(pack.list, item => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
        key: item
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.item), 1
      /* TEXT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pack.price) + " KD ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "package__button",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.addPack(i), ["stop"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["pack__popup-wrapper", {
        'open': $data.popupList[i]
      }])
    }, _hoisted_17, 2
    /* CLASS */
    ), _hoisted_18], 8
    /* PROPS */
    , _hoisted_15)])])], 42
    /* CLASS, PROPS, HYDRATE_EVENTS */
    , _hoisted_4);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [$options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, " Please select any additional food/beverages/decorations. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.itemData, (category, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "item-select__item-list-wrapper item-list-wrapper",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.title), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(category.items, (item, j) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Item"], {
        key: j,
        maxCount: item.maxCount ? item.maxCount : 10,
        description: item.description,
        placeholder: item.placeholder,
        imageLink: item.image,
        innerID: item.innerID,
        highlightColor: $options.selectedRoomColor,
        orderRef: $setup.bookingStore.itemOrders[$options.itemOrderID(i, j)]
      }, {
        title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1
        /* TEXT */
        )]),
        price: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.price) + " KD / 1 unit ", 1
        /* TEXT */
        )]),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["maxCount", "description", "placeholder", "imageLink", "innerID", "highlightColor", "orderRef"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ShoppingCart"], {
    prevEnabled: true,
    nextEnabled: $options.isStepComplete,
    onPrevClicked: _cache[0] || (_cache[0] = $event => $options.prevView()),
    onNextClicked: _cache[1] || (_cache[1] = $event => $options.nextView())
  }, {
    "next-text": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_27]),
    "prev-text": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_28]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["nextEnabled"])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), !$options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, _hoisted_31)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep3View.vue?vue&type=template&id=55b9171e&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep3View.vue?vue&type=template&id=55b9171e&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-55b9171e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "container"
};
const _hoisted_2 = {
  class: "checkout"
};
const _hoisted_3 = {
  class: "checkout__window"
};

const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: ""
}, "Please enter your details", -1
/* HOISTED */
));

const _hoisted_5 = {
  class: "checkout__fields"
};
const _hoisted_6 = {
  class: "checkout__field-title"
};
const _hoisted_7 = {
  key: 0
};
const _hoisted_8 = {
  class: "tos__checkbox-wrapper"
};
const _hoisted_9 = ["src"];

const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "tos__checkbox-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Сonfirm that I agree with the "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  class: "def-link",
  target: "_blank",
  href: "/privacy-policy"
}, "Terms of Service and Privacy Policy")], -1
/* HOISTED */
));

const _hoisted_11 = {
  class: "checkout__window checkout__window--mt"
};
const _hoisted_12 = {
  class: "shopping-cart-window"
};
const _hoisted_13 = {
  key: 0,
  class: ""
};
const _hoisted_14 = {
  key: 1,
  class: ""
};

const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back ");

const _hoisted_16 = ["action"];
const _hoisted_17 = ["value"];
const _hoisted_18 = ["value"];
const _hoisted_19 = ["value"];
const _hoisted_20 = ["value"];
const _hoisted_21 = {
  class: "def-modal__outer-container container"
};
const _hoisted_22 = {
  class: "def-modal__inner-container def-modal__inner-container--50"
};
const _hoisted_23 = {
  class: "def-modal__top"
};

const _hoisted_24 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "modal-title"
}, "Please select a payment method")], -1
/* HOISTED */
));

const _hoisted_25 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--1"
}, null, -1
/* HOISTED */
));

const _hoisted_26 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--2"
}, null, -1
/* HOISTED */
));

const _hoisted_27 = [_hoisted_25, _hoisted_26];
const _hoisted_28 = {
  class: "def-modal__content-wrapper def-modal-class-name modal-content-wrapper"
};
const _hoisted_29 = {
  key: 0,
  class: ""
};
const _hoisted_30 = {
  class: "payment-selection"
};
const _hoisted_31 = {
  class: "payment-selection__methods"
};
const _hoisted_32 = ["onClick"];
const _hoisted_33 = ["src"];
const _hoisted_34 = {
  key: 1,
  class: "payment-selection__loader"
};

const _hoisted_35 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")], -1
/* HOISTED */
));

const _hoisted_36 = [_hoisted_35];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.contactFields, field => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "checkout__field",
      key: field
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(field.title), 1
    /* TEXT */
    ), field.obligatory ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_7, "*")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InputField"], {
      modelValue: field.value,
      "onUpdate:modelValue": $event => field.value = $event,
      placeholder: field.placeholder,
      invalid: field.invalid,
      invalidMessage: field.invalidMessage,
      onFieldClick: $event => field.invalid = false
    }, null, 8
    /* PROPS */
    , ["modelValue", "onUpdate:modelValue", "placeholder", "invalid", "invalidMessage", "onFieldClick"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "tos__checkbox-tick",
    onClick: _cache[0] || (_cache[0] = $event => $data.TOS = !$data.TOS)
  }, [$data.TOS ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    src: __webpack_require__(/*! assetDir/images/svg/tick.svg */ "./src/assets/images/svg/tick.svg"),
    alt: "tick"
  }, null, 8
  /* PROPS */
  , _hoisted_9)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_10])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ShoppingCart"], {
    prevEnabled: true,
    nextEnabled: $options.isStepComplete,
    onPrevClicked: _cache[1] || (_cache[1] = $event => $options.prevView()),
    onNextClicked: _cache[2] || (_cache[2] = $event => $setup.bookingStore.isStaff ? $options.manualSubmit() : $options.attemptSubmit())
  }, {
    "next-text": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [$setup.bookingStore.isStaff ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, "Book Manually")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.bookingStore.isStaff ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, "Pay")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]),
    "prev-text": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_15]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["nextEnabled"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    action: $setup.bookingStore.isStaff ? '/manual-book' : '/payment',
    method: "POST",
    class: "pay-submit-form",
    name: "payment-submit-form"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    value: $data.bookingData,
    name: "bookinData"
  }, null, 8
  /* PROPS */
  , _hoisted_17), !$setup.bookingStore.isStaff ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    type: "hidden",
    value: $options.selectedPaymentId,
    name: "selectedPaymentMethod"
  }, null, 8
  /* PROPS */
  , _hoisted_18)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    value: $data.recoveryData,
    name: "recoveryData"
  }, null, 8
  /* PROPS */
  , _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    value: this.bookingStore.reservationToken,
    name: "token"
  }, null, 8
  /* PROPS */
  , _hoisted_20)], 8
  /* PROPS */
  , _hoisted_16), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["def-modal", {
      'modal-active': $data.paymentModalOpen
    }]),
    onClick: _cache[6] || (_cache[6] = $event => $data.paymentModalOpen = false)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__wrapper",
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__cross",
    onClick: _cache[3] || (_cache[3] = $event => $data.paymentModalOpen = false)
  }, _hoisted_27)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [$setup.bookingStore.paymentMethods != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.paymentMethods, (method, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["payment-selection__method", {
        'active': i == $setup.bookingStore.selectedPaymentMethod
      }]),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--shadowColor:' + method.shadowColor),
      key: i,
      onClick: $event => $setup.bookingStore.selectedPaymentMethod = i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: method.preview,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_33)], 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_32);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "pay-submit-button",
    onClick: _cache[4] || (_cache[4] = $event => $options.submitBooking())
  }, "Confirm Payment")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.bookingStore.paymentMethods == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, _hoisted_36)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])], 2
  /* CLASS */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=template&id=3ba2f8f0&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=template&id=3ba2f8f0&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3ba2f8f0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "container"
};
const _hoisted_2 = {
  class: "booking__top-bar"
};
const _hoisted_3 = {
  class: "booking__logo"
};
const _hoisted_4 = {
  href: "/"
};
const _hoisted_5 = ["src"];
const _hoisted_6 = {
  class: "booking__complementary-wrapper"
};

const _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__title-wrapper"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Booking")], -1
/* HOISTED */
));

const _hoisted_8 = {
  class: "booking__steps"
};

const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "1")], -1
/* HOISTED */
));

const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "RESERVE")], -1
/* HOISTED */
));

const _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "2")], -1
/* HOISTED */
));

const _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Additions")], -1
/* HOISTED */
));

const _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "3")], -1
/* HOISTED */
));

const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Confirmation")], -1
/* HOISTED */
));

const _hoisted_15 = {
  key: 1,
  class: "loader"
};

const _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")], -1
/* HOISTED */
));

const _hoisted_17 = [_hoisted_16];
const _hoisted_18 = {
  class: "def-modal__outer-container container"
};
const _hoisted_19 = {
  class: "def-modal__inner-container def-modal__inner-container--50"
};
const _hoisted_20 = {
  class: "def-modal__top"
};

const _hoisted_21 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "modal-title"
})], -1
/* HOISTED */
));

const _hoisted_22 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--1"
}, null, -1
/* HOISTED */
));

const _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--2"
}, null, -1
/* HOISTED */
));

const _hoisted_24 = [_hoisted_22, _hoisted_23];
const _hoisted_25 = {
  class: "def-modal__content-wrapper def-modal-class-name modal-content-wrapper"
};
const _hoisted_26 = {
  class: "alert-modal"
};

const _hoisted_27 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "alert-modal__title m--b-15"
}, " Your reservation time is about to expire ", -1
/* HOISTED */
));

const _hoisted_28 = {
  class: "alert-modal__image"
};
const _hoisted_29 = ["src"];

const _hoisted_30 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "alert-modal__message m--b-45"
}, " Do you want to extend it? ", -1
/* HOISTED */
));

const _hoisted_31 = {
  class: "alert-modal__buttons"
};
const _hoisted_32 = {
  class: "def-modal__outer-container container"
};
const _hoisted_33 = {
  class: "def-modal__inner-container def-modal__inner-container--50"
};
const _hoisted_34 = {
  class: "def-modal__top"
};

const _hoisted_35 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "modal-title"
})], -1
/* HOISTED */
));

const _hoisted_36 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--1"
}, null, -1
/* HOISTED */
));

const _hoisted_37 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--2"
}, null, -1
/* HOISTED */
));

const _hoisted_38 = [_hoisted_36, _hoisted_37];
const _hoisted_39 = {
  class: "def-modal__content-wrapper def-modal-class-name modal-content-wrapper"
};
const _hoisted_40 = {
  class: "alert-modal"
};
const _hoisted_41 = {
  class: "alert-modal__title m--b-15"
};
const _hoisted_42 = {
  class: "alert-modal__message m--b-45"
};
const _hoisted_43 = {
  class: "alert-modal__buttons"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: "booking",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--roomColor:' + $options.selectedRoomColor() + '; --textColorBG:' + $options.bgTextColor + ';')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! assetDir/images/logo.png */ "./src/assets/images/logo.png"),
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_5)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, $setup.bookingStore.reservationTTL != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__timer-wrapper", {
      'highlighted': $setup.bookingStore.reservationTTL <= 60
    }]),
    onClick: _cache[0] || (_cache[0] = $event => $options.openTimerModal())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["IconClock"], {
    size: 23,
    color: "#fff"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formattedTimer), 1
  /* TEXT */
  )], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "booking__steps-wrapper m--b-45",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--roomColor:' + $options.selectedRoomColor())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'booking-step-1'
    },
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__step", {
      'active': $setup.bookingStore.openStep >= 1
    }])
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_9, _hoisted_10]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__steps-line", {
      'active': $setup.bookingStore.openStep >= 1
    }])
  }, null, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'booking-step-2'
    },
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__step", {
      'active': $setup.bookingStore.openStep >= 2
    }])
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_11, _hoisted_12]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__steps-line", {
      'active': $setup.bookingStore.openStep >= 2
    }])
  }, null, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'booking-step-3'
    },
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__step", {
      'active': $setup.bookingStore.openStep >= 3
    }])
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_13, _hoisted_14]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])])], 4
  /* STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)], 4
  /* STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["def-modal important light", {
      'modal-active': $data.timerModalActive
    }]),
    onClick: _cache[5] || (_cache[5] = $event => $data.timerModalActive = false)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__wrapper",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__cross",
    onClick: _cache[1] || (_cache[1] = $event => $data.timerModalActive = false)
  }, _hoisted_24)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! assetDir/images/waiting.png */ "./src/assets/images/waiting.png"),
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_29)]), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "alert-modal__button alert-modal__button--dismiss",
    onClick: _cache[2] || (_cache[2] = $event => $data.timerModalActive = false)
  }, " No "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "alert-modal__button alert-modal__button--accept",
    onClick: _cache[3] || (_cache[3] = $event => $options.extendReservationTime())
  }, " Yes ")])])])])])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["def-modal important light", {
      'modal-active': $setup.errorModalStore.modalOpen
    }]),
    onClick: _cache[9] || (_cache[9] = $event => $setup.errorModalStore.modalOpen = false)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__wrapper",
    onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__cross",
    onClick: _cache[6] || (_cache[6] = $event => $setup.errorModalStore.modalOpen = false)
  }, _hoisted_38)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errorModalStore.modalTitle), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errorModalStore.modalText), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "alert-modal__button alert-modal__button--dismiss",
    onClick: _cache[7] || (_cache[7] = $event => $setup.errorModalStore.modalOpen = false)
  }, " Ok ")])])])])])])], 2
  /* CLASS */
  )], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scss/main.scss */ "./src/assets/scss/main.scss");
/* harmony import */ var _js_libs_Mathf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/libs/Mathf.js */ "./src/js/libs/Mathf.js");
/* harmony import */ var _js_libs_Vector2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/libs/Vector2.js */ "./src/js/libs/Vector2.js");
/* harmony import */ var _js_libs_MouseCoords_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/libs/MouseCoords.js */ "./src/js/libs/MouseCoords.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/main.js */ "./src/js/main.js");
/* harmony import */ var _js_VueSetup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/VueSetup.js */ "./src/js/VueSetup.js");
/* harmony import */ var _js_slick_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/slick.js */ "./src/js/slick.js");
/* harmony import */ var _js_slick_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_slick_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/slider.js */ "./src/js/slider.js");
/* harmony import */ var _js_particles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/particles.js */ "./src/js/particles.js");
 // SCSS

 // JS










/***/ }),

/***/ "./src/js/VueSetup.js":
/*!****************************!*\
  !*** ./src/js/VueSetup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./src/js/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/js/router/index.js");



const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
const pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.createPinia)();
app.use(pinia);

app.use(_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.mount("#app");


/***/ }),

/***/ "./src/js/libs/Mathf.js":
/*!******************************!*\
  !*** ./src/js/libs/Mathf.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mathf)
/* harmony export */ });
class Mathf {
  static Clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
  }

  static Lerp(a, b, t) {
    return (1 - t) * a + t * b;
  }

  static LerpRotation(a, b, t) {
    let delta = b - a;

    if (Math.abs(delta) > 180) {
      // offseting the angles by 180, this way the breakpoint happens in a different place and they can be safely lerped
      a = Mathf.WrapAngle(a + 180);
      b = Mathf.WrapAngle(b + 180);
      return Mathf.WrapAngle(Mathf.Lerp(a, b, t) - 180);
    }

    return Mathf.Lerp(a, b, t);
  }

  static TransformRange(OldMin, OldMax, NewMin, NewMax, value) {
    let OldRange = OldMax - OldMin;
    let NewRange = NewMax - NewMin;
    return (value - OldMin) * NewRange / OldRange + NewMin;
  }

  static Deg2Rad(deg) {
    return deg * (Math.PI / 180);
  }

  static Rad2Deg(rad) {
    return rad * (180 / Math.PI);
  }

  static WrapAngle(angle) {
    if (angle > 180) {
      angle -= 360;
    } else if (angle <= -180) {
      angle += 360;
    }

    return angle;
  }

}

/***/ }),

/***/ "./src/js/libs/MouseCoords.js":
/*!************************************!*\
  !*** ./src/js/libs/MouseCoords.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/Vector2 */ "./src/js/libs/Vector2.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


let mouseCoords = new libs_Vector2__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);

function FindMousePos() {
  mouseCoords.x = event.pageX;
  mouseCoords.y = event.pageY;
}

jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function (event) {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("mousemove", function (event) {
    if (event.pageX !== 'undefined') {
      FindMousePos();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on("mousewheel", function (event) {
    if (event.pageX !== 'undefined') {
      FindMousePos();
    }
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouseCoords);

/***/ }),

/***/ "./src/js/libs/Vector2.js":
/*!********************************!*\
  !*** ./src/js/libs/Vector2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector2)
/* harmony export */ });
/* harmony import */ var libs_Mathf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/Mathf */ "./src/js/libs/Mathf.js");

class Vector2 {
  x = 0;
  y = 0;

  constructor(x, y) {
    if (typeof x != "number" || typeof y != "number") {
      console.error("Could not construct a Vector2 because one ar both of the parameters passed is not of type 'Number'. The parameter types were: x - " + typeof x + ", y - " + typeof y + ".");
    }

    this.x = x;
    this.y = y;
  }

  static Add(vectorA, vectorB) {
    return new Vector2(vectorA.x + vectorB.x, vectorA.y + vectorB.y);
  }

  static Sub(vectorA, vectorB) {
    return new Vector2(vectorA.x - vectorB.x, vectorA.y - vectorB.y);
  }

  Scale(scaleFactor) {
    var result = new Vector2(this.x, this.y);
    result.x *= scaleFactor;
    result.y *= scaleFactor;
    return result;
  }

  Normalized() {
    var result = new Vector2(this.x, this.y);
    var vectorLength = result.Length();
    result.x /= vectorLength;
    result.y /= vectorLength;
    return result;
  }

  static Normalized(vector) {
    var vectorLength = vector.Length();
    vector.x /= vectorLength;
    vector.y /= vectorLength;
    return vectorLength;
  }

  Length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  ClampLength(min, max) {
    let result = new Vector2(this.x, this.y);
    var vectorLength = result.Length();

    if (vectorLength == 0) {
      return Vector2.zero;
    }

    result.x /= vectorLength;
    result.y /= vectorLength;
    var newLength = libs_Mathf__WEBPACK_IMPORTED_MODULE_0__["default"].Clamp(min, vectorLength, max);
    result.x *= newLength;
    result.y *= newLength;
    return result;
  }

  PerpendicularLeft() {
    return new Vector2(-this.y, this.x);
  }

  PerpendicularRight() {
    return new Vector2(this.y, -this.x);
  }

  isZero(epsilon) {
    let sqLength = this.x * this.x + this.y * this.y;
    return sqLength <= epsilon * epsilon;
  }

  Equal(otherVector) {
    return this.x == otherVector.x && this.y == otherVector.y;
  }

  Clone() {
    return new Vector2(this.x, this.y);
  }

  Rotate(angle) {
    let sin = Math.sin(libs_Mathf__WEBPACK_IMPORTED_MODULE_0__["default"].Deg2Rad(angle));
    let cos = Math.cos(libs_Mathf__WEBPACK_IMPORTED_MODULE_0__["default"].Deg2Rad(angle));
    let tx = this.x;
    let ty = this.y;
    return new Vector2(cos * tx - sin * ty, sin * tx + cos * ty);
  }

  static Lerp(startVector, endVector, t) {
    return Vector2.Add(startVector.Scale(1 - t), endVector.Scale(t));
  }

  static Distance(vectorA, vectorB) {
    return Vector2.Sub(vectorA, vectorB).Length;
  }

  static FromJSObject(JSObject) {
    return new Vector2(JSObject.x, JSObject.y);
  }

  static CrossProduct(vectorA, vectorB) {
    return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
  }

  static DotProduct(vectorA, vectorB) {
    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
  }

  static Angle(vectorA, vectorB) {
    let angle = libs_Mathf__WEBPACK_IMPORTED_MODULE_0__["default"].Rad2Deg(Math.atan2(vectorB.y, vectorB.x) - Math.atan2(vectorA.y, vectorA.x));
    return libs_Mathf__WEBPACK_IMPORTED_MODULE_0__["default"].WrapAngle(angle);
  }

  static PerpendicularLeft(vector) {
    return new Vector2(-vector.y, vector.x);
  }

  static PerpendicularRight(vector) {
    return new Vector2(vector.y, -vector.x);
  }

  static get zero() {
    return new Vector2(0, 0);
  }

  static get up() {
    return new Vector2(0, 1);
  }

  static get down() {
    return new Vector2(0, -1);
  }

  static get left() {
    return new Vector2(-1, 0);
  }

  static get right() {
    return new Vector2(1, 0);
  }

}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libs_Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/Vector2 */ "./src/js/libs/Vector2.js");
/* harmony import */ var libs_Mathf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/Mathf */ "./src/js/libs/Mathf.js");
/* harmony import */ var libs_MouseCoords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/MouseCoords */ "./src/js/libs/MouseCoords.js");




jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-slider-item').click(function () {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.menu-slider__description').hasClass('hide')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-slider__description.hide').removeClass('hide');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.menu-slider__description').addClass('hide');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.menu-slider__description').removeClass('hide');
  }

  ;
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-btn').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigation').toggleClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar').toggleClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-background').toggleClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigation__item, .sidebar-background').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger-btn').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navigation').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-background').removeClass('active');
});

function ibg() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default().each(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ibg'), function (index, val) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('img').length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('img').first().css("width", 0);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('img').first().css("height", 0);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('img').first().css("display", "none");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('background-image', 'url("' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('img').attr('src') + '")');
    }
  });
}

function RatioW() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default().each(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ratio-w'), function (index, val) {
    var ratioMultiplier = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("ratio-multiplier"));

    if (ratioMultiplier == "undefined") {
      ratioMultiplier = 1;
    } ////console.log(ratioMultiplier);


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("height", (parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("width")) * ratioMultiplier).toString() + "px");
  });
}

function RatioH() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default().each(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ratio-h'), function (index, val) {
    var ratioMultiplier = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("ratio-multiplier"));

    if (ratioMultiplier == "undefined") {
      ratioMultiplier = 1;
    } ////console.log(ratioMultiplier);


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("width", (parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("height")) * ratioMultiplier).toString() + "px");
  });
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  ibg();
  RatioW();
  RatioH();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
  RatioW();
  RatioH();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-lang').on('click', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-lang__list').addClass('active');
  e.stopPropagation(); // $('#'+$(this).data('lang-id')).
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-lang__item').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-lang__item').removeClass('selected');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('selected');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-lang').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('lang-id')).addClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-lang__list').removeClass('active');
}); // $(document).on('tap',document, function(){
// 	////console.log('move');
// });
///MODAL

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.modal-trigger', function (event) {
  var modalID = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('modal-id');
  let modal = OpenModal('#' + modalID);
  var modalTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('modal-title');

  if (typeof modalTitle !== 'undefined') {
    modal.find(".modal-title").html(modalTitle);
  }

  let modalFieldPresets = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('field-presets');

  if (modalFieldPresets) {
    for (let i = 0; i < modalFieldPresets.length; i++) {
      modal.find(modalFieldPresets[i].childSelector).val(modalFieldPresets[i].value);
    }
  }

  let modalContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('modal-content');

  if (modalContent) {
    modal.find('.modal-content-wrapper').html(modalContent);
  }
});

function OpenModal(selector) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").css("overflow", "hidden");
  var modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector + ".modal");
  modal.addClass("modal-active");
  return modal;
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mousedown touchstart', '.modal-bg, .modal-cross', function (event) {
  CloseModal(this);
});

function CloseModal(selector) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal-active').length == 1) {
    // only 1 modal window is open
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").css("overflow", "visible");
  }

  var modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).closest(".modal");
  modal.removeClass("modal-active");
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mousedown touchstart', '.modal-window', function (event) {
  event.stopPropagation();
}); //READMORE START

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.readmore', function (event) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass("toggled");
  ToggleReadmoreObjects(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
});

function ToggleReadmoreObjects(readmore) {
  let readmoreObjects = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-readmore-identifier=" + readmore.attr('id') + "]");

  if (readmoreObjects.length == 0) {
    return;
  }

  for (var i = 0; i < readmoreObjects.length; i++) {
    let readmoreObject = jquery__WEBPACK_IMPORTED_MODULE_0___default()(readmoreObjects[i]);

    if (readmore.hasClass("toggled")) {
      readmoreObject.removeClass("hidden");
    } else {
      readmoreObject.addClass("hidden");
    }
  }
} //First run through for every readmore when page loads


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.readmore').each(function () {
    ToggleReadmoreObjects(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
}); //READMORE END
//Item accordeon

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
  UpdateItemLists();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.item-category', function (event) {
  let isOpen = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.item-list-wrapper').hasClass('open');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.item-list-wrapper').removeClass('open');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.item-list-wrapper').toggleClass('open', !isOpen);
  UpdateItemLists();
});

function UpdateItemLists() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".item-list-wrapper").each(function () {
    AnimateListCategory(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
}

function AnimateListCategory(listWrapper) {
  let category = listWrapper.find('.item-category');
  let list = listWrapper.find('.item-list');
  let targetHeight = category.outerHeight(true);

  if (listWrapper.hasClass('open')) {
    targetHeight += list.outerHeight(true);
  }

  listWrapper.stop().animate({
    height: targetHeight + "px"
  }, 500);
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  RotateToMouse();
});

async function RotateToMouse() {
  while (true) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.rotate-to-mouse').each(function () {
      let rotatedObject = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      let offset = rotatedObject.offset();
      var relCoor = new libs_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"](offset.left + rotatedObject.width() / 2, offset.top + rotatedObject.height() / 2);
      relCoor = libs_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"].Sub(relCoor, libs_MouseCoords__WEBPACK_IMPORTED_MODULE_3__["default"]);
      let desiredRotation = libs_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"].Angle(libs_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"].up, relCoor); // //console.log(desiredRotation);

      let curRotation = rotatedObject.data('cur-rotation');

      if (!curRotation) {
        curRotation = desiredRotation;
      }

      curRotation = libs_Mathf__WEBPACK_IMPORTED_MODULE_2__["default"].LerpRotation(curRotation, desiredRotation, rotatedObject.data('lerp-speed'));
      rotatedObject.css("transform", 'rotate(' + curRotation + 'deg)');
      rotatedObject.data('cur-rotation', curRotation);
    });
    await Timeout(20);
  }
}

function Timeout(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, time);
  });
}

/***/ }),

/***/ "./src/js/particles.js":
/*!*****************************!*\
  !*** ./src/js/particles.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libs_Mathf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/Mathf */ "./src/js/libs/Mathf.js");
/* harmony import */ var libs_Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/Vector2 */ "./src/js/libs/Vector2.js");
/* harmony import */ var libs_MouseCoords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/MouseCoords */ "./src/js/libs/MouseCoords.js");



 // {
// 	particlePrototype: null,
// 	simContainer: null, //reference to DOM
// 	info: {
// 		"acceleration": [0,-9],
// 		"startingVelocity": [0,0],
// 		"drag": 2,
// 		"edgeBegavior": {
// 			"bottom": "delete"
// 		},
// 		"spawnBehavior": {
// 			"rect": {
// 				"top": 0,
// 				"right": 0,
// 				"bottom": 0.9,
// 				"left": 0
// 			},
// 			"particlesPerSec": 5
// 		},
// 		"maxLifetime": 15
// 	},
// 	particles: [
// 		{
// 			position: {
// 				x: 0,
// 				y: 0,
// 			},
// 			velocity: {
// 				x: 0,
// 				y: 0,
// 			},
// 			ref: null, // reference to DOM
// 		}
// 	],
// },

let particleSystems = [];

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function newParticleSystem(particleDOM) {
  let info = jquery__WEBPACK_IMPORTED_MODULE_0___default()(particleDOM).data("sim-info");

  if (typeof info == "string") {
    info = JSON.parse(info);
  }

  let pSystem = {
    particlePrototypes: jquery__WEBPACK_IMPORTED_MODULE_0___default()(particleDOM).find(".particle-preview"),
    simContainer: jquery__WEBPACK_IMPORTED_MODULE_0___default()(particleDOM).find(".particle-sim-container")[0],
    info: info,
    particles: []
  };
  pSystem.accumulatedParticles = 0;
  pSystem.info.acceleration = new libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"](pSystem.info.acceleration.x, pSystem.info.acceleration.y);
  return pSystem;
}

function newParticle(pSystem) {
  let simContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(pSystem.simContainer);
  let width = simContainer.width();
  let height = simContainer.height();
  let particlePrototype = pSystem.particlePrototypes[Math.floor(Math.random() * pSystem.particlePrototypes.length)];
  let particleDOM = jquery__WEBPACK_IMPORTED_MODULE_0___default()(particlePrototype).clone().appendTo(simContainer);
  particleDOM.removeClass('particle-preview');
  particleDOM.addClass('particle');
  let spawnRect = pSystem.info.spawnBounds;
  let xPosition = randomRange(spawnRect.left, spawnRect.right);
  let yPosition = randomRange(spawnRect.top, spawnRect.bottom);
  let startingVelocity = pSystem.info.startingVelocity;
  let vel = new libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0);

  if (startingVelocity.magnitude) {
    var angle = Math.random() * Math.PI * 2;
    vel.x = Math.cos(angle) * startingVelocity.magnitude;
    vel.y = Math.sin(angle) * startingVelocity.magnitude;
  } else {
    if (startingVelocity.x) {
      vel.x = startingVelocity.x;
    } else if (startingVelocity.minX && startingVelocity.maxX) {
      vel.x = randomRange(startingVelocity.minX, startingVelocity.maxX);
    }

    if (startingVelocity.y) {
      vel.y = startingVelocity.y;
    } else if (startingVelocity.minY && startingVelocity.maxY) {
      vel.y = randomRange(startingVelocity.minY, startingVelocity.maxY);
    }
  }

  let startingRotation = pSystem.info.startingRotation;
  let rotation = 0;

  if (startingRotation.angle) {
    rotation = startingRotation.angle;
  } else if (startingRotation.min && startingRotation.max) {
    rotation = randomRange(startingRotation.min, startingRotation.max);
  }

  let startingAngularVelocity = pSystem.info.startingAngularVelocity;
  let angularVelocity = 0;

  if (startingAngularVelocity.velocity) {
    angularVelocity = startingAngularVelocity.velocity;
  } else if (startingAngularVelocity.min && startingAngularVelocity.max) {
    angularVelocity = randomRange(startingAngularVelocity.min, startingAngularVelocity.max);
  } // //console.log(particleDOM);


  let particle = {
    position: new libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"](xPosition * width, yPosition * height),
    velocity: vel,
    rotation: rotation,
    angularVelocity: angularVelocity,
    ref: particleDOM[0],
    ttl: pSystem.info.maxLifetime
  };
  pSystem.particles.push(particle);
  return particle;
}

function UpdateSystems(tick) {
  for (let system of particleSystems) {
    if (checkVisible(system.simContainer)) {
      UpdateParticleSystem(system, tick);
    }
  }
}

function UpdateParticleSystem(system, tick) {
  let simContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(system.simContainer);
  let width = simContainer.width();
  let height = simContainer.height(); //Spawn particles

  if (system.particles.length < system.info.maxParticles) {
    let spawnRate = system.info.spawnRate;

    if (system.info.spawnRateMode == "areaRelative") {
      spawnRate *= width * (system.info.spawnBounds.right - system.info.spawnBounds.left) * height * (system.info.spawnBounds.bottom - system.info.spawnBounds.top);
    }

    system.accumulatedParticles += tick * spawnRate;
    system.accumulatedParticles = Math.min(system.info.maxParticles - system.particles.length, system.accumulatedParticles);

    while (system.accumulatedParticles >= 1) {
      system.accumulatedParticles--;
      newParticle(system);
    }
  } //Update particle velocity, position & ttl


  let acceleration = system.info.acceleration.Scale(tick);
  let drag = system.info.drag;
  let containerPosition = simContainer.offset();
  let relCoor = new libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"](containerPosition.left, containerPosition.top);
  relCoor = libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].Sub(relCoor, libs_MouseCoords__WEBPACK_IMPORTED_MODULE_3__["default"]);

  for (let i = 0; i < system.particles.length; i++) {
    let particle = system.particles[i]; // //console.log(system.info.acceleration.Scale(0.01),tick)

    particle.velocity = libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].Add(particle.velocity, acceleration);
    let dragSubstraction = particle.velocity.Scale(1 - 1 / (1 + drag * tick)); // //console.log(particle.velocity);

    particle.velocity = libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].Sub(particle.velocity, dragSubstraction);

    if (system.info.cursorPull && !isMobileDevice()) {
      ParticleCursorPull(particle, 700, 1.5, tick, relCoor);
    }

    particle.rotation += particle.angularVelocity;
    particle.position = libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].Add(particle.position, particle.velocity.Scale(tick));
    particle.ttl -= tick;
    particle.ref.style.left = particle.position.x + "px";
    particle.ref.style.top = particle.position.y + "px";
    particle.ref.style.transform = "translate(-50%, -50%) rotate(" + particle.rotation + "deg)";
  }

  let eliminationBounds = system.info.eliminationBounds;
  let realBounds = {
    top: eliminationBounds.top * height,
    bottom: eliminationBounds.bottom * height,
    right: eliminationBounds.right * width,
    left: eliminationBounds.left * width
  }; //Delete particles

  for (let i = 0; i < system.particles.length; i++) {
    let particle = system.particles[i];
    let xBounds = particle.position.x >= realBounds.left && particle.position.x <= realBounds.right;
    let yBounds = particle.position.y >= realBounds.top && particle.position.y <= realBounds.bottom;

    if (!(xBounds && yBounds) || particle.ttl <= 0) {
      // //console.log(particle.position, realBounds)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(particle.ref).remove();
      system.particles.splice(i, 1);
      i--;
    }
  }
}

function ParticleCursorPull(particle, force, minDistance, tick, containerRelMousePos) {
  let relCoor = libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].Add(containerRelMousePos, particle.position);

  if (relCoor.x ** 2 + relCoor.y ** 2 > 40000) {
    // particle.ref.style.backgroundColor = 'transparent'; 
    return;
  } // particle.ref.style.backgroundColor = 'green'; 


  var length = relCoor.Length() / 100;
  let pushVector = relCoor.Normalized().Scale(force * tick / (length * length + minDistance));
  particle.position = libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].Add(particle.position, pushVector);
  particle.velocity = libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].Add(particle.velocity, pushVector);
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  let systems = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.particle-system');

  for (let system of systems) {
    particleSystems.push(newParticleSystem(system)); // newParticle(particleSystems[0]);
  }

  if (systems.length > 0) {
    UpdateLoop();
  } // //console.log(newParticle(particleSystems[0]));

});

function Timeout(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, time);
  });
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

async function UpdateLoop() {
  const fixedDeltaTime = 0.02;
  const maxDeltaTime = 0.6;
  let lastFrameTime = performance.now();
  let deltaTime = fixedDeltaTime;

  while (true) {
    let startFrameTime = performance.now(); // //console.log(deltaTime);

    deltaTime = Math.min(maxDeltaTime, deltaTime);
    UpdateSystems(deltaTime); // ComponentEventHandler.CallBuiltinEvents();

    let endFrameTime = performance.now();
    let frameTime = (endFrameTime - startFrameTime) / 1000;
    let timeLeft = fixedDeltaTime - frameTime;
    timeLeft = Math.max(0, timeLeft);
    let deltaTime_ms = endFrameTime - lastFrameTime;
    deltaTime = deltaTime_ms / 1000;
    lastFrameTime = endFrameTime;
    await Timeout(timeLeft * 1000);
  }
}

function isMobileDevice() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
}

;

/***/ }),

/***/ "./src/js/router/index.js":
/*!********************************!*\
  !*** ./src/js/router/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var _views_BookingView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/BookingView.vue */ "./src/js/views/BookingView.vue");
/* harmony import */ var _views_BookingStep1View_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/BookingStep1View.vue */ "./src/js/views/BookingStep1View.vue");
/* harmony import */ var _views_BookingStep2View_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/BookingStep2View.vue */ "./src/js/views/BookingStep2View.vue");
/* harmony import */ var _views_BookingStep3View_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/BookingStep3View.vue */ "./src/js/views/BookingStep3View.vue");
/* harmony import */ var _views_BookingRecovery_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/BookingRecovery.vue */ "./src/js/views/BookingRecovery.vue");







const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.createRouter)({
  base: '/',
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.createWebHistory)(),
  routes: [{
    path: '/book/',
    name: 'booking',
    redirect: {
      name: 'booking-step-1'
    },
    component: _views_BookingView_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    children: [{
      path: 'step1',
      name: 'booking-step-1',
      component: _views_BookingStep1View_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      meta: {
        minCompletion: 0
      }
    }, {
      path: 'step2',
      name: 'booking-step-2',
      component: _views_BookingStep2View_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      meta: {
        minCompletion: 1,
        prevStepRoute: {
          name: 'booking-step-1'
        }
      }
    }, {
      path: 'step3',
      name: 'booking-step-3',
      component: _views_BookingStep3View_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      meta: {
        minCompletion: 2,
        prevStepRoute: {
          name: 'booking-step-2'
        }
      }
    }]
  }, {
    path: '/recover-booking',
    name: 'booking-recovery',
    component: _views_BookingRecovery_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }]
});
router.beforeEach((to, from) => {
  if (to.meta.minCompletion) {
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore)();

    if (bookingStore.stepCompletion >= to.meta.minCompletion) {
      return true;
    } else {
      if (to.meta.prevStepRoute) {
        // if prev redirect exists
        return to.meta.prevStepRoute; // redirect to prev step
      }

      return false;
    }
  }

  return true;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/js/slick.js":
/*!*************************!*\
  !*** ./src/js/slick.js ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function (slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function (now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function () {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && typeof asNavFor === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = $sf.is(':focus');

          _.autoPlay();
        }
      }, 0);
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        centerOffset;

    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.image-slider').slick({
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".image-slider-big",
    centerMode: true
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.image-slider-big').slick({
    arrows: false,
    speed: 1000,
    fade: true,
    asNavFor: ".image-slider",
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true
      }
    }]
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider-gallery').slick({
    dots: true,
    arrows: true,
    speed: 1000,
    rows: 2,
    slidesPerRow: 1,
    slidesToShow: 4,
    responsive: [{
      breakpoint: 768,
      settings: {
        rows: 4,
        slidesPerRow: 1,
        slidesToShow: 2
      }
    }]
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-slider').slick({
    infinite: false,
    dots: true,
    arrows: false,
    speed: 1000,
    rows: 2,
    slidesPerRow: 1,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        rows: 2,
        slidesToShow: 2
      }
    }, {
      breakpoint: 568,
      settings: {
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: 1,
        centerMode: true
      }
    }]
  });
});

/***/ }),

/***/ "./src/js/stores/BookingStore.js":
/*!***************************************!*\
  !*** ./src/js/stores/BookingStore.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBookingStore": () => (/* binding */ useBookingStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
/* harmony import */ var _stores_ErrorModalStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/ErrorModalStore.js */ "./src/js/stores/ErrorModalStore.js");


const useBookingStore = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)({
  id: 'BookingStore',
  state: () => ({
    openStep: 0,
    //client side data
    selectedDate: new Date(),
    //loaded data
    selectedRoomID: '',
    roomData: {},
    selectedRange: null,
    selectedPeopleCount: 0,
    itemData: null,
    itemOrders: null,
    contactFields: [{
      title: 'Name',
      obligatory: true,
      placeholder: 'David',
      regex: /(.|\s)*\S(.|\s)*/,
      value: '',
      invalid: false,
      invalidMessage: 'Enter a name'
    }, {
      title: 'Email',
      obligatory: true,
      placeholder: 'example@example.com',
      regex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      value: '',
      invalid: false,
      invalidMessage: 'Enter a valid email'
    }, {
      title: 'Phone',
      obligatory: true,
      placeholder: '+919367788755',
      regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      value: '',
      invalid: false,
      invalidMessage: 'Enter a valid phone number'
    }],
    contactDetailsValid: false,
    orderDescription: '',
    packData: [],
    paymentMethods: null,
    // paymentMethods: [
    // 	{
    //		id: 20
    // 		preview: require('assetDir/images/knet.png'),
    // 		shadowColor: '#AAA'
    // 	},
    // ],
    selectedPaymentMethod: 0,
    packOrders: [],
    reservationToken: null,
    reservationTTL: null,
    isStaff: false,
    scrollToRoomSelection: false
  }),
  getters: {
    roomPrice: function () {
      if (this.selectedRange == null) {
        return 0;
      }

      if (!this.roomData[this.selectedRoomID].scheduleData[this.dictFormatedSelectedDate]) {
        return 0;
      }

      let startIndex = this.selectedRange.startIndex;
      let endIndex = this.selectedRange.endIndex;
      let price = 0;

      for (var i = startIndex; i <= endIndex; i++) {
        price += this.roomData[this.selectedRoomID].scheduleData[this.dictFormatedSelectedDate].occupancyData[i].cost * this.selectedPeopleCount;
      }

      return price;
    },
    totalPrice: function () {
      let price = this.roomPrice;

      for (var i = 0; i < this.activeOrders.length; i++) {
        price += this.activeOrders[i].count * this.activeOrders[i].price;
      }

      for (var i = 0; i < this.packOrders.length; i++) {
        price += this.packOrders[i].price;
      }

      return price;
    },
    dictFormatedSelectedDate: function () {
      return this.formatDictDate(this.selectedDate);
    },
    stepCompletion: function () {
      if (this.selectedRange != null) {
        if (this.reservationToken) {
          if (this.contactDetailsValid) {
            return 3;
          }

          return 2;
        }

        return 1;
      }

      return 0;
    },
    activeOrders: function () {
      let activeOrders = [];

      if (this.itemOrders == null) {
        return activeOrders;
      }

      for (var i = 0; i < this.itemOrders.length; i++) {
        if (this.itemOrders[i].active) {
          activeOrders.push(this.itemOrders[i]);
        }
      }

      return activeOrders;
    }
  },
  actions: {
    formatDictDate: function (date) {
      return date.toLocaleDateString('fr-CA');
    },
    formatDisplayDate: function (date) {
      return date.toLocaleDateString('en-GB');
    },
    startTimerCycle: async function () {
      while (true) {
        await delay(1000);

        if (this.reservationTTL != null) {
          this.reservationTTL -= 1;

          if (this.reservationTTL <= 0) {
            this.reservationTTL = null;
            this.endReservation();
          }
        }
      }
    },
    endReservation: function () {
      this.reservationToken = null;
      this.reservationTTL = null;
    }
  }
});

const delay = ms => new Promise(res => setTimeout(res, ms));

 //https://jsben.ch/AhMN6

function GetCookieValueByRegEx(a, b) {
  b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

/***/ }),

/***/ "./src/js/stores/ErrorModalStore.js":
/*!******************************************!*\
  !*** ./src/js/stores/ErrorModalStore.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useErrorModalStore": () => (/* binding */ useErrorModalStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.vue */ "./src/js/App.vue");


const useErrorModalStore = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)({
  id: 'ErrorModalStore',
  state: () => ({
    modalOpen: false,
    modalTitle: '',
    modalText: ''
  }),
  getters: {},
  actions: {
    OpenModal: function (title, text) {
      this.modalOpen = true;
      this.modalTitle = title;
      this.modalText = text;
    }
  }
});


/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/InputField.vue?vue&type=style&index=0&id=680fe91c&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/InputField.vue?vue&type=style&index=0&id=680fe91c&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Item.vue?vue&type=style&index=0&id=f09ecb42&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Item.vue?vue&type=style&index=0&id=f09ecb42&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCart.vue?vue&type=style&index=0&id=2a5bc574&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCart.vue?vue&type=style&index=0&id=2a5bc574&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCartCheckout.vue?vue&type=style&index=0&id=9e68904c&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCartCheckout.vue?vue&type=style&index=0&id=9e68904c&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingRecovery.vue?vue&type=style&index=0&id=01a9f460&scoped=true&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingRecovery.vue?vue&type=style&index=0&id=01a9f460&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep1View.vue?vue&type=style&index=0&id=a6cad322&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep1View.vue?vue&type=style&index=0&id=a6cad322&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep2View.vue?vue&type=style&index=0&id=40df0570&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep2View.vue?vue&type=style&index=0&id=40df0570&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep3View.vue?vue&type=style&index=0&id=55b9171e&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep3View.vue?vue&type=style&index=0&id=55b9171e&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/App.vue":
/*!************************!*\
  !*** ./src/js/App.vue ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* reexport safe */ _App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.api),
/* harmony export */   "axios": () => (/* reexport safe */ _App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__.axios),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_3ea74058_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3ea74058&scoped=true */ "./src/js/App.vue?vue&type=template&id=3ea74058&scoped=true");
/* harmony import */ var _App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&setup=true&lang=js */ "./src/js/App.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_3ea74058_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css */ "./src/js/App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_3ea74058_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3ea74058"],['__file',"src/js/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/components/Calendar.vue":
/*!****************************************!*\
  !*** ./src/js/components/Calendar.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calendar_vue_vue_type_template_id_c2dc59ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=c2dc59ec&scoped=true */ "./src/js/components/Calendar.vue?vue&type=template&id=c2dc59ec&scoped=true");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js */ "./src/js/components/Calendar.vue?vue&type=script&lang=js");
/* harmony import */ var _Calendar_vue_vue_type_style_index_0_id_c2dc59ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true */ "./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Calendar_vue_vue_type_template_id_c2dc59ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-c2dc59ec"],['__file',"src/js/components/Calendar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/components/IconClock.vue":
/*!*****************************************!*\
  !*** ./src/js/components/IconClock.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IconClock_vue_vue_type_template_id_55254579__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconClock.vue?vue&type=template&id=55254579 */ "./src/js/components/IconClock.vue?vue&type=template&id=55254579");
/* harmony import */ var _IconClock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconClock.vue?vue&type=script&lang=js */ "./src/js/components/IconClock.vue?vue&type=script&lang=js");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_IconClock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IconClock_vue_vue_type_template_id_55254579__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/js/components/IconClock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/components/IconPeople.vue":
/*!******************************************!*\
  !*** ./src/js/components/IconPeople.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IconPeople_vue_vue_type_template_id_5dab5234__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconPeople.vue?vue&type=template&id=5dab5234 */ "./src/js/components/IconPeople.vue?vue&type=template&id=5dab5234");
/* harmony import */ var _IconPeople_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconPeople.vue?vue&type=script&lang=js */ "./src/js/components/IconPeople.vue?vue&type=script&lang=js");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_IconPeople_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IconPeople_vue_vue_type_template_id_5dab5234__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/js/components/IconPeople.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/components/InputField.vue":
/*!******************************************!*\
  !*** ./src/js/components/InputField.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputField_vue_vue_type_template_id_680fe91c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputField.vue?vue&type=template&id=680fe91c&scoped=true */ "./src/js/components/InputField.vue?vue&type=template&id=680fe91c&scoped=true");
/* harmony import */ var _InputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputField.vue?vue&type=script&lang=js */ "./src/js/components/InputField.vue?vue&type=script&lang=js");
/* harmony import */ var _InputField_vue_vue_type_style_index_0_id_680fe91c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputField.vue?vue&type=style&index=0&id=680fe91c&lang=scss&scoped=true */ "./src/js/components/InputField.vue?vue&type=style&index=0&id=680fe91c&lang=scss&scoped=true");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_InputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InputField_vue_vue_type_template_id_680fe91c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-680fe91c"],['__file',"src/js/components/InputField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/components/Item.vue":
/*!************************************!*\
  !*** ./src/js/components/Item.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item_vue_vue_type_template_id_f09ecb42_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item.vue?vue&type=template&id=f09ecb42&scoped=true */ "./src/js/components/Item.vue?vue&type=template&id=f09ecb42&scoped=true");
/* harmony import */ var _Item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item.vue?vue&type=script&lang=js */ "./src/js/components/Item.vue?vue&type=script&lang=js");
/* harmony import */ var _Item_vue_vue_type_style_index_0_id_f09ecb42_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item.vue?vue&type=style&index=0&id=f09ecb42&lang=scss&scoped=true */ "./src/js/components/Item.vue?vue&type=style&index=0&id=f09ecb42&lang=scss&scoped=true");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Item_vue_vue_type_template_id_f09ecb42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f09ecb42"],['__file',"src/js/components/Item.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/components/PeopleCountSelector.vue":
/*!***************************************************!*\
  !*** ./src/js/components/PeopleCountSelector.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PeopleCountSelector_vue_vue_type_template_id_b35233ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeopleCountSelector.vue?vue&type=template&id=b35233ba&scoped=true */ "./src/js/components/PeopleCountSelector.vue?vue&type=template&id=b35233ba&scoped=true");
/* harmony import */ var _PeopleCountSelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleCountSelector.vue?vue&type=script&setup=true&lang=js */ "./src/js/components/PeopleCountSelector.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _PeopleCountSelector_vue_vue_type_style_index_0_id_b35233ba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true */ "./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PeopleCountSelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PeopleCountSelector_vue_vue_type_template_id_b35233ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-b35233ba"],['__file',"src/js/components/PeopleCountSelector.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/components/ShoppingCart.vue":
/*!********************************************!*\
  !*** ./src/js/components/ShoppingCart.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShoppingCart_vue_vue_type_template_id_2a5bc574_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShoppingCart.vue?vue&type=template&id=2a5bc574&scoped=true */ "./src/js/components/ShoppingCart.vue?vue&type=template&id=2a5bc574&scoped=true");
/* harmony import */ var _ShoppingCart_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingCart.vue?vue&type=script&setup=true&lang=js */ "./src/js/components/ShoppingCart.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _ShoppingCart_vue_vue_type_style_index_0_id_2a5bc574_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShoppingCart.vue?vue&type=style&index=0&id=2a5bc574&lang=scss&scoped=true */ "./src/js/components/ShoppingCart.vue?vue&type=style&index=0&id=2a5bc574&lang=scss&scoped=true");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ShoppingCart_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ShoppingCart_vue_vue_type_template_id_2a5bc574_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2a5bc574"],['__file',"src/js/components/ShoppingCart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/components/ShoppingCartCheckout.vue":
/*!****************************************************!*\
  !*** ./src/js/components/ShoppingCartCheckout.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShoppingCartCheckout_vue_vue_type_template_id_9e68904c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShoppingCartCheckout.vue?vue&type=template&id=9e68904c&scoped=true */ "./src/js/components/ShoppingCartCheckout.vue?vue&type=template&id=9e68904c&scoped=true");
/* harmony import */ var _ShoppingCartCheckout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingCartCheckout.vue?vue&type=script&setup=true&lang=js */ "./src/js/components/ShoppingCartCheckout.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _ShoppingCartCheckout_vue_vue_type_style_index_0_id_9e68904c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShoppingCartCheckout.vue?vue&type=style&index=0&id=9e68904c&lang=scss&scoped=true */ "./src/js/components/ShoppingCartCheckout.vue?vue&type=style&index=0&id=9e68904c&lang=scss&scoped=true");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ShoppingCartCheckout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ShoppingCartCheckout_vue_vue_type_template_id_9e68904c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-9e68904c"],['__file',"src/js/components/ShoppingCartCheckout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/components/TimeRangeSelector.vue":
/*!*************************************************!*\
  !*** ./src/js/components/TimeRangeSelector.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TimeRangeSelector_vue_vue_type_template_id_f6c0005a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeRangeSelector.vue?vue&type=template&id=f6c0005a&scoped=true */ "./src/js/components/TimeRangeSelector.vue?vue&type=template&id=f6c0005a&scoped=true");
/* harmony import */ var _TimeRangeSelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeRangeSelector.vue?vue&type=script&setup=true&lang=js */ "./src/js/components/TimeRangeSelector.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _TimeRangeSelector_vue_vue_type_style_index_0_id_f6c0005a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true */ "./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_TimeRangeSelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TimeRangeSelector_vue_vue_type_template_id_f6c0005a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f6c0005a"],['__file',"src/js/components/TimeRangeSelector.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/views/BookingRecovery.vue":
/*!******************************************!*\
  !*** ./src/js/views/BookingRecovery.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookingRecovery_vue_vue_type_template_id_01a9f460_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookingRecovery.vue?vue&type=template&id=01a9f460&scoped=true */ "./src/js/views/BookingRecovery.vue?vue&type=template&id=01a9f460&scoped=true");
/* harmony import */ var _BookingRecovery_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingRecovery.vue?vue&type=script&setup=true&lang=js */ "./src/js/views/BookingRecovery.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _BookingRecovery_vue_vue_type_style_index_0_id_01a9f460_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookingRecovery.vue?vue&type=style&index=0&id=01a9f460&scoped=true&lang=scss */ "./src/js/views/BookingRecovery.vue?vue&type=style&index=0&id=01a9f460&scoped=true&lang=scss");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingRecovery_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingRecovery_vue_vue_type_template_id_01a9f460_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-01a9f460"],['__file',"src/js/views/BookingRecovery.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/views/BookingStep1View.vue":
/*!*******************************************!*\
  !*** ./src/js/views/BookingStep1View.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookingStep1View_vue_vue_type_template_id_a6cad322_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookingStep1View.vue?vue&type=template&id=a6cad322&scoped=true */ "./src/js/views/BookingStep1View.vue?vue&type=template&id=a6cad322&scoped=true");
/* harmony import */ var _BookingStep1View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingStep1View.vue?vue&type=script&setup=true&lang=js */ "./src/js/views/BookingStep1View.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _BookingStep1View_vue_vue_type_style_index_0_id_a6cad322_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookingStep1View.vue?vue&type=style&index=0&id=a6cad322&scoped=true&lang=scss */ "./src/js/views/BookingStep1View.vue?vue&type=style&index=0&id=a6cad322&scoped=true&lang=scss");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingStep1View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingStep1View_vue_vue_type_template_id_a6cad322_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a6cad322"],['__file',"src/js/views/BookingStep1View.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/views/BookingStep2View.vue":
/*!*******************************************!*\
  !*** ./src/js/views/BookingStep2View.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookingStep2View_vue_vue_type_template_id_40df0570_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookingStep2View.vue?vue&type=template&id=40df0570&scoped=true */ "./src/js/views/BookingStep2View.vue?vue&type=template&id=40df0570&scoped=true");
/* harmony import */ var _BookingStep2View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingStep2View.vue?vue&type=script&setup=true&lang=js */ "./src/js/views/BookingStep2View.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _BookingStep2View_vue_vue_type_style_index_0_id_40df0570_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookingStep2View.vue?vue&type=style&index=0&id=40df0570&scoped=true&lang=scss */ "./src/js/views/BookingStep2View.vue?vue&type=style&index=0&id=40df0570&scoped=true&lang=scss");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingStep2View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingStep2View_vue_vue_type_template_id_40df0570_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-40df0570"],['__file',"src/js/views/BookingStep2View.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/views/BookingStep3View.vue":
/*!*******************************************!*\
  !*** ./src/js/views/BookingStep3View.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookingStep3View_vue_vue_type_template_id_55b9171e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookingStep3View.vue?vue&type=template&id=55b9171e&scoped=true */ "./src/js/views/BookingStep3View.vue?vue&type=template&id=55b9171e&scoped=true");
/* harmony import */ var _BookingStep3View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingStep3View.vue?vue&type=script&setup=true&lang=js */ "./src/js/views/BookingStep3View.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _BookingStep3View_vue_vue_type_style_index_0_id_55b9171e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookingStep3View.vue?vue&type=style&index=0&id=55b9171e&scoped=true&lang=scss */ "./src/js/views/BookingStep3View.vue?vue&type=style&index=0&id=55b9171e&scoped=true&lang=scss");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingStep3View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingStep3View_vue_vue_type_template_id_55b9171e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-55b9171e"],['__file',"src/js/views/BookingStep3View.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/views/BookingView.vue":
/*!**************************************!*\
  !*** ./src/js/views/BookingView.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookingView_vue_vue_type_template_id_3ba2f8f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookingView.vue?vue&type=template&id=3ba2f8f0&scoped=true */ "./src/js/views/BookingView.vue?vue&type=template&id=3ba2f8f0&scoped=true");
/* harmony import */ var _BookingView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingView.vue?vue&type=script&setup=true&lang=js */ "./src/js/views/BookingView.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _BookingView_vue_vue_type_style_index_0_id_3ba2f8f0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss */ "./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss");
/* harmony import */ var _home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_george_projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingView_vue_vue_type_template_id_3ba2f8f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3ba2f8f0"],['__file',"src/js/views/BookingView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/App.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************!*\
  !*** ./src/js/App.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "api": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.api),
/* harmony export */   "axios": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__.axios)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./App.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/components/Calendar.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/js/components/Calendar.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Calendar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/js/components/IconClock.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/js/components/IconClock.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IconClock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IconClock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IconClock.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconClock.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/js/components/IconPeople.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/js/components/IconPeople.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IconPeople_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_IconPeople_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IconPeople.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconPeople.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/js/components/InputField.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/js/components/InputField.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_InputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_InputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./InputField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/InputField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/js/components/Item.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/js/components/Item.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Item.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Item.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/js/components/PeopleCountSelector.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./src/js/components/PeopleCountSelector.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_PeopleCountSelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_PeopleCountSelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./PeopleCountSelector.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/components/ShoppingCart.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/js/components/ShoppingCart.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_ShoppingCart_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_ShoppingCart_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./ShoppingCart.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCart.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/components/ShoppingCartCheckout.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./src/js/components/ShoppingCartCheckout.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_ShoppingCartCheckout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_ShoppingCartCheckout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./ShoppingCartCheckout.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCartCheckout.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/components/TimeRangeSelector.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./src/js/components/TimeRangeSelector.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_TimeRangeSelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_TimeRangeSelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./TimeRangeSelector.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/views/BookingRecovery.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/js/views/BookingRecovery.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingRecovery_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingRecovery_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingRecovery.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingRecovery.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/views/BookingStep1View.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./src/js/views/BookingStep1View.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep1View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep1View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep1View.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep1View.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/views/BookingStep2View.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./src/js/views/BookingStep2View.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep2View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep2View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep2View.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep2View.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/views/BookingStep3View.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./src/js/views/BookingStep3View.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep3View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep3View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep3View.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep3View.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/views/BookingView.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./src/js/views/BookingView.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingView.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/App.vue?vue&type=template&id=3ea74058&scoped=true":
/*!******************************************************************!*\
  !*** ./src/js/App.vue?vue&type=template&id=3ea74058&scoped=true ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_App_vue_vue_type_template_id_3ea74058_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_App_vue_vue_type_template_id_3ea74058_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./App.vue?vue&type=template&id=3ea74058&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=template&id=3ea74058&scoped=true");


/***/ }),

/***/ "./src/js/components/Calendar.vue?vue&type=template&id=c2dc59ec&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/js/components/Calendar.vue?vue&type=template&id=c2dc59ec&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_Calendar_vue_vue_type_template_id_c2dc59ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_Calendar_vue_vue_type_template_id_c2dc59ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Calendar.vue?vue&type=template&id=c2dc59ec&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=template&id=c2dc59ec&scoped=true");


/***/ }),

/***/ "./src/js/components/IconClock.vue?vue&type=template&id=55254579":
/*!***********************************************************************!*\
  !*** ./src/js/components/IconClock.vue?vue&type=template&id=55254579 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IconClock_vue_vue_type_template_id_55254579__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IconClock_vue_vue_type_template_id_55254579__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IconClock.vue?vue&type=template&id=55254579 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconClock.vue?vue&type=template&id=55254579");


/***/ }),

/***/ "./src/js/components/IconPeople.vue?vue&type=template&id=5dab5234":
/*!************************************************************************!*\
  !*** ./src/js/components/IconPeople.vue?vue&type=template&id=5dab5234 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IconPeople_vue_vue_type_template_id_5dab5234__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_IconPeople_vue_vue_type_template_id_5dab5234__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./IconPeople.vue?vue&type=template&id=5dab5234 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/IconPeople.vue?vue&type=template&id=5dab5234");


/***/ }),

/***/ "./src/js/components/InputField.vue?vue&type=template&id=680fe91c&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/js/components/InputField.vue?vue&type=template&id=680fe91c&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_InputField_vue_vue_type_template_id_680fe91c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_InputField_vue_vue_type_template_id_680fe91c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./InputField.vue?vue&type=template&id=680fe91c&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/InputField.vue?vue&type=template&id=680fe91c&scoped=true");


/***/ }),

/***/ "./src/js/components/Item.vue?vue&type=template&id=f09ecb42&scoped=true":
/*!******************************************************************************!*\
  !*** ./src/js/components/Item.vue?vue&type=template&id=f09ecb42&scoped=true ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_Item_vue_vue_type_template_id_f09ecb42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_Item_vue_vue_type_template_id_f09ecb42_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Item.vue?vue&type=template&id=f09ecb42&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Item.vue?vue&type=template&id=f09ecb42&scoped=true");


/***/ }),

/***/ "./src/js/components/PeopleCountSelector.vue?vue&type=template&id=b35233ba&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/js/components/PeopleCountSelector.vue?vue&type=template&id=b35233ba&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_PeopleCountSelector_vue_vue_type_template_id_b35233ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_PeopleCountSelector_vue_vue_type_template_id_b35233ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./PeopleCountSelector.vue?vue&type=template&id=b35233ba&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=template&id=b35233ba&scoped=true");


/***/ }),

/***/ "./src/js/components/ShoppingCart.vue?vue&type=template&id=2a5bc574&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/js/components/ShoppingCart.vue?vue&type=template&id=2a5bc574&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_ShoppingCart_vue_vue_type_template_id_2a5bc574_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_ShoppingCart_vue_vue_type_template_id_2a5bc574_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./ShoppingCart.vue?vue&type=template&id=2a5bc574&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCart.vue?vue&type=template&id=2a5bc574&scoped=true");


/***/ }),

/***/ "./src/js/components/ShoppingCartCheckout.vue?vue&type=template&id=9e68904c&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/js/components/ShoppingCartCheckout.vue?vue&type=template&id=9e68904c&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_ShoppingCartCheckout_vue_vue_type_template_id_9e68904c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_ShoppingCartCheckout_vue_vue_type_template_id_9e68904c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./ShoppingCartCheckout.vue?vue&type=template&id=9e68904c&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCartCheckout.vue?vue&type=template&id=9e68904c&scoped=true");


/***/ }),

/***/ "./src/js/components/TimeRangeSelector.vue?vue&type=template&id=f6c0005a&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./src/js/components/TimeRangeSelector.vue?vue&type=template&id=f6c0005a&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_TimeRangeSelector_vue_vue_type_template_id_f6c0005a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_TimeRangeSelector_vue_vue_type_template_id_f6c0005a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./TimeRangeSelector.vue?vue&type=template&id=f6c0005a&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=template&id=f6c0005a&scoped=true");


/***/ }),

/***/ "./src/js/views/BookingRecovery.vue?vue&type=template&id=01a9f460&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/js/views/BookingRecovery.vue?vue&type=template&id=01a9f460&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingRecovery_vue_vue_type_template_id_01a9f460_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingRecovery_vue_vue_type_template_id_01a9f460_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingRecovery.vue?vue&type=template&id=01a9f460&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingRecovery.vue?vue&type=template&id=01a9f460&scoped=true");


/***/ }),

/***/ "./src/js/views/BookingStep1View.vue?vue&type=template&id=a6cad322&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/js/views/BookingStep1View.vue?vue&type=template&id=a6cad322&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep1View_vue_vue_type_template_id_a6cad322_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep1View_vue_vue_type_template_id_a6cad322_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep1View.vue?vue&type=template&id=a6cad322&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep1View.vue?vue&type=template&id=a6cad322&scoped=true");


/***/ }),

/***/ "./src/js/views/BookingStep2View.vue?vue&type=template&id=40df0570&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/js/views/BookingStep2View.vue?vue&type=template&id=40df0570&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep2View_vue_vue_type_template_id_40df0570_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep2View_vue_vue_type_template_id_40df0570_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep2View.vue?vue&type=template&id=40df0570&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep2View.vue?vue&type=template&id=40df0570&scoped=true");


/***/ }),

/***/ "./src/js/views/BookingStep3View.vue?vue&type=template&id=55b9171e&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/js/views/BookingStep3View.vue?vue&type=template&id=55b9171e&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep3View_vue_vue_type_template_id_55b9171e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep3View_vue_vue_type_template_id_55b9171e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep3View.vue?vue&type=template&id=55b9171e&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep3View.vue?vue&type=template&id=55b9171e&scoped=true");


/***/ }),

/***/ "./src/js/views/BookingView.vue?vue&type=template&id=3ba2f8f0&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/js/views/BookingView.vue?vue&type=template&id=3ba2f8f0&scoped=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingView_vue_vue_type_template_id_3ba2f8f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingView_vue_vue_type_template_id_3ba2f8f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingView.vue?vue&type=template&id=3ba2f8f0&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=template&id=3ba2f8f0&scoped=true");


/***/ }),

/***/ "./src/js/App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css":
/*!********************************************************************************!*\
  !*** ./src/js/App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_App_vue_vue_type_style_index_0_id_3ea74058_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css");


/***/ }),

/***/ "./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Calendar_vue_vue_type_style_index_0_id_c2dc59ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true");


/***/ }),

/***/ "./src/js/components/InputField.vue?vue&type=style&index=0&id=680fe91c&lang=scss&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./src/js/components/InputField.vue?vue&type=style&index=0&id=680fe91c&lang=scss&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_InputField_vue_vue_type_style_index_0_id_680fe91c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./InputField.vue?vue&type=style&index=0&id=680fe91c&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/InputField.vue?vue&type=style&index=0&id=680fe91c&lang=scss&scoped=true");


/***/ }),

/***/ "./src/js/components/Item.vue?vue&type=style&index=0&id=f09ecb42&lang=scss&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/js/components/Item.vue?vue&type=style&index=0&id=f09ecb42&lang=scss&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Item_vue_vue_type_style_index_0_id_f09ecb42_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Item.vue?vue&type=style&index=0&id=f09ecb42&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Item.vue?vue&type=style&index=0&id=f09ecb42&lang=scss&scoped=true");


/***/ }),

/***/ "./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_PeopleCountSelector_vue_vue_type_style_index_0_id_b35233ba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true");


/***/ }),

/***/ "./src/js/components/ShoppingCart.vue?vue&type=style&index=0&id=2a5bc574&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/js/components/ShoppingCart.vue?vue&type=style&index=0&id=2a5bc574&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_ShoppingCart_vue_vue_type_style_index_0_id_2a5bc574_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./ShoppingCart.vue?vue&type=style&index=0&id=2a5bc574&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCart.vue?vue&type=style&index=0&id=2a5bc574&lang=scss&scoped=true");


/***/ }),

/***/ "./src/js/components/ShoppingCartCheckout.vue?vue&type=style&index=0&id=9e68904c&lang=scss&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./src/js/components/ShoppingCartCheckout.vue?vue&type=style&index=0&id=9e68904c&lang=scss&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_ShoppingCartCheckout_vue_vue_type_style_index_0_id_9e68904c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./ShoppingCartCheckout.vue?vue&type=style&index=0&id=9e68904c&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/ShoppingCartCheckout.vue?vue&type=style&index=0&id=9e68904c&lang=scss&scoped=true");


/***/ }),

/***/ "./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_TimeRangeSelector_vue_vue_type_style_index_0_id_f6c0005a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true");


/***/ }),

/***/ "./src/js/views/BookingRecovery.vue?vue&type=style&index=0&id=01a9f460&scoped=true&lang=scss":
/*!***************************************************************************************************!*\
  !*** ./src/js/views/BookingRecovery.vue?vue&type=style&index=0&id=01a9f460&scoped=true&lang=scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingRecovery_vue_vue_type_style_index_0_id_01a9f460_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingRecovery.vue?vue&type=style&index=0&id=01a9f460&scoped=true&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingRecovery.vue?vue&type=style&index=0&id=01a9f460&scoped=true&lang=scss");


/***/ }),

/***/ "./src/js/views/BookingStep1View.vue?vue&type=style&index=0&id=a6cad322&scoped=true&lang=scss":
/*!****************************************************************************************************!*\
  !*** ./src/js/views/BookingStep1View.vue?vue&type=style&index=0&id=a6cad322&scoped=true&lang=scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep1View_vue_vue_type_style_index_0_id_a6cad322_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep1View.vue?vue&type=style&index=0&id=a6cad322&scoped=true&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep1View.vue?vue&type=style&index=0&id=a6cad322&scoped=true&lang=scss");


/***/ }),

/***/ "./src/js/views/BookingStep2View.vue?vue&type=style&index=0&id=40df0570&scoped=true&lang=scss":
/*!****************************************************************************************************!*\
  !*** ./src/js/views/BookingStep2View.vue?vue&type=style&index=0&id=40df0570&scoped=true&lang=scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep2View_vue_vue_type_style_index_0_id_40df0570_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep2View.vue?vue&type=style&index=0&id=40df0570&scoped=true&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep2View.vue?vue&type=style&index=0&id=40df0570&scoped=true&lang=scss");


/***/ }),

/***/ "./src/js/views/BookingStep3View.vue?vue&type=style&index=0&id=55b9171e&scoped=true&lang=scss":
/*!****************************************************************************************************!*\
  !*** ./src/js/views/BookingStep3View.vue?vue&type=style&index=0&id=55b9171e&scoped=true&lang=scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep3View_vue_vue_type_style_index_0_id_55b9171e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep3View.vue?vue&type=style&index=0&id=55b9171e&scoped=true&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep3View.vue?vue&type=style&index=0&id=55b9171e&scoped=true&lang=scss");


/***/ }),

/***/ "./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss":
/*!***********************************************************************************************!*\
  !*** ./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_2_use_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingView_vue_vue_type_style_index_0_id_3ba2f8f0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-2.use[0]!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss");


/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/logo.png";

/***/ }),

/***/ "./src/assets/images/svg/arrow-gray.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/arrow-gray.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/arrow-gray.svg";

/***/ }),

/***/ "./src/assets/images/svg/cursor-click.svg":
/*!************************************************!*\
  !*** ./src/assets/images/svg/cursor-click.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/cursor-click.svg";

/***/ }),

/***/ "./src/assets/images/svg/microphone.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/microphone.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/microphone.svg";

/***/ }),

/***/ "./src/assets/images/svg/tick.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/tick.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/tick.svg";

/***/ }),

/***/ "./src/assets/images/svg/warning-icon.svg":
/*!************************************************!*\
  !*** ./src/assets/images/svg/warning-icon.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/warning-icon.svg";

/***/ }),

/***/ "./src/assets/images/waiting.png":
/*!***************************************!*\
  !*** ./src/assets/images/waiting.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/waiting.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_jquery_dist_jquery_js-node_modules_pinia_dis-7e9b61"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map