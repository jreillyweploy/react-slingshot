import React from 'react';
import {func} from 'prop-types';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';
import {fuelSavings} from '../types';
import { Button, FormLabel } from '@zendesk/garden-react-components';

const FuelSavingsForm = ({fuelSavings, onSaveClick, onChange}) => (
  <div>
    <h2>Fuel Savings Analysis</h2>
    <table>
      <tbody>
        <tr>
          <td><FormLabel htmlFor="newMpg">New Vehicle MPG</FormLabel></td>
          <td><FuelSavingsTextInput onChange={onChange} name="newMpg" value={fuelSavings.newMpg}/>
          </td>
        </tr>
        <tr>
          <td><FormLabel htmlFor="tradeMpg">Trade-in MPG</FormLabel></td>
          <td><FuelSavingsTextInput onChange={onChange} name="tradeMpg" value={fuelSavings.tradeMpg}/>
          </td>
        </tr>
        <tr>
          <td><FormLabel htmlFor="newPpg">New Vehicle price per gallon</FormLabel></td>
          <td><FuelSavingsTextInput onChange={onChange} name="newPpg" value={fuelSavings.newPpg}/>
          </td>
        </tr>
        <tr>
          <td><FormLabel htmlFor="tradePpg">Trade-in price per gallon</FormLabel></td>
          <td><FuelSavingsTextInput onChange={onChange} name="tradePpg" value={fuelSavings.tradePpg}/>
          </td>
        </tr>
        <tr>
          <td><FormLabel htmlFor="milesDriven">Miles Driven</FormLabel></td>
          <td>
            <FuelSavingsTextInput
              onChange={onChange}
              name="milesDriven"
              value={fuelSavings.milesDriven}/>
            miles per
            <select
              name="milesDrivenTimeframe"
              onChange={onChange}
              value={fuelSavings.milesDrivenTimeframe}>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><label>Date Modified</label></td>
          <td>{fuelSavings.dateModified}</td>
        </tr>
      </tbody>
    </table>

    <hr/>

    {fuelSavings.necessaryDataIsProvidedToCalculateSavings && <FuelSavingsResults savings={fuelSavings.savings}/>}
    <Button type="default" value="Save" onClick={onSaveClick}>Save</Button>
  </div>
);

FuelSavingsForm.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  fuelSavings: fuelSavings.isRequired
};

export default FuelSavingsForm;
