import { createRouter, createWebHistory } from 'vue-router'

import {useBookingStore} from '../stores/BookingStore.js'
import BookingView from '../views/BookingView.vue'

import BookingStep0View from '../views/BookingStep0View.vue'


const router = createRouter({
	base: '/app',
	history: createWebHistory(),
	routes: [
		{	
			path: '/app/booking/',
			name: 'booking',
			redirect: { name: 'booking-step-0' },
			component: BookingView,
			children: [
				{ 
					path: 'step0',
					name: 'booking-step-0',
					component: BookingStep0View,
					meta: {
						bookingStep: 0
					}
				},
				{ 
					path: 'step1',
					name: 'booking-step-1',
					component: BookingStep0View,
					meta: {
						bookingStep: 1
					}
				},
				{ 
					path: 'step2',
					name: 'booking-step-2',
					component: BookingStep0View,
					meta: {
						bookingStep: 2
					}
				},
			],
		},
		
		{
			path: '/app/booking/:roomID/',
			component: BookingView,

		},
	]
});

router.beforeEach((to, from) => {
	if(to.meta.bookingStep){
		const bookingStore = useBookingStore();
		return bookingStore.bookingStep >= to.meta.bookingStep;
	}
	return true;
});
export default router