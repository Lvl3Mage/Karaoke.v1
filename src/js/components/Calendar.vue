<template>
	<div class="calendar-wrapper">
		<div class="calendar-input-field">
			
		</div>
		<div class="calendar">
			<div class="calendar__month-selection">
				<div class="calendar__month">
					July 2022
				</div>
				<div class="calendar__arrows">
					<div class="calendar__arrow calendar__arrow--left"></div>
					<div class="calendar__arrow calendar__arrow--right"></div>
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
			<div class="calendar__days-row">
				<div class="calendar__day disabled">28</div>
				<div class="calendar__day disabled">28</div>
				<div class="calendar__day disabled">28</div>
				<div class="calendar__day disabled">28</div>
				<div class="calendar__day">28</div>
				<div class="calendar__day">28</div>
				<div class="calendar__day">28</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		setup(){
		},
		data() {
			return {
				currentMonth: (new Date()).getMonth(),
			}
		},
		mounted(){
		},
		methods: {
			getMonthCalendarView(month){
				  
			}
		}
	}

</script>

<style lang="scss" scoped>
.calendar-wrapper {
	position: relative;
}
.calendar-input-field {
	
}
.calendar {
	width: 100%;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0.55%, rgba(255, 255, 255, 0) 100%);

	border-radius: 8px;
	padding: 10px 15px;
	&__month-selection {
		display: flex;
		justify-content: space-between;
	}
	&__month {
	}
	&__arrows {
	}
	&__arrow {
		&--left {
		}
		&--right {
		}
	}
	&__day-labels {
		display: flex;
	}
	&__day-label {
		flex: 0 0 calc(100% / 7);
		text-align: center;
	}
	&__days-row {
		display: flex;
	}
	&__day {
		flex: 0 0 calc(100% / 7);
		text-align: center;
		&.disabled {
		}

	}
}
</style>
