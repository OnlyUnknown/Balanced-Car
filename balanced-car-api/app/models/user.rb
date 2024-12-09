class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :api
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  has_many :groups, dependent: :destroy
  has_many :cars, dependent: :destroy
  has_many :drivers, dependent: :destroy
  has_many :revenues, dependent: :destroy
  has_many :bills, dependent: :destroy
end
