import classes from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={classes.loading}>
      <div className={classes.pulse}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
