import React from 'react';
import clsx from 'clsx';
import { Field, FieldAttributes } from 'formik';
import styles from './styles.module.css';

type LabelFieldProps = {
  labelProps: React.ComponentProps<'label'>;
  fieldProps: FieldAttributes<unknown>;
};

const LabelField: React.FC<LabelFieldProps> = ({ labelProps, fieldProps }) => {
  const fieldClasses = clsx(
    fieldProps.className,
    styles.inputMaterial,
    styles.formControl,
  );
  const labelClasses = clsx(labelProps.className, styles.formLabel);

  return (
    <>
      <label {...labelProps} className={labelClasses}>
        {labelProps.children}
      </label>
      <Field {...fieldProps} className={fieldClasses} />
    </>
  );
};

export const CheckBoxField: React.FC<LabelFieldProps> = ({
  labelProps,
  fieldProps,
}) => {
  const fieldClasses = clsx(fieldProps.className, styles.formCheckInput);
  const labelClasses = clsx(labelProps.className, styles.formCheckLabel);

  return (
    <div className={styles.formCheck}>
      <Field {...fieldProps} className={fieldClasses} type="checkbox" />
      <label {...labelProps} className={labelClasses}>
        {labelProps.children}
      </label>
    </div>
  );
};

export default LabelField;
