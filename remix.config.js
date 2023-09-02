/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

const { Storefront } = require('@shopify/hydrogen');

const AppLoadContext = {
  session: {
    /** 
     * @param {string} key 
     * @returns {string|null} 
     */
    get: function(key) {
      // Mock implementation
    },

    /** @returns {Promise<string>} */
    destroy: function() {
      // Mock implementation
    },

    /** 
     * @param {string} key 
     * @param {string} value 
     */
    flash: function(key, value) {
      // Mock implementation
    },

    /** @param {string} key */
    unset: function(key) {
      // Mock implementation
    },

    /** 
     * @param {string} key 
     * @param {string} value 
     */
    set: function(key, value) {
      // Mock implementation
    },

    /** @returns {Promise<string>} */
    commit: function() {
      // Mock implementation
    }
  },

  storefront: Storefront,  // This is just a mock reference for demonstration

  env: {
    SESSION_SECRET: '34893h40chdcnmd30dm3md3xch7erfera0',
    PUBLIC_STOREFRONT_API_TOKEN: '5ae809973e0476d20e219bacd13158e3',
    PRIVATE_STOREFRONT_API_TOKEN: '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',
    PUBLIC_STORE_DOMAIN: 'hydrogen-store-unitysoft1.myshopify.com'
  }
};

module.exports = AppLoadContext;