class UsersController < ApplicationController
    def index
        @users = User.all
      end

      def new
        @user = User.new
      end

      def create
        @user = User.new(user_params)
        if @user.save
          session[:user_id] = @user.id
          cookies.signed[:user_id] = @user.id
          #handle a succesfully save
          flash[:success] = "Welcome  #{@user.username} to MyRecipes App!"
          redirect_to user_path(@user)
        else
          render 'new'
        end
      end
    
      def show
        @user = User.find(params[:id])
      end

      def edit
      end
    
      def destroy
        if !@user.admin?
          @user.destroy
          flash[:danger] = "user and all associated recipes have been deleted"
          redirect_to users_path
        end
      end

      def update
        @user = User.find(params[:id])
        if @user.update(user_params)
          flash[:success] = "Your account was updated succesfully"
          redirect_to @user
        else
          render 'edit'
        end
      end
    
      private
    
        def user_params
          params.require(:user).permit(:username, :email, :password, :firstname, :lastname, :nickname, :password_confirmation)
        end
        
        def set_user
          @user = User.find(params[:id])
        end
    
        def require_same_user
          if current_user != @user and !current_user.admin?
            flash[:danger] = "You can only edit or delete your own account"
            redirect_to users_path
          end
        end
      
        def require_admin
          if logged_in? && !current_user.admin?
            flash[:danger] = "Only admin users can perform that action"
            redirect_to root_path
          end
        end
end
