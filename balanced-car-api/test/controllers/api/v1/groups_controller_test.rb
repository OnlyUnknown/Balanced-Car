require "test_helper"

class Api::V1::GroupsControllerTest < ActionDispatch::IntegrationTest
  test "should get add" do
    get api_v1_groups_add_url
    assert_response :success
  end

  test "should get remove" do
    get api_v1_groups_remove_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_groups_show_url
    assert_response :success
  end

  test "should get public" do
    get api_v1_groups_public_url
    assert_response :success
  end
end
