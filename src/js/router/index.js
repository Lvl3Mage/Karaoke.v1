import { createRouter, createWebHistory } from 'vue-router'

import {useBookingStore} from '../stores/BookingStore.js'
import HomeView from '../views/HomeView.vue'
import BookingView from '../views/BookingView.vue'

import BookingStep0View from '../views/BookingStep0View.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{	
			path: '/booking',
			name: 'booking',
			component: BookingView,
			children: [
				{
					path: '',
					redirect: '/booking/0', // default child path
				},
				{ 
					path: '0',
					name: 'booking0',
					component: BookingStep0View,
					meta: {
						bookingStep: 0
					}
				},
				{ 
					path: '1',
					name: 'booking1',
					component: BookingStep0View,
					meta: {
						bookingStep: 1
					}
				},
				{ 
					path: '2',
					name: 'booking2',
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