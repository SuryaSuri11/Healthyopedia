import classes from './products.module.css';

function ProductCategory() {
  return (
    <div className={classes.product_category}>
      <h2>Product categories</h2>
      <p>
        <input type="radio" id="respiratory" name="respiratory" value="respiratory" />
        <label for="respiratory">Respiratory Care</label>
      </p>
      <p>
        <input type="radio" id="bone" name="bone" value="bone" />
        <label for="bone">Bone and Joint care</label>
      </p>
      <p>
        <input type="radio" id="pain" name="category" value="pain" />
        <label for="pain">Pain Relief</label>
      </p>
      <p>
        <input type="radio" id="cardiac" name="cardiac" value="cardiac" />
        <label for="cardiac">Cardiac Care</label>
      </p>
      <p>
        <input type="radio" id="kidney" name="kidney" value="kidney" />
        <label for="kidney">Kidney care</label>
      </p>
      <p>
        <input type="radio" id="liver" name="liver" value="liver" />
        <label for="liver">Liver care</label>
      </p>
      <p>
        <input type="radio" id="diabetic" name="diabetic" value="diabetic" />
        <label for="diabetic">Diabetic care</label>
      </p>
    </div>
  );
}

export default ProductCategory;