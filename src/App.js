import cssModules from "./App.module.css";

export default function App() {
  return (
    <form className={cssModules.form}>
      <div className={cssModules.formGroup}>
        <label htmlFor="username" className={cssModules.formLabel}>
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Input username"
          className={cssModules.formInput}
        />
      </div>
      <div className={cssModules.formGroup}>
        <label htmlFor="password" className={cssModules.formLabel}>
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Input password"
          className={cssModules.formInput}
        />
      </div>
    </form>
  );
}
