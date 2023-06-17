import React, { useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { images as imagesList } from '../images'
import { fetchImages } from "../redux-toolkit/slices/imagesListSlice";
import styles from '../styles/ImagesList.module.css'
import ImageItem from './ImageItem';

const ImagesList = () => {
    // to fetch data from store
    const {images} = useSelector((state)=>state);
    const dispatch = useDispatch();
    useEffect(()=>{
        //to dispatch action
        dispatch(fetchImages(imagesList))
    },[])
    return (
        <div className={styles.ImagesListContainer}>
            {/*  for optimizations for large lists of images, we can use libraries (e.g., react-virtualized or react-window) to render only the visible portion of the list, improving performance when dealing with a large number of images. */
            images.length>0?images.map((image,index)=>{
                return <ImageItem image={image} key={index}/>
            }):'loading'}
        </div>
    )
}

export default ImagesList