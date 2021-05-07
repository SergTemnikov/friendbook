import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus'

describe("Profilestatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="IT-KAMASUTRA.COM" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("IT-KAMASUTRA.COM");
  });
});