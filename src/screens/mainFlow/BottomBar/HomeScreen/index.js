import { useState } from 'react';
import { HomeScreenView } from './HomeScreenView';

const HomeScreen = () => {
	var [bestPicks, setBestPicks] = useState([
		{
			img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
			title: 'New Building3',
			price: '$45,345.00',
			address: 'New Town Street, 3465, wri New York',
			facilities: ['Bedroom', 'Bathroom', 'Square'],
			images: [
				{
					img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
				},
				{
					img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
				},
				{
					img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
				}
			]
		},
		{
			img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
			title: 'New Building4',
			price: '$45,345.00',
			address: 'New Town Street, 3465, wri New York',
			facilities: ['Bedroom', 'Bathroom', 'Square'],
			images: [
				{
					img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
				},
				{
					img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
				},
				{
					img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
				}
			]
		},
		{
			img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
			title: 'New Building4',
			price: '$45,345.00',
			address: 'New Town Street, 3465, wri New York',
			facilities: ['Bedroom', 'Bathroom', 'Square'],
			images: [
				{
					img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
				},
				{
					img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
				},
				{
					img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
				}
			]
		},
		{
			img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
			title: 'New Building4',
			price: '$45,345.00',
			address: 'New Town Street, 3465, wri New York',
			facilities: ['Bedroom', 'Bathroom', 'Square'],
			images: [
				{
					img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
				},
				{
					img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
				},
				{
					img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
				}
			]
		},
		{
			img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
			title: 'New Building4',
			price: '$45,345.00',
			address: 'New Town Street, 3465, wri New York',
			facilities: ['Bedroom', 'Bathroom', 'Square'],
			images: [
				{
					img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
				},
				{
					img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
				},
				{
					img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
				}
			]
		},
		{
			img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
			title: 'New Building4',
			price: '$45,345.00',
			address: 'New Town Street, 3465, wri New York',
			facilities: ['Bedroom', 'Bathroom', 'Square'],
			images: [
				{
					img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
				},
				{
					img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
				},
				{
					img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
				}
			]
		},
		{
			img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
			title: 'New Building4',
			price: '$45,345.00',
			address: 'New Town Street, 3465, wri New York',
			facilities: ['Bedroom', 'Bathroom', 'Square'],
			images: [
				{
					img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80",
				},
				{
					img: "https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=612x612&w=0&k=20&c=BwEWUSIac6s7p2wXsVJ6Pffuy8EWkaYh88HaRQ8ltis=",
				},
				{
					img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
				}
			]
		}
	])
	return <HomeScreenView bestPicks={bestPicks} />;
};

export default HomeScreen;
