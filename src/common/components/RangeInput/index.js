import React, { useState } from 'react';
import Modal from 'common/components/Modal';
import Input from 'common/components/Input';
import Button from 'common/components/Button';
import classes from './RangeInput.module.scss';

export default function RangeInput({
  label,
  ligature = 'até',
  value = [0, 1],
  onChange,
}) {
  const [showModal, setShowModal] = useState(false);
  const [minValue, setMinValue] = useState(value[0]);
  const [maxValue, setMaxValue] = useState(value[1]);

  const handleClose = () => setShowModal(false);

  const handleOk = () => {
    setShowModal(false);
    onChange([minValue, maxValue]);
  };

  return (
    <div className={classes.rangeInput}>
      <button
        type="button"
        className={classes.input}
        onClick={() => setShowModal(!showModal)}
      >
        <p>{label}</p>

        <div className={classes.value}>
          {`${minValue} ${ligature} ${maxValue}`}
        </div>
      </button>

      <Modal show={showModal}>
        <Input label="Mínimo" value={minValue} onChange={setMinValue} />

        <Input label="Maximo" value={maxValue} onChange={setMaxValue} />

        <div className={classes.buttons}>
          <Button className={classes.cancelButton} onClick={handleClose}>
            Cancelar
          </Button>

          <Button className={classes.okButton} onClick={handleOk}>
            Ok
          </Button>
        </div>
      </Modal>
    </div>
  );
}
