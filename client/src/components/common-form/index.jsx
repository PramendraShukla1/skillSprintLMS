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
      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 p-5 pt-10 pb-10 rounded-xl shadow-2xl mt-10 bg-white "
      >
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
