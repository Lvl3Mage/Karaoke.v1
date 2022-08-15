import { createRouter, createWebHistory } from 'vue-router'

import {useBookingStore} from '../stores/BookingStore.js'
import HomeView from '../views/HomeView.vue'
import BookingView from '../views/BookingView.vue'

import BookingStep0View from '../views/BookingStep0View.vue'


const router = createRouter({
	base: '/app',
	history: createWebHistory(),
	routes: [
		{	
			path: '/app/booking/:roomID',
			name: 'booking',
			component: BookingView,
			children: [
				{
					path: '',
					redirect: { name: 'booking-step-0' }, // default child path
				},
				{ 
					path: '0',
					name: 'booking-step-0',
					component: BookingStep0View,
					meta: {
						bookingStep: 0
					}
				},
				{ 
					path: '1',
					name: 'booking-step-1',
					component: BookingStep0View,
					meta: {
						bookingStep: 1
					}
				},
				{ 
					path: '2',
					name: 'booking-step-2',
					component: BookingStep0View,
					meta: {
						bookingStep: 2
					}
				},
			],
		},
		
		{
			path: '/',
			name: 'home',
			component: HomeView,

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