export const SampleCSS = `
  body {
	margin: 0;
  }

  .navbar {
	  width: 100%;
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 1;
	  display: flex;
	  align-items: center;
	  background-color: #0B6AFF;
	  color: #fff;
	  height: 60px;
	  font-size: 15px;
	  letter-spacing: 0.05rem;
	}

	.logo {
	  margin-left: 16px;
	  float: left;
	}

	.datasearch {
	  margin-left: auto;
	  margin-right: auto;
	}

	.datasearch .searchbox {
	  min-width: 400px;
	  border-radius: 30px;
	  padding: 5px 16px 5px 40px;
	}

	.datasearch .search-icon {
		padding: 0 10px;
	}

	.suggestionlist {
	  color: #424242;
	  width: 90%;
	  margin-left: 5%;
	}

	.display {
	  display: flex;
	  margin-top: 60px;
	}

	.leftSidebar {
	  width: 320px;
	  height: calc(100% - 50px);
	  overflow-y: auto;
	  padding: 15px 20px;
	  position: fixed;
	  left: 0;
	  right: 0;
	  border-right: 1px solid #f0f0f0;
	}

	.leftSidebar > div {
	  margin: 40px 0;
	}

	@media all and (max-width: 768px) {
	  .leftSidebar {
		position: fixed;
		z-index: 3;
		background: #fff;
		width: 100%;
		border-right: 0;
		border-bottom: 1px solid #f0f0f0;
		display: none;
	  }

	  .leftSidebar.active {
		display: block;
	  }

	  .logo {
		  display: none;
	  }
	}

	.author .author-list {
	  max-height: 150px;
	}

	.mainBar {
	  width: calc(100% - 320px);
	  position: relative;
	  left: 320px;
	  padding: 10px 30px;
	  background-color: #fefefe;
	}

	@media all and (max-width: 768px) {
	  .mainBar {
		width: 100%;
		left: 0;
	  }
	}

	.result-data .result-image {
	  background-size: cover;
	  max-height: 200px;
	}

	.result-author {
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}

  .star {
	  color: gold;
  }

  .result-data .result-title {
	  display: block;
	  display: -webkit-box;
	  white-space: normal;
	  height: 50px;
	  overflow: hidden;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
	  text-overflow: ellipsis;
  }

  .result-data .result-item {
	  box-shadow: none;
	  max-width: 150px;
	  min-width: auto;
  }

  .result-data .result-item:hover,
  .result-data .result-item:focus,
  .result-data .result-item:visited {
	  box-shadow: none;
  }

  .toggle-btn {
	display: none;
	cursor: pointer;
	  padding: 5px;
	  margin: 5px;
	  text-align: center;
	border-radius: 25px;

	color: white;
	  width: 200px;
	  font-size: 1.1rem;
	  font-weight: bold;
	  padding: 10px;
	  position: fixed;
	  bottom: 4rem;
	  left: calc(50% - 100px);
	  margin: 0 auto;
	  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	  z-index: 4;
	background: #0B6AFF;
	  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .toggle-btn:hover {
	color: white;
	background: #0a5de2;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media all and (max-width: 768px) {
	.toggle-btn {
	  display: block;
	}
  }

  @media all and (max-width: 420px) {
	.datasearch .searchbox {
	  min-width: 300px;
	}
  }

`;
