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
/* harmony export */   "axios": () => (/* reexport default from dynamic */ axios__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


let api = {};
api.baseURL = "http://192.168.1.214:8000"; //const axios = require(["axios"]).default;


const __default__ = {
  data: () => ({}),
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
    const __returned__ = {
      api,
      axios: (axios__WEBPACK_IMPORTED_MODULE_0___default()),
      RouterLink: vue_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink,
      RouterView: vue_router__WEBPACK_IMPORTED_MODULE_1__.RouterView
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
  props: ['highlightColor', 'defaultDate'],

  data() {
    return {
      currentDate: new Date(),
      // date at the moment of rendering
      selectedDate: this.defaultDate ? this.defaultDate : new Date(),
      selectedMonth: {
        month: this.defaultDate.getMonth(),
        year: this.defaultDate.getFullYear()
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
      this.$emit('date-changed', this.selectedDate);
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['highlightColor', 'minCount', 'maxCount'],

  data() {
    return {
      count: this.minCount
    };
  },

  watch: {},

  created() {},

  mounted() {},

  methods: {
    changeCount(newCount) {}

  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let Selector = {
  props: ['highlightColor', 'occupancyData', 'openTime'],

  data() {
    return {
      segmentLength: 60,
      // minutes
      startIndex: null,
      endIndex: null
    };
  },

  watch: {
    occupancyData: function (val) {
      if (this.startIndex == null || this.endIndex == null) {
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
        this.$emit("range-change", null);
        return;
      }

      this.$emit("range-change", {
        startIndex: this.startIndex,
        endIndex: this.endIndex,
        startTime: this.tConvert(this.timeSegments[this.startIndex].startTime),
        endTime: this.tConvert(this.timeSegments[this.endIndex].endTime)
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
          endTime: startTime + this.segmentLength
        });
      }

      return segments;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Selector);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep0View.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep0View.vue?vue&type=script&setup=true&lang=js ***!
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
      pendingDateRequests: pendingDateRequests
    };
  },

  watch: {},

  mounted() {
    // AXIOS
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
    // this.loadSelectedDateSchedule();
    this.requestSelectedSchedule();
  },

  methods: {
    dayRefreshCycle: async function () {},
    loadNearbySchedule: function (targetDate, targetRoom) {
      let dates = [];

      for (var i = -5; i <= 5; i++) {
        let date = new Date(targetDate);
        date.setDate(targetDate.getDate() + i);
        dates.push(date);
      }

      this.loadScheduleForDates(dates, targetDate, targetRoom);
    },
    selectRoom: function (roomID) {
      this.bookingStore.selectedRoomID = roomID;
      this.requestSelectedSchedule();
    },
    selectedRoomColor: function () {
      if (this.bookingStore.selectedRoomID != '') {
        return this.bookingStore.roomData[this.bookingStore.selectedRoomID].primaryColor;
      }

      return '#979797';
    },
    updateDate: function (newDate) {
      this.bookingStore.selectedDate = newDate;
      this.requestSelectedSchedule();
    },
    updateRange: function (newRange) {
      this.bookingStore.selectedRange = newRange;
    },
    loadScheduleForDates: async function (dates, targetDate, targetRoom) {
      this.pendingDateRequests[targetRoom][this.bookingStore.formatDate(targetDate)] = "pending"; //Data generation (remove when making the ajax request)

      let data = {
        "occupancyData": [{
          "state": "available",
          // available/booked/reserved
          "tokens": "TOKEN",
          //Token sent on request, only needed if states is "reserved"
          "cost": 15
        }, {
          "state": "available",
          // available/booked/reserved
          "tokens": "TOKEN",
          //Token sent on request, only needed if states is "reserved"
          "cost": 15
        }, {
          "state": "available",
          // available/booked/reserved
          "tokens": "TOKEN",
          //Token sent on request, only needed if states is "reserved"
          "cost": 15
        }, {
          "state": "available",
          // available/booked/reserved
          "tokens": "TOKEN",
          //Token sent on request, only needed if states is "reserved"
          "cost": 15
        }, {
          "state": "available",
          // available/booked/reserved
          "tokens": "TOKEN",
          //Token sent on request, only needed if states is "reserved"
          "cost": 15
        }, {
          "state": "booked",
          // available/booked/reserved
          "tokens": "TOKEN",
          //Token sent on request, only needed if states is "reserved"
          "cost": 15
        }, {
          "state": "available",
          // available/booked/reserved
          "tokens": "TOKEN",
          //Token sent on request, only needed if states is "reserved"
          "cost": 15
        }, {
          "state": "available",
          // available/booked/reserved
          "tokens": "TOKEN",
          //Token sent on request, only needed if states is "reserved"
          "cost": 15
        }, {
          "state": "available",
          // available/booked/reserved
          "tokens": "TOKEN",
          //Token sent on request, only needed if states is "reserved"
          "cost": 15
        }, {
          "state": "available",
          // available/booked/reserved
          "tokens": "TOKEN",
          //Token sent on request, only needed if states is "reserved"
          "cost": 15
        } //....
        ],
        "openTime": 720 //mins since midnight

      };
      let response = {};

      for (var i = 0; i < dates.length; i++) {
        response[dates[i].toLocaleDateString('en-GB')] = data;
      }

      console.log(response);
      await this.delay(1000);
      delete this.pendingDateRequests[targetRoom][this.bookingStore.formatDate(targetDate)];

      for (var date in response) {
        this.bookingStore.roomData[targetRoom].scheduleData[date] = response[date];
      }
    },
    requestSelectedSchedule: function () {
      if (this.bookingStore.formatedSelectedDate in this.pendingDateRequests[this.bookingStore.selectedRoomID]) {
        return;
      }

      this.loadNearbySchedule(this.bookingStore.selectedDate, this.bookingStore.selectedRoomID);
    }
  },
  computed: {
    scheduleData: function () {
      return this.bookingStore.roomData[this.bookingStore.selectedRoomID].scheduleData;
    },
    selectedSchedule: function () {
      return this.bookingStore.roomData[this.bookingStore.selectedRoomID].scheduleData[this.bookingStore.formatedSelectedDate];
    },
    selectedOccupancyData: function () {
      return this.selectedSchedule.occupancyData;
    },
    bookingDataAvailable: function () {
      return this.bookingStore.formatedSelectedDate in this.scheduleData;
    }
  }
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'BookingStep0View',

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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.vue */ "./src/js/App.vue");
const APIRoomData = {
  'room1': {
    primaryColor: '#FAA',
    name: 'Room 1',
    previewImage: '',
    // link
    minPeople: 5,
    maxPeople: 10
  },
  'room2': {
    primaryColor: '#FA0',
    name: 'Room 2',
    previewImage: '',
    minPeople: 5,
    maxPeople: 10
  },
  'room3': {
    primaryColor: '#AAF',
    name: 'Room 3',
    previewImage: '',
    minPeople: 5,
    maxPeople: 10
  },
  'room4': {
    primaryColor: '#AFA',
    name: 'Room 4',
    previewImage: '',
    minPeople: 5,
    maxPeople: 10
  }
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup() {
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore)();
    return {
      bookingStore
    };
  },

  mounted() {
    //
    // let data = new FormData();
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
    let response = APIRoomData;
    let roomNames = Object.keys(response);

    for (let roomName of roomNames) {
      let room = response[roomName];
      room.scheduleData = {
        occupancyData: {}
      };
      this.bookingStore.roomData[roomName] = room;
    }

    if (this.$route.params.roomID in this.bookingStore.roomData) {
      this.bookingStore.selectedRoomID = this.$route.params.roomID;
    } else {
      //if not room is selected select the first room
      this.bookingStore.selectedRoomID = Object.keys(this.bookingStore.roomData)[0];
    }

    this.$router.replace({
      name: 'booking'
    });
  },

  methods: {
    selectedRoomColor: function () {
      if (this.bookingStore.selectedRoomID != '') {
        return this.bookingStore.roomData[this.bookingStore.selectedRoomID].primaryColor;
      }

      return '#979797';
    }
  },
  computed: {
    bookingDataAvailable: function () {
      return this.bookingStore.selectedRoomID in this.bookingStore.roomData;
    }
  }
});

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
  const _component_ph_calendar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ph-calendar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "calendar-wrapper",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--highlightColor:' + $props.highlightColor)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "calendar-input-field noise-overlay__wrapper",
    onClick: _cache[0] || (_cache[0] = $event => $data.calendarOpen = true)
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ph_calendar, {
    size: 26,
    color: "#ffffff"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.weekDays_EN[$data.selectedDate.getDay()]), 1
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ph_user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ph-user");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "people-selector",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--roomColor:' + $props.highlightColor)
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.maxCount, index => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      class: "people-selector__icon"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ph_user, {
      size: 24,
      color: "#ffffff",
      weight: index <= $data.count ? 'fill' : 'regular'
    }, null, 8
    /* PROPS */
    , ["weight"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 4
  /* STYLE */
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
  const _component_ph_clock = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ph-clock");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "time-selector",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--roomColor:' + _ctx.highlightColor)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ph_clock, {
    size: 14,
    color: "#fff"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.startTimeFormatted), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ph_clock, {
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep0View.vue?vue&type=template&id=1856276e&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep0View.vue?vue&type=template&id=1856276e&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1856276e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

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

const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__room-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/images/main.jpg",
  alt: ""
})], -1
/* HOISTED */
));

const _hoisted_7 = {
  class: "booking__room-title font--prim-title text--700 text--L"
};
const _hoisted_8 = {
  class: "booking__calendar-column"
};

const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "font--prim-text text--700 text--S m--b-10 text--center"
}, "Date", -1
/* HOISTED */
));

const _hoisted_10 = {
  class: "booking__time-selector"
};
const _hoisted_11 = {
  key: 2,
  class: "loader"
};

const _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")], -1
/* HOISTED */
));

const _hoisted_13 = [_hoisted_12];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, " Please select one of the rooms and the time period you would like to reserve ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bookingStore.roomData, (value, key) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__room", {
        'open': key == $setup.bookingStore.selectedRoomID,
        'closed': $setup.bookingStore.selectedRoomID != '' && key != $setup.bookingStore.selectedRoomID
      }]),
      onClick: $event => $options.selectRoom(key),
      key: value,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--roomColor:' + value.primaryColor)
    }, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value.name), 1
    /* TEXT */
    )], 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_5);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Calendar"], {
    highlightColor: $options.selectedRoomColor(),
    defaultDate: $setup.bookingStore.selectedDate,
    onDateChanged: $options.updateDate
  }, null, 8
  /* PROPS */
  , ["highlightColor", "defaultDate", "onDateChanged"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TimeRangeSelector"], {
    highlightColor: $options.selectedRoomColor(),
    occupancyData: $options.selectedOccupancyData,
    openTime: $options.selectedSchedule.openTime,
    onRangeChange: $options.updateRange
  }, null, 8
  /* PROPS */
  , ["highlightColor", "occupancyData", "openTime", "onRangeChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <PeopleCountSelector :minCount=\"5\" :maxCount=\"10\" :highlightColor=\"selectedRoomColor()\"></PeopleCountSelector> ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
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
  key: 0,
  class: "booking"
};
const _hoisted_2 = {
  class: "container"
};

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__top-bar"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__logo"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/images/logo.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__title-wrapper"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Book me")])], -1
/* HOISTED */
));

const _hoisted_4 = {
  class: "booking__steps"
};

const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "1")], -1
/* HOISTED */
));

const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "RESERVE")], -1
/* HOISTED */
));

const _hoisted_7 = [_hoisted_5, _hoisted_6];

const _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "2")], -1
/* HOISTED */
));

const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "RESERVE")], -1
/* HOISTED */
));

const _hoisted_10 = [_hoisted_8, _hoisted_9];

const _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "3")], -1
/* HOISTED */
));

const _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "booking__step-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "RESERVE")], -1
/* HOISTED */
));

const _hoisted_13 = [_hoisted_11, _hoisted_12];
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "booking__steps-wrapper m--b-45",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('--roomColor:' + $options.selectedRoomColor())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__step", {
      'active': $setup.bookingStore.bookingStep >= 0
    }])
  }, _hoisted_7, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__steps-line", {
      'active': $setup.bookingStore.bookingStep >= 0
    }])
  }, null, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__step", {
      'active': $setup.bookingStore.bookingStep >= 1
    }])
  }, _hoisted_10, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__steps-line", {
      'active': $setup.bookingStore.bookingStep >= 1
    }])
  }, null, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["booking__step", {
      'active': $setup.bookingStore.bookingStep >= 2
    }])
  }, _hoisted_13, 2
  /* CLASS */
  )])], 4
  /* STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.bookingDataAvailable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
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
/* harmony import */ var phosphor_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phosphor-vue */ "./node_modules/phosphor-vue/dist/esm/entry.js");



const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
const pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.createPinia)();
app.use(pinia);

app.use(_router__WEBPACK_IMPORTED_MODULE_3__["default"]);

app.use(phosphor_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
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
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").css("overflow", "hidden");
  var modalID = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('modal-id');
  var modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + modalID + ".modal");
  modal.addClass("modal-active");
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
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mousedown touchstart', '.modal-bg, .modal-cross', function (event) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").css("overflow", "visible");
  var modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".modal");
  modal.removeClass("modal-active");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mousedown touchstart', '.modal-window', function (event) {
  event.stopPropagation();
});

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
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/BookingStore.js */ "./src/js/stores/BookingStore.js");
/* harmony import */ var _views_BookingView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/BookingView.vue */ "./src/js/views/BookingView.vue");
/* harmony import */ var _views_BookingStep0View_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/BookingStep0View.vue */ "./src/js/views/BookingStep0View.vue");




const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.createRouter)({
  base: '/app',
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.createWebHistory)(),
  routes: [{
    path: '/app/booking/',
    name: 'booking',
    redirect: {
      name: 'booking-step-0'
    },
    component: _views_BookingView_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    children: [{
      path: 'step0',
      name: 'booking-step-0',
      component: _views_BookingStep0View_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      meta: {
        bookingStep: 0
      }
    }, {
      path: 'step1',
      name: 'booking-step-1',
      component: _views_BookingStep0View_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      meta: {
        bookingStep: 1
      }
    }, {
      path: 'step2',
      name: 'booking-step-2',
      component: _views_BookingStep0View_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      meta: {
        bookingStep: 2
      }
    }]
  }, {
    path: '/app/booking/:roomID/',
    component: _views_BookingView_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }]
});
router.beforeEach((to, from) => {
  if (to.meta.bookingStep) {
    const bookingStore = (0,_stores_BookingStore_js__WEBPACK_IMPORTED_MODULE_0__.useBookingStore)();
    return bookingStore.bookingStep >= to.meta.bookingStep;
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
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.vue */ "./src/js/App.vue");


const useBookingStore = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)({
  id: 'BookingStore',
  state: () => ({
    //client side data
    bookingStep: 0,
    selectedDate: new Date(),
    //loaded data
    selectedRoomID: '',
    roomData: {},
    scheduleData: {},
    selectedRange: null
  }),
  getters: {
    formatedSelectedDate: function () {
      return this.selectedDate.toLocaleDateString('en-GB');
    }
  },
  actions: {
    formatDate: function (date) {
      return date.toLocaleDateString('en-GB');
    }
  }
});
 //https://jsben.ch/AhMN6

function GetCookieValueByRegEx(a, b) {
  b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

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
  autoplay: {
    delay: 2000,
    stopOnLastSlide: true,
    disableOnInteraction: true
  },
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
    clickable: true
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
        rows: 4
      }
    },
    768: {
      slidesPerView: 4,
      grid: {
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep0View.vue?vue&type=style&index=0&id=1856276e&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep0View.vue?vue&type=style&index=0&id=1856276e&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _PeopleCountSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleCountSelector.vue?vue&type=script&lang=js */ "./src/js/components/PeopleCountSelector.vue?vue&type=script&lang=js");
/* harmony import */ var _PeopleCountSelector_vue_vue_type_style_index_0_id_b35233ba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true */ "./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true");
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PeopleCountSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PeopleCountSelector_vue_vue_type_template_id_b35233ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-b35233ba"],['__file',"src/js/components/PeopleCountSelector.vue"]])
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
/* harmony import */ var _TimeRangeSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeRangeSelector.vue?vue&type=script&lang=js */ "./src/js/components/TimeRangeSelector.vue?vue&type=script&lang=js");
/* harmony import */ var _TimeRangeSelector_vue_vue_type_style_index_0_id_f6c0005a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true */ "./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true");
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_TimeRangeSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TimeRangeSelector_vue_vue_type_template_id_f6c0005a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f6c0005a"],['__file',"src/js/components/TimeRangeSelector.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/js/views/BookingStep0View.vue":
/*!*******************************************!*\
  !*** ./src/js/views/BookingStep0View.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookingStep0View_vue_vue_type_template_id_1856276e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookingStep0View.vue?vue&type=template&id=1856276e&scoped=true */ "./src/js/views/BookingStep0View.vue?vue&type=template&id=1856276e&scoped=true");
/* harmony import */ var _BookingStep0View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingStep0View.vue?vue&type=script&setup=true&lang=js */ "./src/js/views/BookingStep0View.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _BookingStep0View_vue_vue_type_style_index_0_id_1856276e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookingStep0View.vue?vue&type=style&index=0&id=1856276e&scoped=true&lang=scss */ "./src/js/views/BookingStep0View.vue?vue&type=style&index=0&id=1856276e&scoped=true&lang=scss");
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingStep0View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingStep0View_vue_vue_type_template_id_1856276e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1856276e"],['__file',"src/js/views/BookingStep0View.vue"]])
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
/* harmony import */ var _BookingView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingView.vue?vue&type=script&lang=js */ "./src/js/views/BookingView.vue?vue&type=script&lang=js");
/* harmony import */ var _BookingView_vue_vue_type_style_index_0_id_3ba2f8f0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss */ "./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss");
/* harmony import */ var C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Projects_Karaoke_v1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BookingView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BookingView_vue_vue_type_template_id_3ba2f8f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3ba2f8f0"],['__file',"src/js/views/BookingView.vue"]])
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

/***/ "./src/js/components/PeopleCountSelector.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/js/components/PeopleCountSelector.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_PeopleCountSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_PeopleCountSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./PeopleCountSelector.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/js/components/TimeRangeSelector.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/js/components/TimeRangeSelector.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_TimeRangeSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_TimeRangeSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./TimeRangeSelector.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/js/views/BookingStep0View.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./src/js/views/BookingStep0View.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep0View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep0View_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep0View.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep0View.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/js/views/BookingView.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/js/views/BookingView.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=script&lang=js");
 

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

/***/ "./src/js/views/BookingStep0View.vue?vue&type=template&id=1856276e&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/js/views/BookingStep0View.vue?vue&type=template&id=1856276e&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep0View_vue_vue_type_template_id_1856276e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep0View_vue_vue_type_template_id_1856276e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep0View.vue?vue&type=template&id=1856276e&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep0View.vue?vue&type=template&id=1856276e&scoped=true");


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
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_App_vue_vue_type_style_index_0_id_3ea74058_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/App.vue?vue&type=style&index=0&id=3ea74058&scoped=true&lang=css");


/***/ }),

/***/ "./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_Calendar_vue_vue_type_style_index_0_id_c2dc59ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/Calendar.vue?vue&type=style&index=0&id=c2dc59ec&lang=scss&scoped=true");


/***/ }),

/***/ "./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_PeopleCountSelector_vue_vue_type_style_index_0_id_b35233ba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/PeopleCountSelector.vue?vue&type=style&index=0&id=b35233ba&lang=scss&scoped=true");


/***/ }),

/***/ "./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_TimeRangeSelector_vue_vue_type_style_index_0_id_f6c0005a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/components/TimeRangeSelector.vue?vue&type=style&index=0&id=f6c0005a&lang=scss&scoped=true");


/***/ }),

/***/ "./src/js/views/BookingStep0View.vue?vue&type=style&index=0&id=1856276e&scoped=true&lang=scss":
/*!****************************************************************************************************!*\
  !*** ./src/js/views/BookingStep0View.vue?vue&type=style&index=0&id=1856276e&scoped=true&lang=scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingStep0View_vue_vue_type_style_index_0_id_1856276e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingStep0View.vue?vue&type=style&index=0&id=1856276e&scoped=true&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingStep0View.vue?vue&type=style&index=0&id=1856276e&scoped=true&lang=scss");


/***/ }),

/***/ "./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss":
/*!***********************************************************************************************!*\
  !*** ./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_0_BookingView_vue_vue_type_style_index_0_id_3ba2f8f0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/js/views/BookingView.vue?vue&type=style&index=0&id=3ba2f8f0&scoped=true&lang=scss");


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