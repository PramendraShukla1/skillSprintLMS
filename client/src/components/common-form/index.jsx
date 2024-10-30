/* eslint-disable */

import { Button } from "../ui/button";
import FormControls from "./form-controls";

const CommonForm = ({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className=" rounded-xl  bg-white ">
        {/* Form Controls */}
        <FormControls
          formControls={formControls}
          formData={formData}
          setFormData={setFormData}
        />
        <Button type="submit" className="mt-5 w-full">
          {buttonText || "Submit"}
        </Button>
      </form>
    </>
  );
};

export default CommonForm;
