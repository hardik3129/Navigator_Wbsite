import axios from 'axios';
import { addDoc, doc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase';

function AddItems() {

    const [user, setuser] = useState({})
    const Navigate = useNavigate()
    const { id } = useParams()
    
    const getdata = async () => {
        const getuser = await axios.get(`${process.env.REACT_APP_BASE_URL}/items/${id}`)
        setuser(getuser.data)
    }
    
    useEffect(() => {
        // getdata()
        // console.log(user);
    },[])
    
    
    const OnSubmitAddItem = async (e) => {
        e.preventDefault()
        if(id) {
            const data = {
                productName : e.target.product_name.value,
                productPrice : e.target.product_price.value,
                productQauntity : e.target.product_qauntity.value
            }

            axios.patch(`${process.env.REACT_APP_BASE_URL}/items/${id}`,data)
            .then(() => {
                Navigate('/')
                toast.success('Item Successfully Updated')
            })
            .catch(error => 
                toast.error(new Error(error).message)
            )
        }
        else {
            const data = {
                productName : e.target.product_name.value,
                productPrice : e.target.product_price.value,
                productQauntity : e.target.product_qauntity.value
            }
            try {
                await addDoc(doc(db,'orders',data))
                Navigate('/')
                toast.success(`successfully register ${data.productName} data`)
            } catch (error) {
                toast.error(new Error(error).message)
            }

            // ================================ JSON SERVER API POST =======================================
            // try {
            //     await axios({
            //         url : `${process.env.REACT_APP_BASE_URL}/items`,
            //         method : 'POST',
            //         data
            //     })
            //     Navigate('/')
            //     toast.success('Item Successfully Registerd')
            // } catch (error) {
            //     toast.error(new Error(error).message)
            // }
        }
    }
    
    let n = 5;
    let string = '';


    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            string += " "
        }
        for (let k = 1; k <= i; k++){
            string += i+" "
        }
        string += "\n"
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n; j >= i; j--) {
            string += " "
        }
        for (let k = 1; k <= i; k++){
            string += i+" "
        }
        string += "\n"
    }

    useEffect(() => {
        console.log(string);
    },[])
    
  return (
    <Col  className='d-flex justify-content-center'>
        <Form className='col-6' onSubmit={OnSubmitAddItem}>
        <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Col md={12}>
                <Form.Label column sm={4}>
                Product Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control defaultValue={user?.productName} type="text" name='product_name' placeholder="Product Name" required />
                </Col>
            </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Col md={12}>
                <Form.Label column sm={4}>
                Product Price
                </Form.Label>
                <Col sm={10}>
                <Form.Control defaultValue={user?.productPrice} type="number" name='product_price' placeholder="Product Price" required />
                </Col>
            </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Col md={12}>
                <Form.Label column sm={4}>
                Product Quantity
                </Form.Label>
                <Col sm={10}>
                <Form.Control defaultValue={user?.productQauntity} type="number" name='product_qauntity' placeholder="Product Quantity" required />
                </Col>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
            <Button type="submit">{id ? 'Edit items' : 'Add Items'}</Button>
            </Col>
        </Form.Group>
        </Form>
    </Col>
  );
}

export default AddItems;