import React from 'react'; 
import Dropdown from 'react-bootstrap/Dropdown'; 
import { FaFilter } from "react-icons/fa";
import styles from './StockFilter.module.scss';

export const StockFilter = ({ filterStocks, setStocks, dataHomePageStocks }) => {
  return (
    <Dropdown className={`${styles.filterStock} ${styles.customDropdown}`}>
      <Dropdown.Toggle 
        variant="light" 
        id="dropdown-basic"
        className={styles.dropdownToggle}
      >
        <FaFilter className={styles.filterIcon}/> Выбрать товар
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.dropdownMenu}>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => setStocks(dataHomePageStocks)}
        >
          Смотреть все
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("building")}
        >
          Стеновые и фасадные материалы
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("roof")}
        >
          Кровля и водосточная система
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("cement")}
        >
          Цемент и сыпучие материалы
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("lumber")}
        >
          Пиломатериалы и отделка деревом
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("electrics")}
        >
          Электрика
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("sewage")}
        >
          Канализация и водоотведение
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("polycarbonate")}
        >
          Поликарбонат
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("paint")}
        >
          Краски
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("mounting-foam")}
        >
          Пена монтажная, жидкие гвозди
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("plumbing")}
        >
          Сантехника
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("kiln-brick")}
        >
          Кирпич
        </Dropdown.Item>
        <Dropdown.Item 
          as="button" 
          className={styles.dropdownItem}
          onClick={() => filterStocks("baseboard")}
        >
          Погонажные изделия
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}