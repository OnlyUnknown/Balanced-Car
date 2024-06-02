class Car < ApplicationRecord
    has_many :bills

    belongs_to :car
    belongs_to :user
  end
  