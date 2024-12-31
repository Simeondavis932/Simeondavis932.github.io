body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.app {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: white;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
}

.header .nav span {
  font-size: 16px;
}

.main {
  padding: 20px;
}

.balance {
  text-align: center;
  margin-bottom: 20px;
}

.balance .current-balance {
  font-size: 28px;
  color: orange;
  margin: 0;
}

.recharge-section h2 {
  margin: 0 0 10px;
}

.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.option {
  background-color: #f0f0f0;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  position: relative;
}

.option.selected {
  background-color: #007bff;
  color: white;
  border-color: #0056b3;
}

.option .bonus {
  font-size: 12px;
  color: #ffeb3b;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

#custom-input {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px auto;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.footer {
  text-align: center;
  padding: 10px;
}

.confirm-btn {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.confirm-btn:hover {
  background-color: #0056b3;
}
