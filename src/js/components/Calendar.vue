<template>
	<div class="calendar-wrapper" :style="'--highlightColor:'+ highlightColor">
		<div class="calendar-input-field noise-overlay__wrapper" @click="calendarOpen = true">
			<div class="noise-overlay"></div>
			<ph-calendar :size="26" color="#ffffff" />
			<span class="p--x-5">{{weekDays_EN[selectedDate.getDay()]}}</span>
			<span class="">{{selectedDate.getDate()}}/</span>
			<span class="">{{selectedDate.getMonth()}}/</span>
			<span class="">{{selectedDate.getFullYear()}}</span>
		</div>
		<div class="calendar noise-overlay__wrapper" :class="{'open': calendarOpen}">
			<div class="noise-overlay"></div>
			<div class="calendar__month-selection">
				<div class="calendar__month">
					{{months_EN[selectedMonth.month]}} {{selectedMonth.year}}
				</div>
				<div class="calendar__arrows">
					<div class="calendar__arrow calendar__arrow--left" @click="selectedMonth = getOffsetMonth(-1)"></div>
					<div class="calendar__arrow calendar__arrow--right" @click="selectedMonth = getOffsetMonth(1)"></div>
				</div>
			</div>
			<div class="calendar__day-labels">
				<div class="calendar__day-label">
					Mon
				</div>
				<div class="calendar__day-label">
					Tue
				</div>
				<div class="calendar__day-label">
					Wed
				</div>
				<div class="calendar__day-label">
					Thu
				</div>
				<div class="calendar__day-label">
					Fri
				</div>
				<div class="calendar__day-label">
					Sat
				</div>
				<div class="calendar__day-label">
					Sun
				</div>
			</div>
			<div v-for="week in currentMonthWeeks" :key="week" class="calendar__days-row">
				<div v-for="day in week" :key="day" @click="selectDate(day)" class="calendar__day" 
					:class="{
						'disabled': isPastDate(day),
						'darkened': day.getMonth() != selectedMonth.month,
						'selected': sameDateDay(day,selectedDate)
					}">{{day.getDate()}}</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	// import { PhCalendar} from "phosphor-vue";
</script>
<script>
	import $ from "jquery";
	export default{
		props: ['highlightColor', 'defaultDate'],
		data() {
			return {
				currentDate: new Date(), // date at the moment of rendering
				selectedDate: this.defaultDate ? this.defaultDate : new Date(),
				selectedMonth: {month:this.defaultDate.getMonth(), year:this.defaultDate.getFullYear()},
				calendarOpen: false, // only on mobile


				months_EN: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				weekDays_EN: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				

			}
		},
		created(){
			this.$nextTick(function(){ // Gross jQuery clickaway implementation
				$('.calendar, .calendar-input-field').on('click', function(e){
					e.stopPropagation();
				});
				$(document).on('click', function(e){
					this.calendarOpen = false;

				}.bind(this));	
			});
			
		},
		mounted(){
		},
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
			getOffsetMonth(fullMonthOffset){
				let targetMonth = {month: this.selectedMonth.month, year: this.selectedMonth.year};
				let monthOffset = fullMonthOffset % 12;
				let yearOffset = (fullMonthOffset - monthOffset)/12;
				targetMonth.year += yearOffset
				targetMonth.month += monthOffset;
				if(targetMonth.month < 0){
					targetMonth.month = 12 + targetMonth.month;
					targetMonth.year --;
				}
				else if(targetMonth.month > 11){
					targetMonth.month = -1 + (targetMonth.month - 11);
					targetMonth.year ++;
				}
				return targetMonth;
			},
			sameDateDay(dateA, dateB){
				return dateA.getFullYear() === dateB.getFullYear() &&
    			dateA.getMonth() === dateB.getMonth() &&
    			dateA.getDate() === dateB.getDate();
			},
			selectDate(date){
				if(this.isPastDate(date)){
					return;
				}
				this.selectedDate = date;
				this.$emit('date-changed', this.selectedDate);
			},
			isPastDate(date){
				return date.setHours(0,0,0,0) < this.currentDate.setHours(0,0,0,0);
			}
		},
		computed: {
			currentMonthWeeks: function () {
				let prevMonthDays = this.getDaysInMonth(this.getOffsetMonth(-1));
				let monthDays = this.getDaysInMonth(this.selectedMonth);
				let nextMonthDays = this.getDaysInMonth(this.getOffsetMonth(1));

				let displayWeeks = [];

				for (var i = 0; i < monthDays.length;) {
					let week = [];
					//create week
					while(true){//add days to week until sunday
						week.push(monthDays[i]);
						if(i == (monthDays.length - 1)){//last day of the month
							i++;
							break;
						}
						i++;
						if(monthDays[i].getDay() == 1){//last day of the week (fuck you js, day 0 is sunday for some reason)
							break;
						}
					}
					displayWeeks.push(week);
				}
				
				if(displayWeeks[0].length < 7){ // first week check
					let emptyDays = 7 - displayWeeks[0].length;
					while (emptyDays > 0){
						displayWeeks[0].unshift(prevMonthDays[prevMonthDays.length-1]);
						emptyDays--;
						prevMonthDays.splice(prevMonthDays.length-1, 1);
					}
				}
				if(displayWeeks[displayWeeks.length-1].length < 7){ // last week check
					let emptyDays = 7 - displayWeeks[displayWeeks.length-1].length;
					while (emptyDays > 0){
						displayWeeks[displayWeeks.length-1].push(nextMonthDays[0]);
						emptyDays--;
						nextMonthDays.splice(0, 1);
					}
				}
				return displayWeeks;
			}
		}
	}

</script>
<style lang="scss" scoped>
@import 'styles/utils/vars.scss'; // for width vars


.noise-overlay{
	position: absolute;
	background-image: url("../../assets/images/noise.png");
	background-repeat: repeat;
	background-size: var(--noise-size, 300px);
	width: 100%;
	height: 100%;
	z-index: -1;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	opacity: var(--noise-opacity, 0.4);
	&__wrapper{
		overflow: hidden;
		position: relative;
	}
}
.calendar-wrapper {
	position: relative;

}
.calendar-input-field {
	cursor: default;
	@media screen and (max-width: $smTabletWidth) {
		cursor: pointer;
	}

	background: linear-gradient(180deg, #7b7979 0.55%, #232020 100%);
	border-radius: 8px;
	margin-bottom: 30px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	
}
.calendar {
	position: relative;
	width: 100%;
	background: linear-gradient(180deg, #7b7979 0.55%, #232020 100%);

	border-radius: 8px;
	padding: 10px 15px;
	@media screen and (max-width: $smTabletWidth) {
		position: absolute;
		left: 0;
		right: 0;
		top: calc(100% + 30px);
		&:not(.open){
			display: none;
		}

	}
	&__month-selection {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	&__month {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
	}
	&__arrows {
		display: flex;
		align-items: center;
	}
	&__arrow {
		cursor: pointer;
		width: 11px;
		height: 16px;
		position: relative;
		padding: 3px;
		&:before, &:after{
			content:'';
			width: 10px;
			height: 3px;
			position: absolute;
			background: #fff;
			right: 3px;
			border-radius: 3px 0 0 3px;
		}
		
		&:before{
			transform-origin: 100% 100%;
			transform: rotate(45deg);
			top: calc(16px/2 - 1px); // no idea why the adjustment has to be 1px -- with height being 3px you'd think it would be 1.5

		}
		&:after{
			transform-origin: 100% 0%;
			transform: rotate(-45deg);
			bottom: calc(16px/2 - 1px); // no idea why the adjustment has to be 1px -- with height being 3px you'd think it would be 1.5
		}
		&--left {
			transform: rotate(180deg);
			margin-right: 10px;
		}
		&--right {
		}
	}
	&__day-labels {
		display: flex;
		margin-bottom: 10px;
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
	}
	&__day-label {
		flex: 0 0 calc(100% / 7);
		text-align: center;
	}
	&__days-row {
		display: flex;
		margin-bottom: 10px;
		// &:not(:last-child){
			
		// }
	}
	&__day {
		cursor: pointer;
		flex: 0 0 calc(100% / 7);
		text-align: center;
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		transition: all 0.5s;
		&.darkened {
			opacity: 0.5;
		}
		&.disabled {
			opacity: 0.1;
			cursor: default;
		}
		&.selected {
			background: var(--highlightColor);
			border-radius: 5px;
		}

	}
}
</style>
