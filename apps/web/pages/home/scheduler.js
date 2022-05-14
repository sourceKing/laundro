import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import ScheduleCalender, {
  Button,
  Col,
  DownCircleOutlined,
  Radio,
  Row,
  Space,
  withUserLayout,
} from "ui";
import styles from "../../styles/Home.module.css";

export default withUserLayout(() => {
  const router = useRouter();
  const [day, setDay] = useState(moment.weekdays()[new Date().getDay()]);
  const [recurringValue, setRecurringValue] = useState("weekly");

  const onRecurringChange = (e) => {
    console.log("Recurring checked", e.target.value);
    setRecurringValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Schedule a pickup date</title>
        <meta
          name="description"
          content="Schedule a pickup date for your laundry"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Row
          gutter={[8, 16]}
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            padding: "0 0 40px 0",
            // padding: 0,
            overflowY: "scroll",
          }}
        >
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                backgroundColor: "#0644A215",
                borderRadius: "100%",
              }}
            >
              <DownCircleOutlined style={{ color: "#0644A2", fontSize: 25 }} />
            </div>
            <h2 style={{ margin: 0 }}>Schedule a pickup</h2>
            <span>Select a date for your clothes to be picked up</span>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ScheduleCalender onDatePicked={(day) => setDay(day)} />
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>Make This Pickup Recurring</h3>
            <Radio.Group
              onChange={onRecurringChange}
              value={recurringValue}
              size="large"
              style={{ textAlign: "left" }}
            >
              <Space direction="vertical">
                <Radio value="weekly">{day} weekly</Radio>
                <Radio value="biweekly">{day} biweekly</Radio>
                <Radio value="not-recurring">
                  No this is just a one time pick up
                </Radio>
              </Space>
            </Radio.Group>
            <br />
            <br />
            <Button
              className={styles.normal_btn}
              block
              size="large"
              onClick={() => router.push("/home/scheduler_info")}
            >
              Continue
            </Button>
          </Col>
        </Row>
      </main>
    </div>
  );
});
