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



let api = {};
api.baseURL = "https://karaoke.marmadot.com/wp-admin/admin-ajax.php"; // const axios = require(["axios"]).default;


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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

const __default__ = {
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

          if (monthDays[i].getDay() == 1) {
            //last day of the week (fuck you js, day 0 is sunday for some reason)
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'Calendar',

  setup(__props, {
    expose
  }) {
    expose(); // import { PhCalendar} from "phosphor-vue";

    const __returned__ = {
      $: (jquery__WEBPACK_IMPORTED_MODULE_0___default())
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }

}));

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
      descriptionInvalid: false // popup: false,
      // popupText: '',
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
          } else {
            this.descriptionInvalid = true;
          }
        } else {
          this.orderRef.active = true;
        }
      } else {
        this.orderRef.active = false;
      }
    } // sendOrder: function(){
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
    // removePopupAsync: function(){
    // 	setTimeout(function(){
    // 		this.popup = false;
    // 	}.bind(this), 1500);
    // },

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
/* harmony import */ var phosphor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phosphor-vue */ "./node_modules/phosphor-vue/dist/esm/entry.js");
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
      PhUser: phosphor_vue__WEBPACK_IMPORTED_MODULE_0__.PhUser
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
/* harmony import */ var phosphor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phosphor-vue */ "./node_modules/phosphor-vue/dist/esm/entry.js");
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
      PhClock: phosphor_vue__WEBPACK_IMPORTED_MODULE_0__.PhClock
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

const delay = ms => new Promise(res => setTimeout(res, ms));




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'BookingStep1View',

  setup(__props, {
    expose
  }) {
    expose();
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_1__.useBookingStore)();
    const __returned__ = {
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



let APIItemData = [{
  title: 'Desert',
  items: [{
    innerID: "123231",
    title: 'Cake',
    image: '/assets/images/main.jpg',
    price: 2,
    maxCount: 15,
    unit: 'unit',
    description: true,
    placeholder: 'write text here'
  }, {
    innerID: "232321",
    title: 'Cake 2',
    image: '/assets/images/main.jpg',
    price: 2,
    maxCount: 15,
    unit: 'unit',
    description: true,
    placeholder: 'write text here'
  }, {
    innerID: "34534",
    title: 'Cake 3',
    image: '/assets/images/main.jpg',
    price: 2,
    unit: 'unit',
    description: false
  }, {
    innerID: "123123123",
    title: 'Cake 4',
    image: '/assets/images/main.jpg',
    price: 2,
    unit: 'unit',
    description: false
  }, {
    innerID: "123aasd",
    title: 'Cake 5',
    image: '/assets/images/main.jpg',
    price: 2,
    unit: 'unit',
    description: false
  }]
}, {
  title: 'Party',
  items: [{
    innerID: "asdasd",
    title: 'Cake',
    image: '/assets/images/main.jpg',
    price: 2,
    maxCount: 15,
    unit: 'unit',
    description: true,
    placeholder: 'write text here'
  }, {
    innerID: "qweqweq",
    title: 'Cake 2',
    image: '/assets/images/main.jpg',
    price: 2,
    maxCount: 15,
    unit: 'unit',
    description: true,
    placeholder: 'write text here'
  }, {
    innerID: "asdagfdsf",
    title: 'Cake 3',
    image: '/assets/images/main.jpg',
    price: 2,
    unit: 'unit',
    description: false
  }, {
    innerID: "sdfsdfsdf",
    title: 'Cake 4',
    image: '/assets/images/main.jpg',
    price: 2,
    unit: 'unit',
    description: false
  }, {
    innerID: "sdfsfhfghd",
    title: 'Cake 5',
    image: '/assets/images/main.jpg',
    price: 2,
    unit: 'unit',
    description: false
  }]
}];
const __default__ = {
  data() {
    return {
      nextRoute: {
        name: "booking-step-3"
      },
      prevRoute: {
        name: 'booking-step-1'
      }
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
        this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
        this.$router.push(this.prevRoute); //display error that redirects to step 1
      }
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
      }).catch(err => {
        this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
        this.$router.push(this.prevRoute);
      });
    }
  },

  mounted() {},

  methods: {
    addPack: function (pack) {
      this.bookingStore.packOrders.push({
        title: pack.title,
        list: pack.list,
        price: pack.price,
        description: '',
        innerID: pack.innerID
      });
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
      APIItemData,
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
/* harmony import */ var _components_ShoppingCartCheckout_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ShoppingCartCheckout.vue */ "./src/js/components/ShoppingCartCheckout.vue");
/* harmony import */ var _components_InputField_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InputField.vue */ "./src/js/components/InputField.vue");
/* harmony import */ var _components_ShoppingCart_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ShoppingCart.vue */ "./src/js/components/ShoppingCart.vue");



const __default__ = {
  data() {
    return {
      // nextRoute: {name:"booking-step-3"},
      prevRoute: {
        name: 'booking-step-2'
      },
      TOS: false
    };
  },

  watch: {},

  created() {
    this.bookingStore.openStep = 3;
  },

  mounted() {},

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
        let contactFields = [];

        for (var i = 0; i < this.bookingStore.contactFields.length; i++) {
          contactFields.push({
            title: this.bookingStore.contactFields[i].title,
            value: this.bookingStore.contactFields[i].value
          });
        }

        let bookingData = {
          itemOrders: this.bookingStore.activeOrders,
          packageOrders: this.bookingStore.packOrders,
          contactFields: contactFields,
          totalPrice: this.bookingStore.totalPrice,
          halfPrice: this.bookingStore.halfPayment,
          description: this.bookingStore.orderDescription
        };
        bookingData = JSON.stringify(bookingData); // let amougs = {
        // 	data: bookingData,
        // }
        // console.log(JSON.stringify(amougs));
        // console.log(bookingData);

        let data = new FormData();
        console.log(bookingData);
        data.append('action', 'createBooking');
        data.append('bookingData', bookingData);
        data.append('token', this.bookingStore.reservationToken);
        _App_vue__WEBPACK_IMPORTED_MODULE_0__.axios.post(_App_vue__WEBPACK_IMPORTED_MODULE_0__.api.baseURL, data).then(response => {
          console.log(response.data);
          window.location.replace("https://karaoke.marmadot.com/booking-confirmation?token=" + this.bookingStore.reservationToken + '&order=' + response.data.booking_id); // if(response.data.status == 200){
          // }
          // else{
          // 	this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
          // }
        });
      }
    },
    prevView: function () {
      this.$router.push(this.prevRoute);
    }
  },
  computed: {
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
      ShoppingCartCheckout: _components_ShoppingCartCheckout_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      InputField: _components_InputField_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      ShoppingCart: _components_ShoppingCart_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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
/* harmony import */ var phosphor_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! phosphor-vue */ "./node_modules/phosphor-vue/dist/esm/entry.js");



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
      PhClock: phosphor_vue__WEBPACK_IMPORTED_MODULE_3__.PhClock
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

const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"calendar__day-labels\" data-v-c2dc59ec><div class=\"calendar__day-label\" data-v-c2dc59ec> Mon </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Tue </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Wed </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Thu </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Fri </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Sat </div><div class=\"calendar__day-label\" data-v-c2dc59ec> Sun </div></div>", 1);

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
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.selectedDate.getMonth()) + "/", 1
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
const _hoisted_4 = {
  class: "item__title"
};

const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("title");

const _hoisted_6 = {
  class: "item__price"
};

const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("price/unit");

const _hoisted_8 = {
  key: 0,
  class: "item__count-order-wrapper"
};
const _hoisted_9 = ["value"];
const _hoisted_10 = {
  class: "item__count-selector-arrow"
};
const _hoisted_11 = ["src"];
const _hoisted_12 = ["placeholder"];
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
  , _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, () => [_hoisted_5], true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "price", {}, () => [_hoisted_7], true)]), !$props.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
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
    , _hoisted_9);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $props.orderRef.count]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! assetDir/images/svg/arrow-gray.svg */ "./src/assets/images/svg/arrow-gray.svg"),
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_11)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
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
  , _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.orderRef.description]])], 2
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
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PhUser"], {
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
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "4",
    cols: "50",
    placeholder: "Add any additional comments here",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.bookingStore.orderDescription = $event)
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.bookingStore.orderDescription]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.bookingStore.totalPrice), 1
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
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PhClock"], {
    size: 14,
    color: "#fff"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.startTimeFormatted), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PhClock"], {
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
const _hoisted_4 = {
  class: "package__inner"
};
const _hoisted_5 = {
  class: "package__front"
};
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  class: "package__touch-icon"
};
const _hoisted_8 = ["src"];
const _hoisted_9 = {
  class: "package__back"
};
const _hoisted_10 = {
  class: "package__title"
};
const _hoisted_11 = {
  class: "package__text"
};

const _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "This package includes:", -1
/* HOISTED */
));

const _hoisted_13 = {
  class: "package__price"
};
const _hoisted_14 = ["onClick"];
const _hoisted_15 = {
  key: 2,
  class: "section-description"
};
const _hoisted_16 = {
  key: 3,
  class: "item-select"
};
const _hoisted_17 = {
  class: "item-select__item-window"
};
const _hoisted_18 = {
  class: "item-select__item-list-category"
};
const _hoisted_19 = {
  class: "item-select__item-list"
};
const _hoisted_20 = {
  class: "item-select__order-list-window"
};
const _hoisted_21 = {
  class: "shopping-cart-window"
};

const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Confirm ");

const _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back ");

const _hoisted_24 = {
  key: 0,
  class: "loader"
};

const _hoisted_25 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")], -1
/* HOISTED */
));

const _hoisted_26 = [_hoisted_25];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, " We have three Celebration Packs for you. You can choose any one you like. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.packData, (pack, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "package",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: pack.image,
      alt: "preview"
    }, null, 8
    /* PROPS */
    , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: __webpack_require__(/*! assetDir/images/svg/cursor-click.svg */ "./src/assets/images/svg/cursor-click.svg"),
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_8)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pack.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(pack.list, item => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
        key: item
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.item), 1
      /* TEXT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pack.price) + " KD ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "package__button",
      onClick: $event => $options.addPack(pack)
    }, " Add ", 8
    /* PROPS */
    , _hoisted_14)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, " Please select additional services if you need ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.itemData, (category, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "item-select__item-list-wrapper",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.title), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(category.items, (item, j) => {
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
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ShoppingCart"], {
    prevEnabled: true,
    nextEnabled: $options.isStepComplete,
    onPrevClicked: _cache[0] || (_cache[0] = $event => $options.prevView()),
    onNextClicked: _cache[1] || (_cache[1] = $event => $options.nextView())
  }, {
    "next-text": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_22]),
    "prev-text": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_23]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["nextEnabled"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), !$options.stepLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, _hoisted_26)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
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
}, " Сonfirm that I agree with the Terms of Service and Privacy Policy ", -1
/* HOISTED */
));

const _hoisted_11 = {
  class: "payment-selection"
};

const _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "payment-selection__title"
}, " Please choose a payment method ", -1
/* HOISTED */
));

const _hoisted_13 = {
  class: "payment-selection__methods"
};
const _hoisted_14 = ["onClick"];
const _hoisted_15 = ["src"];
const _hoisted_16 = {
  class: "checkout__window checkout__window--mt"
};
const _hoisted_17 = {
  class: "shopping-cart-window"
};

const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Pay ");

const _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back ");

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
  , _hoisted_9)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.paymentMethods, (method, i) => {
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
    , _hoisted_15)], 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_14);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ShoppingCartCheckout"], {
    prevEnabled: true,
    nextEnabled: $options.isStepComplete,
    onPrevClicked: _cache[1] || (_cache[1] = $event => $options.prevView()),
    onNextClicked: _cache[2] || (_cache[2] = $event => $options.attemptSubmit())
  }, {
    "next-text": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_18]),
    "prev-text": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_19]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["nextEnabled"])])])])]);
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
const _hoisted_4 = ["src"];
const _hoisted_5 = {
  class: "booking__complementary-wrapper"
};

const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__title-wrapper"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Book me")], -1
/* HOISTED */
));

const _hoisted_7 = {
  class: "booking__steps"
};

const _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "1")], -1
/* HOISTED */
));

const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "RESERVE")], -1
/* HOISTED */
));

const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "2")], -1
/* HOISTED */
));

const _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Additions")], -1
/* HOISTED */
));

const _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "3")], -1
/* HOISTED */
));

const _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Confirmation")], -1
/* HOISTED */
));

const _hoisted_14 = {
  key: 1,
  class: "loader"
};

const _hoisted_15 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")], -1
/* HOISTED */
));

const _hoisted_16 = [_hoisted_15];
const _hoisted_17 = {
  class: "def-modal__outer-container container"
};
const _hoisted_18 = {
  class: "def-modal__inner-container def-modal__inner-container--50"
};
const _hoisted_19 = {
  class: "def-modal__top"
};

const _hoisted_20 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "modal-title"
})], -1
/* HOISTED */
));

const _hoisted_21 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--1"
}, null, -1
/* HOISTED */
));

const _hoisted_22 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--2"
}, null, -1
/* HOISTED */
));

const _hoisted_23 = [_hoisted_21, _hoisted_22];
const _hoisted_24 = {
  class: "def-modal__content-wrapper def-modal-class-name modal-content-wrapper"
};
const _hoisted_25 = {
  class: "alert-modal"
};

const _hoisted_26 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "alert-modal__title m--b-15"
}, " Your reservation time is about to expire ", -1
/* HOISTED */
));

const _hoisted_27 = {
  class: "alert-modal__image"
};
const _hoisted_28 = ["src"];

const _hoisted_29 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "alert-modal__message m--b-45"
}, " Do you want to extend it? ", -1
/* HOISTED */
));

const _hoisted_30 = {
  class: "alert-modal__buttons"
};
const _hoisted_31 = {
  class: "def-modal__outer-container container"
};
const _hoisted_32 = {
  class: "def-modal__inner-container def-modal__inner-container--50"
};
const _hoisted_33 = {
  class: "def-modal__top"
};

const _hoisted_34 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "modal-title"
})], -1
/* HOISTED */
));

const _hoisted_35 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--1"
}, null, -1
/* HOISTED */
));

const _hoisted_36 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "def-modal__cross-line def-modal__cross-line--2"
}, null, -1
/* HOISTED */
));

const _hoisted_37 = [_hoisted_35, _hoisted_36];
const _hoisted_38 = {
  class: "def-modal__content-wrapper def-modal-class-name modal-content-wrapper"
};
const _hoisted_39 = {
  class: "alert-modal"
};
const _hoisted_40 = {
  class: "alert-modal__title m--b-15"
};
const _hoisted_41 = {
  class: "alert-modal__message m--b-45"
};
const _hoisted_42 = {
  class: "alert-modal__buttons"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: "booking",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--roomColor:' + $options.selectedRoomColor() + '; --textColorBG:' + $options.bgTextColor + ';')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! assetDir/images/logo.png */ "./src/assets/images/logo.png"),
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, $setup.bookingStore.reservationTTL != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__timer-wrapper", {
      'highlighted': $setup.bookingStore.reservationTTL <= 60
    }]),
    onClick: _cache[0] || (_cache[0] = $event => $options.openTimerModal())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PhClock"], {
    size: 23,
    color: "#fff"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formattedTimer), 1
  /* TEXT */
  )], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "booking__steps-wrapper m--b-45",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--roomColor:' + $options.selectedRoomColor())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'booking-step-1'
    },
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__step", {
      'active': $setup.bookingStore.openStep >= 1
    }])
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_8, _hoisted_9]),
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
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_10, _hoisted_11]),
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
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_12, _hoisted_13]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])])], 4
  /* STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)], 4
  /* STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["def-modal light", {
      'modal-active': $data.timerModalActive
    }]),
    onClick: _cache[5] || (_cache[5] = $event => $data.timerModalActive = false)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__wrapper",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__cross",
    onClick: _cache[1] || (_cache[1] = $event => $data.timerModalActive = false)
  }, _hoisted_23)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! assetDir/images/waiting.png */ "./src/assets/images/waiting.png"),
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_28)]), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "alert-modal__button alert-modal__button--dismiss",
    onClick: _cache[2] || (_cache[2] = $event => $data.timerModalActive = false)
  }, " No "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "alert-modal__button alert-modal__button--accept",
    onClick: _cache[3] || (_cache[3] = $event => $options.extendReservationTime())
  }, " Yes ")])])])])])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["def-modal light", {
      'modal-active': $setup.errorModalStore.modalOpen
    }]),
    onClick: _cache[9] || (_cache[9] = $event => $setup.errorModalStore.modalOpen = false)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__wrapper",
    onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "def-modal__cross",
    onClick: _cache[6] || (_cache[6] = $event => $setup.errorModalStore.modalOpen = false)
  }, _hoisted_37)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errorModalStore.modalTitle), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errorModalStore.modalText), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
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
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./src/js/main.js");
/* harmony import */ var _js_VueSetup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/VueSetup.js */ "./src/js/VueSetup.js");
/* harmony import */ var _js_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/popup.js */ "./src/js/popup.js");
/* harmony import */ var _js_popup_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_popup_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/swiper.js */ "./src/js/swiper.js");
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

app.use(_router__WEBPACK_IMPORTED_MODULE_3__["default"]); // import PhosphorVue from "phosphor-vue";
// app.use(PhosphorVue);

app.mount("#app");


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
    }

    console.log(ratioMultiplier);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("height", (parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css("width")) * ratioMultiplier).toString() + "px");
  });
}

function RatioH() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default().each(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ratio-h'), function (index, val) {
    var ratioMultiplier = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("ratio-multiplier"));

    if (ratioMultiplier == "undefined") {
      ratioMultiplier = 1;
    }

    console.log(ratioMultiplier);
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
// 	console.log('move');
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

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ (() => {

// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');
// let unlock = true;
// const timeout = 800;
// if (popupLinks.length > 0) {
//     for (let index = 0; index < popupLinks.length; index++) {
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener('click', function (e) {
//             const popupName = popupLinks.getAttribute('href').replace('#', '');
//             const currentPopup = document.getElementById(popupName);
//             popupOpen(currentPopup);
//             e.preventDefault();
//         });
//     }
// }
// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++){
//         const el = popupCloseIcon[index];
//         el.addEventListener(`click`, function (e) { 
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }
// function popupOpen(currentPopup) {
//     if (currentPopup && unlock) {
//         const popupActive = document.querySelector('.popup.open');
//         if (popupActive) {
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         currentPopup.classList.add(`open`);
//         currentPopup.addEventListener(`click`, function (e) { 
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'));
//             }
//         })
//     }
// }
// function popupClose(popupActive, doUnlock = true) {
//     if (unlock) {
//         popupActive.classList.remove(`open`);
//         if (doUnlock) {
//             bodyUnlock();
//         }
//     }
// }
// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth;
//     if (lockPaddingValue > 0) {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = lockPaddingValue + 'px';
//         }
//     }
//     body.style.paddingRight = lockPaddingValue + 'px';
//     body.classList.add('lock');
//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }
// function bodyUnlock() {
//     setTimeout(function () { 
//         if (lockPadding.length > 0) {
//             for (let index = 0; index < body.classList.length; index++) {
//                 const el = lockPadding[index];
//                 el.style.paddingRight = '0px';
//             }
//         }
//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//         }, timeout);
//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }
// document.addEventListener('keydown', function (e) {
//         if (e.keyCode === 27) {
//             const popupActive = document.querySelector('.popup.open');
//             popupClose(popupActive);
//         }
// });

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
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var _views_BookingView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/BookingView.vue */ "./src/js/views/BookingView.vue");
/* harmony import */ var _views_BookingStep1View_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/BookingStep1View.vue */ "./src/js/views/BookingStep1View.vue");
/* harmony import */ var _views_BookingStep2View_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/BookingStep2View.vue */ "./src/js/views/BookingStep2View.vue");
/* harmony import */ var _views_BookingStep3View_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/BookingStep3View.vue */ "./src/js/views/BookingStep3View.vue");






const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createRouter)({
  base: '/',
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createWebHistory)(),
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
    packData: [// {
      // 	preview: '/assets/images/package-preview.jpg',
      // 	title: 'Birthday Package',
      // 	list: ['Dessert / Cake','Letter balloons (5 total)','Lei Flowers'],
      // 	price: 20
      // },
      // {
      // 	preview: '/assets/images/package-preview.jpg',
      // 	title: 'Birthday Package',
      // 	list: ['Dessert / Cake','Letter balloons (5 total)','Lei Flowers'],
      // 	price: 20
      // },
      // {
      // 	preview: '/assets/images/package-preview.jpg',
      // 	title: 'Birthday Package',
      // 	list: ['Dessert / Cake','Letter balloons (5 total)','Lei Flowers'],
      // 	price: 20
      // },
    ],
    paymentMethods: [{
      preview: __webpack_require__(/*! assetDir/images/knet.png */ "./src/assets/images/knet.png"),
      shadowColor: '#AAA'
    }, {
      preview: __webpack_require__(/*! assetDir/images/mastercard.png */ "./src/assets/images/mastercard.png"),
      shadowColor: '#AAA'
    }],
    selectedPaymentMethod: 0,
    packOrders: [],
    halfPayment: false,
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

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/bundle */ "./node_modules/swiper/swiper-bundle.min.css");
 // import styles bundle


new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  grabCursor: true,
  // Change slide by click on
  slideToClickedSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },
  slidesPerView: 1,
  watchOverFlow: true,
  spaceBetween: 25,
  speed: 850,
  // autoplay: {
  //     delay: 2000,
  //     stopOnLastSlide: true,
  //     disableOnInteraction: true, 
  // },
  effect: 'cube',
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 1
  },
  coverflowEffect: {
    rotate: 20,
    stretch: 50,
    slideShadows: true
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  }
});
new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.image-slider-gallery', {
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev'
  },
  grabCursor: true,
  // Change slide by click on
  slideToClickedSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },
  watchOverFlow: true,
  speed: 850,
  autoHeight: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    250: {
      slidesPerView: 1,
      grid: {
        rows: 4
      }
    },
    320: {
      slidesPerView: 2,
      grid: {
        columns: 2,
        rows: 4
      }
    },
    768: {
      slidesPerView: 4,
      grid: {
        rows: 2,
        columns: 4
      }
    }
  }
});
new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.image-slider-menu', {
  navigation: {
    nextEl: '.slider-button-next-menu',
    prevEl: '.slider-button-prev-menu'
  },
  grabCursor: true,
  // Change slide by click on
  // slideToClickedSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },
  // mousewheel: {
  //     sensitivity: 2,
  //     // eventsTarget: ".image-slider-menu__image"
  // },
  watchOverFlow: true,
  speed: 850,
  autoHeight: false,
  pagination: {
    el: '.swiper-pagination-menu',
    clickable: true,
    type: "bullets",
    dynamicBullets: true
  },
  preloadImages: false,
  spaceBetween: 30,
  breakpoints: {
    240: {
      initialSlide: 1,
      centeredSlides: true,
      slidesPerView: 1.5,
      grid: {
        columns: 1,
        rows: 1
      }
    },
    576: {
      centeredSlides: false,
      slidesPerView: 2,
      grid: {
        columns: 2,
        rows: 2
      }
    },
    768: {
      slidesPerView: 3,
      grid: {
        columns: 3,
        rows: 2
      }
    },
    992: {
      slidesPerView: 3,
      grid: {
        columns: 3,
        rows: 2
      }
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
/* harmony import */ var _Calendar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&setup=true&lang=js */ "./src/js/components/Calendar.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Calendar_vue_vue_type_style_index_0_id_c2dc59ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true */ "./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true");
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Calendar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Calendar_vue_vue_type_template_id_c2dc59ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-c2dc59ec"],['__file',"src/js/components/Calendar.vue"]])
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

/***/ "./src/js/components/Calendar.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./src/js/components/Calendar.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Calendar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Calendar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Calendar.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./src/assets/images/knet.png":
/*!************************************!*\
  !*** ./src/assets/images/knet.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/knet.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/logo.png";

/***/ }),

/***/ "./src/assets/images/mastercard.png":
/*!******************************************!*\
  !*** ./src/assets/images/mastercard.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/mastercard.png";

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_jquery_dist_jquery_js-node_modules_swiper_sw-8c9cb6"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map