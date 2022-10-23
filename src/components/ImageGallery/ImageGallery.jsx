import { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import { imageApi } from "../API/ImageApi";
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import ThreeDots from '../Loader/Loader';
import s from './ImageGallery.module.css';



export class Gallery extends Component {
    state = {
        gallery: [],
        isLoading: false,
        error: null,
        page: 1,
        currentImage: null,
    };

    static propTypes = {
        searchQuery: PropTypes.string.isRequired,
        onUpdate: PropTypes.func.isRequired,
    }


    
}