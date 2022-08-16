<script>
	export default{
		setup(){
			return {}
		},
		mounted(){
		}
	}
</script>
<template>
	<div class="container">
		Please select one of the rooms and the time period you would like to reserve
	</div>
	<div class="booking">
		<div class="booking__rooms">
			<div class="booking__room">
				<div class="booking__room-image ibg">
					<img src="" alt="">
				</div>
				<div class="booking__room-title">
					Hula
				</div>
			</div>
			<div class="booking__room">
				<div class="booking__room-image ibg">
					<img src="" alt="">
				</div>
				<div class="booking__room-title">
					Hula
				</div>
			</div>
			<div class="booking__room">
				<div class="booking__room-image ibg">
					<img src="" alt="">
				</div>
				<div class="booking__room-title">
					Hula
				</div>
			</div>
			<div class="booking__room">
				<div class="booking__room-image ibg">
					<img src="" alt="">
				</div>
				<div class="booking__room-title">
					Hula
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	.booking {
		&__rooms {
			height: 500px;
			display: flex;
			flex-direction: column;
		}
		&__room {
			display: flex;
			flex-direction: column;
			flex: 1 1 25%;
			transition: all 0.4s;
			&.open{
				flex: 1 1 33%;
			}
		}
		&__room-image {
			flex-grow: 1;
		}
		&__room-title {
			flex: 0 0 50px;
			background: #1D4ED8;
			display: flex;
			justify-content: center;
			align-items: center;

			font-family: 'PT Sans';
			font-style: normal;
			font-weight: 700;
			font-size: 30px;
		}
	}
</style>