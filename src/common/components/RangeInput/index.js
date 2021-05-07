import React, { useState } from 'react';
import Modal from 'common/components/Modal';
import Input from 'common/components/Input';
import Button from 'common/components/atm/Button';
import classes from './RangeInput.module.scss';

export default function RangeInput({
  label,
  ligature = 'até',
  value = [0, 1],
  onChange,
  dataTestId,
  valueDataTestId,
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
        data-testid={dataTestId || 'rangeInput'}
        type="button"
        className={classes.input}
        onClick={() => setShowModal(!showModal)}
      >
        <p>{label}</p>

        <div data-testid={valueDataTestId || 'value'} className={classes.value}>
          {`${minValue} ${ligature} ${maxValue}`}
        </div>
      </button>

      <Modal show={showModal}>
        <Input
          dataTestId="minInput"
          label="Mínimo"
          value={minValue}
          onChange={setMinValue}
        />

        <Input
          dataTestId="maxInput"
          label="Maximo"
          value={maxValue}
          onChange={setMaxValue}
        />

        <div className={classes.buttons}>
          <Button
            dataTestId="cancelButton"
            className={classes.cancelButton}
            onClick={handleClose}
          >
            Cancelar
          </Button>

          <Button
            dataTestId="okButton"
            className={classes.okButton}
            onClick={handleOk}
          >
            Ok
          </Button>
        </div>
      </Modal>
    </div>
  );
}
