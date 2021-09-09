import React from "react";

export default class VacantForm extends React.Component {
  constructor(props) {
    super(props);
    this.VacantFormValues = {
      email: "",
      name: "",
      last_name: "",
      birthday: "",
      country: "",
      city: "",
      whatsapp: "",
      english: null,
      remote: null,
      internet: "",
      experience: "",
      selection: "",
      wish: "",
      skill_level: [],
    };
  }
  getValidationState() {
    if (this.VacantFormValues.email === "") return "error";
    if (this.VacantFormValues.name === "") return "error";
    if (this.VacantFormValues.last_name === "") return "error";
    if (this.VacantFormValues.birthday === "") return "error";
    if (this.VacantFormValues.country === "") return "error";
    if (this.VacantFormValues.city === "") return "error";
    if (this.VacantFormValues.whatsapp === "") return "error";
    if (this.VacantFormValues.english === null) return "error";
    if (this.VacantFormValues.remote === null) return "error";
    if (this.VacantFormValues.internet === "") return "error";
    if (this.VacantFormValues.experience === "") return "error";
    if (this.VacantFormValues.selection === "") return "error";
    if (this.VacantFormValues.wish === "") return "error";
    if (
      this.VacantFormValues.skill_level.length === 0 ||
      this.VacantFormValues.skill_level.length < this.props.vacant.skills.length
    )
      return "error";
    return "success";
  }
  render() {
    return (
      <div>
        <form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setField("name", e.target.value)}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
        </form>
      </div>
    );
  }
}
