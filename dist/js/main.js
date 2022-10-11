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



let api = {}; // api.baseURL = "https://karaoke.marmadot.com/wp-admin/admin-ajax.php";

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

      let minutes = totalMinutes % 60; // console.log(minutes);

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
      console.log(response);
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
      console.log(err);
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
        console.log(err);
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
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.vue */ "./src/js/App.vue");
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var _components_Calendar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Calendar.vue */ "./src/js/components/Calendar.vue");
/* harmony import */ var _components_TimeRangeSelector_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TimeRangeSelector.vue */ "./src/js/components/TimeRangeSelector.vue");
/* harmony import */ var _components_PeopleCountSelector_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PeopleCountSelector.vue */ "./src/js/components/PeopleCountSelector.vue");


const __default__ = {
  data() {
    let pendingDateRequests = {};
    let roomNames = Object.keys(this.bookingStore.roomData);

    for (let roomName of roomNames) {
      pendingDateRequests[roomName] = {};
    }

    return {
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
    this.requestSelectedSchedule();
    this.dayRefreshCycle();
  },

  methods: {
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
      }

      console.log('day refresh exit');
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
      _App_vue__WEBPACK_IMPORTED_MODULE_0__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_0__.api.baseURL, data).then(response => {
        console.log(response.data);
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
    checkRangeIntegrity: function () {}
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
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_1__.useBookingStore)();
    const __returned__ = {
      setCookie,
      delay,
      bookingStore,
      axios: _App_vue__WEBPACK_IMPORTED_MODULE_0__.axios,
      api: _App_vue__WEBPACK_IMPORTED_MODULE_0__.api,
      useBookingStore: _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_1__.useBookingStore,
      Calendar: _components_Calendar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      TimeRangeSelector: _components_TimeRangeSelector_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      PeopleCountSelector: _components_PeopleCountSelector_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
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
      console.log(response.data);

      if (response.data.status == 200) {
        this.bookingStore.reservationToken = response.data.token;
        this.bookingStore.reservationTTL = response.data.ttl;
      } else {
        console.log("Reservation returned status " + response.data.status);
        this.errorModalStore.OpenModal("Something went wrong.", "Please try again. amogus");
        this.$router.push(this.prevRoute);
      }
    }).catch(err => {
      console.log(err);
      this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
      this.$router.push(this.prevRoute);
    });

    if (this.bookingStore.itemData == null && this.bookingStore.itemOrders == null) {
      let itemData = new FormData();
      itemData.append('action', 'getItemsList');
      _App_vue__WEBPACK_IMPORTED_MODULE_0__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_0__.api.baseURL, itemData).then(response => {
        console.log(response.data);
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
        console.log(err);
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
    this.$nextTick(function () {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.page-content-wrapper').scrollTop(0);
    });
  },

  methods: {
    attemptSubmit: function () {
      let valid = true;

      for (var i = 0; i < this.bookingStore.contactFields.length; i++) {
        let invalid = !this.bookingStore.contactFields[i].regex.test(this.bookingStore.contactFields[i].value);

        if (this.bookingStore.contactFields[i].obligatory) {
          valid = valid && !invalid;
          this.bookingStore.contactFields[i].invalid = invalid;
        }
      }

      if (valid) {
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
          console.log(error);
          this.paymentModalOpen = false;
          this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
        }.bind(this));
        this.paymentModalOpen = true;
      }
    },
    prevView: function () {
      this.$router.push(this.prevRoute);
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
        this.timerModalActive = false;
        console.log(this.errorModalStore);
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
      console.log(response);
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
          console.log(roomID);

          if (this.bookingStore.roomData[roomID].default) {
            this.bookingStore.selectedRoomID = roomID;
            break;
          }
        }
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
        console.log(response.data);

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
  class: "booking__time-selector"
};
const _hoisted_12 = {
  class: "booking__people-selector-row"
};
const _hoisted_13 = {
  class: "booking__price-wrapper"
};

const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Price", -1
/* HOISTED */
));

const _hoisted_15 = {
  class: "booking__price"
};
const _hoisted_16 = {
  class: "booking__next-button-wrapper"
};

const _hoisted_17 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Next", -1
/* HOISTED */
));

const _hoisted_18 = [_hoisted_17];
const _hoisted_19 = {
  key: 2,
  class: "loader"
};

const _hoisted_20 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")], -1
/* HOISTED */
));

const _hoisted_21 = [_hoisted_20];
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
  , ["highlightColor", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TimeRangeSelector"], {
    highlightColor: $options.selectedRoomColor,
    occupancyData: $options.selectedOccupancyData,
    openTime: $options.selectedSchedule.openTime,
    modelValue: $setup.bookingStore.selectedRange,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.bookingStore.selectedRange = $event)
  }, null, 8
  /* PROPS */
  , ["highlightColor", "occupancyData", "openTime", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PeopleCountSelector"], {
    minCount: $options.selectedRoom.minCapacity,
    maxCount: $options.selectedRoom.maxCapacity,
    highlightColor: $options.selectedRoomColor,
    modelValue: $setup.bookingStore.selectedPeopleCount,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.bookingStore.selectedPeopleCount = $event)
  }, null, 8
  /* PROPS */
  , ["minCount", "maxCount", "highlightColor", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.roomPrice), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__next-button", {
      'disabled': !$options.isStepComplete
    }]),
    onClick: _cache[3] || (_cache[3] = $event => $options.nextView())
  }, _hoisted_18, 2
  /* CLASS */
  )])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, _hoisted_21)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 2112
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
  class: "section-description"
};
const _hoisted_20 = {
  key: 3,
  class: "item-select"
};
const _hoisted_21 = {
  class: "item-select__item-window"
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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, " We have three Celebration Packs for you. You can get them here. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.packData, (pack, i) => {
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
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, " Please select any additional food/beverages/decorations. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.itemData, (category, i) => {
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

const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Pay ");

const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back ");

const _hoisted_15 = {
  class: "def-modal__outer-container container"
};
const _hoisted_16 = {
  class: "def-modal__inner-container def-modal__inner-container--50"
};
const _hoisted_17 = {
  class: "def-modal__top"
};

const _hoisted_18 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "modal-title"
}, "Please select a payment method")], -1
/* HOISTED */
));

const _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--1"
}, null, -1
/* HOISTED */
));

const _hoisted_20 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--2"
}, null, -1
/* HOISTED */
));

const _hoisted_21 = [_hoisted_19, _hoisted_20];
const _hoisted_22 = {
  class: "def-modal__content-wrapper def-modal-class-name modal-content-wrapper"
};
const _hoisted_23 = {
  key: 0,
  class: ""
};
const _hoisted_24 = {
  class: "payment-selection"
};
const _hoisted_25 = {
  class: "payment-selection__methods"
};
const _hoisted_26 = ["onClick"];
const _hoisted_27 = ["src"];
const _hoisted_28 = {
  action: "/payment",
  method: "POST",
  class: "pay-submit-form",
  name: "payment-submit-form"
};
const _hoisted_29 = ["value"];
const _hoisted_30 = ["value"];
const _hoisted_31 = ["value"];
const _hoisted_32 = ["value"];
const _hoisted_33 = {
  key: 1,
  class: "payment-selection__loader"
};

const _hoisted_34 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")], -1
/* HOISTED */
));

const _hoisted_35 = [_hoisted_34];
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
    onNextClicked: _cache[2] || (_cache[2] = $event => $options.attemptSubmit())
  }, {
    "next-text": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_13]),
    "prev-text": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_14]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["nextEnabled"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["def-modal", {
      'modal-active': $data.paymentModalOpen
    }]),
    onClick: _cache[6] || (_cache[6] = $event => $data.paymentModalOpen = false)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__wrapper",
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__cross",
    onClick: _cache[3] || (_cache[3] = $event => $data.paymentModalOpen = false)
  }, _hoisted_21)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [$setup.bookingStore.paymentMethods != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.paymentMethods, (method, i) => {
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
    , _hoisted_27)], 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_26);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "pay-submit-button",
    onClick: _cache[4] || (_cache[4] = $event => $options.submitBooking())
  }, "Confirm Payment"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    value: $data.bookingData,
    name: "bookinData"
  }, null, 8
  /* PROPS */
  , _hoisted_29), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    value: $options.selectedPaymentId,
    name: "selectedPaymentMethod"
  }, null, 8
  /* PROPS */
  , _hoisted_30), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    value: $data.recoveryData,
    name: "recoveryData"
  }, null, 8
  /* PROPS */
  , _hoisted_31), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    value: this.bookingStore.reservationToken,
    name: "token"
  }, null, 8
  /* PROPS */
  , _hoisted_32)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.bookingStore.paymentMethods == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, _hoisted_35)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])], 2
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
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/main.js */ "./src/js/main.js");
/* harmony import */ var _js_VueSetup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/VueSetup.js */ "./src/js/VueSetup.js");
/* harmony import */ var _js_slick_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/slick.min.js */ "./src/js/slick.min.js");
/* harmony import */ var _js_slick_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_slick_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/slider.js */ "./src/js/slider.js");
/* harmony import */ var _js_particles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/particles.js */ "./src/js/particles.js");
 // SCSS

 // JS




 // import './js/swiper.js'





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
    } //console.log(ratioMultiplier);


    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("height", (parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("width")) * ratioMultiplier).toString() + "px");
  });
}

function RatioH() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default().each(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ratio-h'), function (index, val) {
    var ratioMultiplier = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("ratio-multiplier"));

    if (ratioMultiplier == "undefined") {
      ratioMultiplier = 1;
    } //console.log(ratioMultiplier);


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
// 	//console.log('move');
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
  }, 500, function () {// Animation complete.
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
  } // console.log(particleDOM);


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
    UpdateParticleSystem(system, tick);
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
  relCoor = libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].Sub(relCoor, mousePos);

  for (let i = 0; i < system.particles.length; i++) {
    let particle = system.particles[i]; // console.log(system.info.acceleration.Scale(0.01),tick)

    particle.velocity = libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].Add(particle.velocity, acceleration);
    let dragSubstraction = particle.velocity.Scale(1 - 1 / (1 + drag * tick)); // console.log(particle.velocity);

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
      // console.log(particle.position, realBounds)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(particle.ref).remove();
      system.particles.splice(i, 1);
      i--;
    }
  }
}

function ParticleCursorPull(particle, force, minDistance, tick, containerRelMousePos) {
  // let particleObj = $(particle.ref);
  // let particleOffset = particleObj.offset();
  let relCoor = libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"].Add(containerRelMousePos, particle.position); // let relCoor = new Vector2(
  // 	particleObj.offset().left + particleObj.width()/2,
  // 	particleObj.offset().top + particleObj.height()/2
  // );
  // relCoor = Vector2.Sub(relCoor,mousePos);

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
  } // console.log(newParticle(particleSystems[0]));


  UpdateLoop();
});

function Timeout(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, time);
  });
}

async function UpdateLoop() {
  const fixedDeltaTime = 0.02;
  const maxDeltaTime = 0.6;
  let lastFrameTime = performance.now();
  let deltaTime = fixedDeltaTime;

  while (true) {
    let startFrameTime = performance.now();
    console.log(deltaTime);
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

let mousePos = new libs_Vector2__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0);

function FindMousePos() {
  mousePos.x = event.pageX;
  mousePos.y = event.pageY;
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function (event) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("mousemove", function (event) {
    if (event.pageX !== 'undefined') {
      FindMousePos();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("mousewheel", function (event) {
    if (event.pageX !== 'undefined') {
      FindMousePos();
    }
  });
});

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

/***/ "./src/js/slick.min.js":
/*!*****************************!*\
  !*** ./src/js/slick.min.js ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function (i) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
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
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function (i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function () {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == typeof t && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }

      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }

    var t,
        o,
        s,
        n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;

        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;

      r.options.responsive.push(s[t]);
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");

      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;

    return o;
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
    slidesPerRow: 4,
    responsive: [{
      breakpoint: 768,
      settings: {
        rows: 4,
        slidesPerRow: 2
      }
    }]
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-slider').slick({
    dots: true,
    arrows: true,
    speed: 1000,
    rows: 2,
    slidesPerRow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        rows: 4,
        slidesPerRow: 2
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
    reservationTTL: null
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_3ea74058_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3ea74058"],['__file',"src/js/App.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Calendar_vue_vue_type_template_id_c2dc59ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-c2dc59ec"],['__file',"src/js/components/Calendar.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_IconClock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IconClock_vue_vue_type_template_id_55254579__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/js/components/IconClock.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_IconPeople_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IconPeople_vue_vue_type_template_id_5dab5234__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/js/components/IconPeople.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_InputField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InputField_vue_vue_type_template_id_680fe91c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-680fe91c"],['__file',"src/js/components/InputField.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Item_vue_vue_type_template_id_f09ecb42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f09ecb42"],['__file',"src/js/components/Item.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PeopleCountSelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PeopleCountSelector_vue_vue_type_template_id_b35233ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-b35233ba"],['__file',"src/js/components/PeopleCountSelector.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ShoppingCart_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ShoppingCart_vue_vue_type_template_id_2a5bc574_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2a5bc574"],['__file',"src/js/components/ShoppingCart.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ShoppingCartCheckout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ShoppingCartCheckout_vue_vue_type_template_id_9e68904c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-9e68904c"],['__file',"src/js/components/ShoppingCartCheckout.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_TimeRangeSelector_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TimeRangeSelector_vue_vue_type_template_id_f6c0005a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f6c0005a"],['__file',"src/js/components/TimeRangeSelector.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingRecovery_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingRecovery_vue_vue_type_template_id_01a9f460_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-01a9f460"],['__file',"src/js/views/BookingRecovery.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingStep1View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingStep1View_vue_vue_type_template_id_a6cad322_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a6cad322"],['__file',"src/js/views/BookingStep1View.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingStep2View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingStep2View_vue_vue_type_template_id_40df0570_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-40df0570"],['__file',"src/js/views/BookingStep2View.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingStep3View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingStep3View_vue_vue_type_template_id_55b9171e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-55b9171e"],['__file',"src/js/views/BookingStep3View.vue"]])
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
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingView_vue_vue_type_template_id_3ba2f8f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3ba2f8f0"],['__file',"src/js/views/BookingView.vue"]])
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