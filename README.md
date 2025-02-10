<script setup>
import { defineModel, ref } from "vue";
import formatDate from "../functions/formatDate";

// ✅ Bind to parent with v-model
const tableData = defineModel();

// Store error messages and previous valid values
const errors = ref(Array(tableData.value.length).fill(""));
const previousValues = ref(
  tableData.value.map((item) => ({
    ENTSOE_DE_DAM_Price: item.ENTSOE_DE_DAM_Price,
    ENTSOE_GR_DAM_Price: item.ENTSOE_GR_DAM_Price,
    ENTSOE_FR_DAM_Price: item.ENTSOE_FR_DAM_Price,
  }))
);

// Validation function
const validateInput = (event, item, index, key) => {
  let value = event.target.value.trim();

  if (value === "-") {
    errors.value[index] = "Please enter a valid number.";
    event.target.value = previousValues.value[index][key];
    return;
  }

  let numericValue = Number(value);

  if (isNaN(numericValue) || numericValue < -2000 || numericValue > 2000) {
    errors.value[index] = "Value must be between -2000 and 2000.";
    event.target.value = previousValues.value[index][key];
    return;
  }

  errors.value[index] = "";
  item[key] = numericValue;
  previousValues.value[index][key] = numericValue;
};
</script>

<template>
  <div class="table-wrapper">
    <label for="table">Timeseries Table</label>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>ENTSOE_DE_DAM_Price</th>
            <th>ENTSOE_GR_DAM_Price</th>
            <th>ENTSOE_FR_DAM_Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>
              <input type="text" :value="formatDate(item.DateTime)" readonly />
            </td>
            <td>
              <div class="input-container">
                <input
                  type="number"
                  v-model="item.ENTSOE_DE_DAM_Price"
                  @input="validateInput($event, item, index, 'ENTSOE_DE_DAM_Price')"
                />
                <span v-if="errors[index]" class="error-message">{{ errors[index] }}</span>
              </div>
            </td>
            <td>
              <div class="input-container">
                <input
                  type="number"
                  v-model="item.ENTSOE_GR_DAM_Price"
                  @input="validateInput($event, item, index, 'ENTSOE_GR_DAM_Price')"
                />
                <span v-if="errors[index]" class="error-message">{{ errors[index] }}</span>
              </div>
            </td>
            <td>
              <div class="input-container">
                <input
                  type="number"
                  v-model="item.ENTSOE_FR_DAM_Price"
                  @input="validateInput($event, item, index, 'ENTSOE_FR_DAM_Price')"
                />
                <span v-if="errors[index]" class="error-message">{{ errors[index] }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script setup>
import { defineModel, ref } from "vue";
import formatDate from "../functions/formatDate";

// ✅ Bind to parent with v-model
const tableData = defineModel();

// Store error messages and previous valid values
const errors = ref(Array(tableData.value.length).fill(""));
const previousValues = ref(
  tableData.value.map((item) => ({
    ENTSOE_DE_DAM_Price: item.ENTSOE_DE_DAM_Price,
    ENTSOE_GR_DAM_Price: item.ENTSOE_GR_DAM_Price,
    ENTSOE_FR_DAM_Price: item.ENTSOE_FR_DAM_Price,
  }))
);

// Validation function
const validateInput = (event, item, index, key) => {
  let value = event.target.value.trim();

  if (value === "-") {
    errors.value[index] = "Please enter a valid number.";
    event.target.value = previousValues.value[index][key];
    return;
  }

  let numericValue = Number(value);

  if (isNaN(numericValue) || numericValue < -2000 || numericValue > 2000) {
    errors.value[index] = "Value must be between -2000 and 2000.";
    event.target.value = previousValues.value[index][key];
    return;
  }

  errors.value[index] = "";
  item[key] = numericValue;
  previousValues.value[index][key] = numericValue;
};
</script>

<template>
  <div class="table-wrapper">
    <label for="table">Timeseries Table</label>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>ENTSOE_DE_DAM_Price</th>
            <th>ENTSOE_GR_DAM_Price</th>
            <th>ENTSOE_FR_DAM_Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>
              <input type="text" :value="formatDate(item.DateTime)" readonly />
            </td>
            <td>
              <div class="input-container">
                <input
                  type="number"
                  v-model="item.ENTSOE_DE_DAM_Price"
                  @input="validateInput($event, item, index, 'ENTSOE_DE_DAM_Price')"
                />
                <span v-if="errors[index]" class="error-message">{{ errors[index] }}</span>
              </div>
            </td>
            <td>
              <div class="input-container">
                <input
                  type="number"
                  v-model="item.ENTSOE_GR_DAM_Price"
                  @input="validateInput($event, item, index, 'ENTSOE_GR_DAM_Price')"
                />
                <span v-if="errors[index]" class="error-message">{{ errors[index] }}</span>
              </div>
            </td>
            <td>
              <div class="input-container">
                <input
                  type="number"
                  v-model="item.ENTSOE_FR_DAM_Price"
                  @input="validateInput($event, item, index, 'ENTSOE_FR_DAM_Price')"
                />
                <span v-if="errors[index]" class="error-message">{{ errors[index] }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>