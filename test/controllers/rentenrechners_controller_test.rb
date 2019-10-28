require 'test_helper'

class RentenrechnersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @rentenrechner = rentenrechners(:one)
  end

  test "should get index" do
    get rentenrechners_url
    assert_response :success
  end

  test "should get new" do
    get new_rentenrechner_url
    assert_response :success
  end

  test "should create rentenrechner" do
    assert_difference('Rentenrechner.count') do
      post rentenrechners_url, params: { rentenrechner: {  } }
    end

    assert_redirected_to rentenrechner_url(Rentenrechner.last)
  end

  test "should show rentenrechner" do
    get rentenrechner_url(@rentenrechner)
    assert_response :success
  end

  test "should get edit" do
    get edit_rentenrechner_url(@rentenrechner)
    assert_response :success
  end

  test "should update rentenrechner" do
    patch rentenrechner_url(@rentenrechner), params: { rentenrechner: {  } }
    assert_redirected_to rentenrechner_url(@rentenrechner)
  end

  test "should destroy rentenrechner" do
    assert_difference('Rentenrechner.count', -1) do
      delete rentenrechner_url(@rentenrechner)
    end

    assert_redirected_to rentenrechners_url
  end
end
