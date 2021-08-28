import React, { Component } from "react";
import { Header, Table } from "./components";
import { Tabs } from "../../Components";
import Constant from "../../constants";
import Layout from "../../Layout/index";

export default class ClientManagement extends Component {
  state = {
    tableData: Constant.TABLE_DATASET,
    tableHeader: Constant.TALBE_HEADER,
    tabs: [
      { name: "All Customers", value: "allCustomers" },
      { name: "Ongoing Customers", value: "ongoingCustomers" },
    ],
    selectedTab: { name: "Ongoing Customers", value: "ongoingCustomers" },
  };

  onChange = async (value) => {
    await this.setState({ selectedTab: value });
  };

  render() {
    return (
      <Layout>
        <div className="client-management">
          <Header title="Client Management" />
          <section className="client-main-content">
            <div className="tab-container">
              <Tabs
                dataSet={this.state.tabs}
                value={this.state.selectedTab.value}
                onTabChange={this.onChange}
              >
                <Table
                  header={this.state.tableHeader}
                  dataSet={this.state.tableData}
                />
              </Tabs>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
