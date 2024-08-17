import React from 'react';
import ImageCard from './image-card';
import "./gallery.css"

const Gallery = () => {
    const cardsData = [
        {
            image: 'https://images.pexels.com/photos/2762673/pexels-photo-2762673.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'NewYork',
            price:29.99
        },
        {
            image: 'https://images.pexels.com/photos/12994737/pexels-photo-12994737.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'NewYork2',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/12564888/pexels-photo-12564888.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Porche',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/27663337/pexels-photo-27663337/free-photo-of-a-woman-in-a-pink-dress-walking-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'woman-in-a-pink-dress-walking-on-the-beach',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/27582996/pexels-photo-27582996/free-photo-of-a-statue-of-arco-da-rua-augusto-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'free-photo-of-a-statue-of-arco-da-rua-augusto-in-lisbon',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/27308308/pexels-photo-27308308/free-photo-of-lofoten-islands-of-norway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'free-photo-of-lofoten-islands-of-norway',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'free-photo-of-blocks-of-flats-in-city',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/27316259/pexels-photo-27316259/free-photo-of-a-field-with-hay-bales-in-it-under-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Field-with-hay-bales-in-it-under-a-blue-sky',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/27495825/pexels-photo-27495825/free-photo-of-flower-and-agate-flat-lay-with-delicate-petals.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Photo-of-flower-and-agate-flat-lay-with-delicate-petals',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/27674521/pexels-photo-27674521/free-photo-of-a-person-is-using-a-pay-phone-to-make-a-call.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Photo-of-a-person-is-using-a-pay-phone-to-make-a-call',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/26083604/pexels-photo-26083604/free-photo-of-red-and-black-flowers-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Photo-of-red-and-black-flowers-in-a-vase',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/27077972/pexels-photo-27077972/free-photo-of-dryers-and-currants-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Photo-of-dryers-and-currants-on-a-table',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/27496510/pexels-photo-27496510/free-photo-of-a-cup-of-coffee-surrounded-by-red-berries.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Photo-of-a-cup-of-coffee-surrounded-by-red-berries',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/26997897/pexels-photo-26997897/free-photo-of-woman-in-white-t-shirt-and-skirt-walking-in-golden-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Photo-of-woman-in-white-t-shirt-and-skirt-walking-in-golden-field',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/18356943/pexels-photo-18356943/free-photo-of-view-of-trees-growing-inside-a-building-with-windows-and-curtains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Animal vdo',
            price: 49.99
        },
        {
            image: 'https://images.pexels.com/photos/18356943/pexels-photo-18356943/free-photo-of-view-of-trees-growing-inside-a-building-with-windows-and-curtains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Photo-of-view-of-trees-growing-inside-a-building-with-windows-and-curtains',
            price:49.99
        },

        // Add more card data as needed
    ];

    return (
        <div className="gallery">
            {cardsData.map((card, index) => (
                
                    <ImageCard 
                    key={index} 
                    image={card.image} 
                    title={card.title} 
                    price={card.price} 
                />
            
            ))}
        </div>
    );
};

export default Gallery;
