/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

const { Storefront } = require('@shopify/hydrogen');

const AppLoadContext = {
  tailwind: true,
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
  future: {
    v2_dev: true,
    v2_meta: true,
    v2_headers: true,
    v2_errorBoundary: true,
    v2_routeConvention: true,
    v2_normalizeFormMethod: true,
  },

  storefront: Storefront,  // This is just a mock reference for demonstration
};

module.exports = AppLoadContext;