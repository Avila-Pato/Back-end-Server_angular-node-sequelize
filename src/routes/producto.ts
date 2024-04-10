import { Router } from "express";
import { getProducts, getProduct, deleteProduct, postProduct, updateProduct } from '../controllers/producto';

const router = Router();

router.get('/', getProducts );
router.get('/', getProduct );  
router.delete('/:id',  deleteProduct); // en este id puede ser dinamico quiere decir que peude ser 1, 5 , 10
router.post('/', postProduct);
router.put('/:id', updateProduct);

export default router;