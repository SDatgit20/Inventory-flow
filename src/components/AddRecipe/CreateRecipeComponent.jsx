import React, { Component } from 'react';
import ItemService from '../../service/ItemService';
import './CreateRecipe.css';

class CreateItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            youtubeUrl: '',
            uploadedImage: null,
        };

        // Binding event handlers
        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
        this.changeItemDescriptionHandler = this.changeItemDescriptionHandler.bind(this);
        this.changeYoutubeUrlHandler = this.changeYoutubeUrlHandler.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    changeItemNameHandler(event) {
        this.setState({ name: event.target.value });
    }

    changeItemDescriptionHandler(event) {
        this.setState({ description: event.target.value });
    }

    changeYoutubeUrlHandler(event) {
        this.setState({ youtubeUrl: event.target.value });
    }

    handleDrop(event) {
        event.preventDefault();
        const file = event.target.files[0];
        this.setState({ uploadedImage: file });
    }

    saveItem = async (e) => {
        e.preventDefault();
        const { name, description, youtubeUrl, uploadedImage } = this.state;
        let item = { name, description, youtubeUrl, uploadedImage };
        console.log('item =>', item.name);

        try {
            await ItemService.addItem(item);
            window.location.href = '/items';
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div>
                <div className="container p-5">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className='text-center add-heading'>Add Recipe</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group mb-3">
                                        <label>Recipe Name</label>
                                        <input type="text" placeholder='Recipe Name' name='name' className='form-control'
                                            value={this.state.name} onChange={this.changeItemNameHandler} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Recipe Description</label>
                                        <input type="text" placeholder='Recipe Description' name='description' className='form-control'
                                            value={this.state.description} onChange={this.changeItemDescriptionHandler} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>YouTube URL</label>
                                        <input type="text" placeholder='YouTube URL' name='youtubeUrl' className='form-control'
                                            value={this.state.youtubeUrl} onChange={this.changeYoutubeUrlHandler} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Upload Image</label>
                                        <div className="dropbox" onDrop={this.handleDrop} onDragOver={this.allowDrop}>
                                            Drop image here or click to select
                                            <input type="file" name="image" className="form-control-file" onChange={this.handleDrop} />
                                        </div>
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveItem}>Add Recipe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateItemComponent;
