import { Button, Dialog, Rating } from "@mui/material";
import { MdClose } from "../../assets/icons";

const ProductModal = (props) => {
  return (
    <>
      <Dialog
        open={true}
        className="ProductModal"
        onClose={() => props.closeProductModal()}
      >
        <Button
          className="closeModal"
          onClick={() => props.closeProductModal()}
        >
          <MdClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          All Natural Italian-Style Chicken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
          </div>
          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>

        <hr />

        <div className="row mt-2 productDetailsModal">
          <div className="col-md-5">
            <div className="productZoom"></div>
          </div>

          <div className="col-md-7"></div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
