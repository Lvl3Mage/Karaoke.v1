import { createRouter, createWebHistory } from 'vue-router'

import {useBookingStore} from '../stores/BookingStore.js'
import BookingView from '../views/BookingView.vue'

import BookingStep1View from '../views/BookingStep1View.vue'
import BookingStep2View from '../views/BookingStep2View.vue'
import BookingStep3View from '../views/BookingStep3View.vue'

import BookingRecovery from '../views/BookingRecovery.vue'


const router = createRouter({
	base: '/',
	history: createWebHistory(),
	routes: [
		{	
			path: '/book/',
			name: 'booking',
			redirect: { name: 'booking-step-1' },
			component: BookingView,
			children: [
				{ 
					path: 'step1',
					name: 'booking-step-1',
					component: BookingStep1View,
					meta: {
						minCompletion: 0
					}
				},
				{ 
					path: 'step2',
					name: 'booking-step-2',
					component: BookingStep2View,
					meta: {
						minCompletion: 1,
						prevStepRoute: {name:'booking-step-1'},
					}
				},
				{ 
					path: 'step3',
					name: 'booking-step-3',
					component: BookingStep3View,
					meta: {
						minCompletion: 2,
						prevStepRoute: {name:'booking-step-2'},
					}
				},
			],
		},
		{
			path: '/recover-booking',
			name: 'booking-recovery',
			component: BookingRecovery,
		}
	]
});

router.beforeEach((to, from) => {
	if(to.meta.minCompletion){
		const bookingStore = useBookingStore();
		if(bookingStore.stepCompletion >= to.meta.minCompletion){
			return true; 
		}
		else{
			if(to.meta.prevStepRoute){ // if prev redirect exists
				return to.meta.prevStepRoute; // redirect to prev step
			}
			return false;
		}
	}
	return true;
});
export default router