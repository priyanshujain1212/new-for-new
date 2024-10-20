<template>
  <div class="sign-in-container">
    <div class="d-flex flex-wrap mb-4 header-container">
      <div class="mr-auto">
        <span class="text-title-main">{{ "Challans" }}</span>
      </div>
      <div class="search-container">
        <input 
          type="text" 
          v-model="searchTerm" 
          @input="filterChallans" 
          placeholder="Search Challans..." 
          class="search-input"
        />
      </div>
      <div>
        <button type="submit" @click="navigateToAddChallan" class="btn btn-primary">
          {{ "New Challan" }}
        </button>
      </div>
    </div>

    <hr>

    <div class="form-card-container">
      <!-- Individual card for each order -->
      <div 
        v-for="(order, index) in filteredChallans" 
        :key="index" 
        :class="['form-card', order.status === 1 ? 'light-red' : 'light-green']"
      >
        <!-- PO Number and Order Date -->
        <div class="header">
          <span><strong>Challan Number:</strong> {{ order.po_number }}</span>
          <span class="float-right"><strong> Date:</strong> {{ order.order_date }}</span>
        </div>
        <hr>

        <!-- Products and Amounts -->
        <div class="products-amounts">
          <div class="products">
            <p v-for="(product, idx) in order.products" :key="idx">{{ product.name }}</p>
          </div>
          <div class="amounts">
            <p v-for="(product, idx) in order.products" :key="idx">{{ product.total_amount }}</p>
          </div>
        </div>

        <!-- Grand Total and Total Order Amount -->
        <div class="totals">
          <span><strong>Total Amount:</strong></span>
          <span class="float-right">{{ order.total_order_amount }}</span>
        </div>

        <hr>

        <!-- Action buttons -->
        <div class="action-buttons">
          <button @click="viewOrder(order)" class="btn btn-outline-primary">View</button>
          <button @click="editOrder(order)" class="btn btn-outline-secondary">Edit</button>
          <button @click="payOrder(order)" class="btn btn-outline-success">Pay</button>
          <button @click="printOrder(order)" class="btn btn-outline-info">Print</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      searchTerm: '', 
    };
  },

  setup() {
    const router = useRouter();

    const navigateToAddChallan = () => {
      router.push({ name: 'addchallan' });
    };

    return { navigateToAddChallan };
  },

  computed: {
    filteredChallans() {
      return this.searchTerm
        ? this.order_data.filter(order =>
            order.po_number.toLowerCase().includes(this.searchTerm.toLowerCase())
          )
        : this.order_data;
    }
  },

  props: {
    order_data: {
      type: Array,
      required: true
    }
  },

  methods: {
    viewOrder(order) {
      // View order logic
    },
    editOrder(order) {
      // Edit order logic
    },
    payOrder(order) {
      // Pay order logic
    },
    printOrder(order) {
      // Print order logic
    }
  }
};
</script>

<style scoped>

.sign-in-container {
  display:flexbox;
  /* justify-content: center;
  align-items: center; */
  padding: 30px;
  height: 205vh;
  background: linear-gradient(135deg, #f7fbff, #fef7ff); /* Gradient color */
}

.header-container {
  align-items: center;
}

.form-card-container {
  display: grid;
 
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Mobile responsiveness */
@media (max-width: 1200px) {
  .form-card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .form-card-container {
    grid-template-columns: 1fr;
  }
}

/* Form card styling */
.form-card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.form-card:hover {
  transform: translateY(-10px);
}

.header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.products-amounts {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;

}

.products p, .amounts p {
  margin: 0;
}

.totals {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 15px;
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.btn {
  flex: 1;
  margin: 5px;
}

.light-green {
  background-color: rgba(144, 238, 144, 0.2);
}

.light-red {
  background-color: rgba(255, 182, 193, 0.2);
}

.text-title-main {
  font-size: 30px;
  font-style: italic;
  color: black;
}

hr {
  border: none;
  height: 1px;
  background-color: rgb(81, 81, 81);
  margin: 20px 0;
}

.search-container {
  margin-right: 15px;
}

.search-input {
  border: 1px solid #464343;
  border-radius: 4px;
  height: 35px;
  padding: 5px 10px;
}

/* Responsive font size for titles */
@media (max-width: 768px) {
  .text-title-main {
    font-size: 24px;
  }
}
</style>
