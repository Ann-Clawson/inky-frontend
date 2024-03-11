/* eslint-disable react/prop-types */
export function ProfileShow(props) {
  return (
    <div>
      <h1 onClick={props.onClose}>{props.user.first_name}</h1>
    </div>
  );
}
