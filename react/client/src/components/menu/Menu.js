import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductFilters from './ProductFilters';

function Menu() {
  const [currentFilter, setCurrentFilter] = useState('*');
  const [viewMode, setViewMode] = useState('grid');

  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Sạch & Tươi ngon</p>
                <h1>Menu</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-9">
              <ProductFilters 
                currentFilter={currentFilter} 
                onFilterChange={setCurrentFilter} 
              />
            </div>
            <div className="col-lg-3 text-right">
              <div className="view-mode-buttons">
                <button 
                  className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'} mr-2`}
                  onClick={() => setViewMode('grid')}
                >
                  <i className="fas fa-th"></i>
                </button>
                <button 
                  className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setViewMode('list')}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>

          <ProductList 
            filter={currentFilter} 
            viewMode={viewMode}
          />
        </div>
      </div>
    </>
  );
}

export default Menu;