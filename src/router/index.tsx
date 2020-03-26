import React from 'react';
export const routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/about',
		component: About,
		exact: false,
	},
];
function Home() {
	return <h3>Home</h3>;
}

function About() {
	return <h3>About</h3>;
}
