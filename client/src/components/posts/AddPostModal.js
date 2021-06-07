import React, {useContext, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {PostContext} from '../../contexts/PostContext'

const AddPostModal = () => {
  // Contexts
  const {showAddPostModal, setShowAddPostModal, addPost, setShowToast} = useContext(PostContext) 

  // State
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    url: '',
    status: 'TO LEARN'
  })

  const {title, description, url} = newPost

  const onChangeNewPostForm = e => {
    setNewPost({...newPost, [e.target.name]: e.target.value})
  }

  const closeDialog = () => {
    setNewPost({
      title: '',
      description: '',
      url: '',
      status: 'TO LEARN'
    })
    setShowAddPostModal(false)
  }

  const onSubmit = async e => {
    e.preventDefault();
    const {success, message} = await addPost(newPost);
    setShowToast({
      show: true,
      message,
      type: success? 'success': 'danger',
    })
    closeDialog();
  }
  

  return (
    <Modal show={showAddPostModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>What do you mean?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              required
              aria-describedby="title-help"
              value={title}
              onChange={onChangeNewPostForm}
            />
            <Form.Text id='title-help' muted>Required</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as='textarea'
              row={3}
              placeholder="Description"
              name="description"
              value={description}
              onChange={onChangeNewPostForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Youtube Tutorial Url"
              name="url"
              value={url}
              onChange={onChangeNewPostForm}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeDialog}>Cancel</Button>
          <Button variant='primary' type='submit'>Add</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddPostModal;
